# m2m/views.py

import logging
from django.contrib.auth.models import User
from rest_framework import generics, permissions, serializers, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

# ✅ Imports for Password Reset
from django.contrib.auth.tokens import default_token_generator
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes, force_str
from django.core.mail import send_mail
from django.conf import settings

from .recommend_logic import find_recommendations
from .models import Profile # Make sure Profile is imported

# Get an instance of a logger
logger = logging.getLogger(__name__)


# ==============================================================================
# SERIALIZERS
# ==============================================================================

class UserProfileSerializer(serializers.ModelSerializer):
    """
    Serializer to get user details including data from the profile.
    Used for READ operations (GET /api/profile/).
    """
    # These fields are read from the Profile model
    phone_number = serializers.CharField(source='profile.phone_number', read_only=True)
    blood_group = serializers.CharField(source='profile.blood_group', read_only=True)
    
    # Add name field to retrieve
    name = serializers.CharField(source='first_name', read_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'name', 'phone_number', 'blood_group']


# 🛠️ CRITICAL FIX APPLIED TO THIS SERIALIZER
class UserProfileUpdateSerializer(serializers.ModelSerializer):
    """
    Serializer to handle PATCH requests for updating User and Profile data.
    """
    # Maps phone_number and blood_group to the Profile model
    phone_number = serializers.CharField(source='profile.phone_number', required=False, allow_blank=True)
    blood_group = serializers.CharField(source='profile.blood_group', required=False, allow_blank=True)
    
    # Maps name to the first_name field of the User model
    name = serializers.CharField(source='first_name', required=False, allow_blank=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'name', 'phone_number', 'blood_group']
        read_only_fields = ['id'] 
        extra_kwargs = {
            'username': {'required': False},
            'email': {'required': False},
        }

    # 🔑 CORRECTED update method to handle nested Profile data from source='profile.field'
    def update(self, instance, validated_data):
        # 1. Extract the nested profile data dictionary if it exists
        #    This is where DRF places fields defined with source='profile.field'
        profile_data = validated_data.pop('profile', {})

        # 2. Update User model fields
        
        # Apply 'name' (which maps to first_name)
        if 'first_name' in validated_data:
            instance.first_name = validated_data.pop('first_name')
            
        # Call super().update to handle direct User fields (username, email)
        user = super().update(instance, validated_data)
        
        # 3. Update Profile model fields
        profile = user.profile
        
        # Apply phone_number and blood_group from the extracted profile_data
        if 'phone_number' in profile_data:
            profile.phone_number = profile_data['phone_number']
        
        if 'blood_group' in profile_data:
            profile.blood_group = profile_data['blood_group']

        # Save both instances
        profile.save()
        user.save()
        return user


class RegisterSerializer(serializers.ModelSerializer):
    """Serializer for the user registration endpoint."""
    phone_number = serializers.CharField(max_length=15, write_only=True, required=True)
    name = serializers.CharField(write_only=True, required=False, allow_blank=True) # Added name for registration

    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'email', 'phone_number', 'name')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        phone_number = validated_data.pop('phone_number')
        first_name = validated_data.pop('name', '')
        
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
            first_name=first_name # Save the name field
        )
        Profile.objects.create(user=user, phone_number=phone_number)
        return user


class RecommendationRequestSerializer(serializers.Serializer):
    """Handles validation for the recommendation request."""
    mood = serializers.CharField(max_length=100, required=True)
    people = serializers.CharField(max_length=100, required=True)
    location = serializers.CharField(max_length=100, required=True)


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    """
    Custom token serializer to allow login with either username or email.
    """
    def validate(self, attrs):
        identifier = attrs.get('username')
        password = attrs.get('password')
        user = None

        try:
            user = User.objects.get(username=identifier)
        except User.DoesNotExist:
            try:
                user = User.objects.get(email=identifier)
            except User.DoesNotExist:
                pass

        if user and user.check_password(password):
            refresh = self.get_token(user)
            data = {
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            }
            self.user = user
            return data
        
        raise serializers.ValidationError('No active account found with the given credentials')


class PasswordResetRequestSerializer(serializers.Serializer):
    """Serializer for the password reset request."""
    email = serializers.EmailField(required=True)


class PasswordResetConfirmSerializer(serializers.Serializer):
    """Serializer for confirming the password reset."""
    password = serializers.CharField(write_only=True, required=True)


# ==============================================================================
# API VIEWS
# ==============================================================================

class MyTokenObtainPairView(TokenObtainPairView):
    """Custom view to use the custom token serializer."""
    serializer_class = MyTokenObtainPairSerializer


class RegisterView(generics.CreateAPIView):
    """API endpoint for creating a new user."""
    queryset = User.objects.all()
    permission_classes = (permissions.AllowAny,)
    serializer_class = RegisterSerializer


class RecommendationView(APIView):
    """API endpoint for activity recommendations."""
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        serializer = RecommendationRequestSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            user_choices = serializer.validated_data
            recommendations = find_recommendations(user_choices)

            if not recommendations:
                return Response(
                    {"message": "No matching places found for your preferences."}, 
                    status=status.HTTP_404_NOT_FOUND
                )
            
            return Response(recommendations, status=status.HTTP_200_OK)

        except Exception as e:
            logger.error(f"An unexpected error occurred in RecommendationView: {e}", exc_info=True)
            return Response(
                {"error": "An internal server error occurred."},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class UserProfileView(generics.RetrieveAPIView):
    """API view to retrieve the currently authenticated user's profile data."""
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = UserProfileSerializer

    def get_object(self):
        return self.request.user


class ProfileUpdateAPIView(generics.UpdateAPIView):
    """
    API view to update the currently authenticated user's profile data.
    Handles PATCH requests from the frontend.
    """
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = UserProfileUpdateSerializer
    http_method_names = ['patch'] # Only allow PATCH updates

    def get_object(self):
        # Set the object to be updated to the currently authenticated user
        return self.request.user


class HelloWorldView(APIView):
    """A simple test view."""
    permission_classes = [permissions.AllowAny]

    def get(self, request):
        return Response({"message": "Hello, world! Your backend is running."})


# ✅ --- PASSWORD RESET VIEWS ---

class PasswordResetRequestView(generics.GenericAPIView):
    """
    Takes an email and sends a password reset link if the user exists.
    """
    permission_classes = [permissions.AllowAny]
    serializer_class = PasswordResetRequestSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        email = serializer.validated_data['email']
        
        try:
            user = User.objects.get(email=email)
            
            uid = urlsafe_base64_encode(force_bytes(user.pk))
            token = default_token_generator.make_token(user)
            
            reset_url = f"http://localhost:5173/reset-password/{uid}/{token}/"
            
            subject = "Password Reset for Your Mood2Move Account"
            message = f"Hello,\n\nYou requested a password reset. Click the link below to set a new password:\n{reset_url}\n\nIf you did not request this, please ignore this email.\n\nThanks,\nThe Mood2Move Team"
            
            send_mail(subject, message, settings.DEFAULT_FROM_EMAIL, [user.email])
            
        except User.DoesNotExist:
            pass # Don't reveal if the user does not exist for security
            
        return Response({"message": "If an account with that email exists, a password reset link has been sent."}, status=status.HTTP_200_OK)


class PasswordResetConfirmView(generics.GenericAPIView):
    """
    Verifies the token and uid and resets the user's password.
    """
    permission_classes = [permissions.AllowAny]
    serializer_class = PasswordResetConfirmSerializer

    def post(self, request, uidb64, token, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        password = serializer.validated_data['password']

        try:
            uid = force_str(urlsafe_base64_decode(uidb64))
            user = User.objects.get(pk=uid)
        except (TypeError, ValueError, OverflowError, User.DoesNotExist):
            user = None

        if user is not None and default_token_generator.check_token(user, token):
            user.set_password(password)
            user.save()
            return Response({"message": "Password has been reset successfully."}, status=status.HTTP_200_OK)
        else:
            return Response({"error": "Invalid token or user ID."}, status=status.HTTP_400_BAD_REQUEST)