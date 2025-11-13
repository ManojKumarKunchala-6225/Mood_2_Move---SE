import logging
from django.contrib.auth.models import User
from rest_framework import generics, permissions, serializers, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view   # ✅ Added this import
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from .models import Place, Mood, User 
from .models import Testimonial
from .serializers import TestimonialSerializer

# ✅ Imports for Password Reset
from django.contrib.auth.tokens import default_token_generator
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes, force_str
from django.core.mail import send_mail
from django.conf import settings
from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404 

from .recommend_logic import find_recommendations
from .models import Profile

# 🚀 SERIALIZER IMPORTS
from .serializers import (
    ChangePasswordSerializer, 
    RecommendationRequestSerializer,
    UserProfileSerializer,
    UserProfileUpdateSerializer,
    RegisterSerializer,
    PasswordResetRequestSerializer,
    PasswordResetConfirmSerializer,
)

User = get_user_model()
logger = logging.getLogger(__name__)

# ✅ ADD THIS — your new stats endpoint (works with your React app)
@api_view(['GET'])
def stats_view(request):
    data = {
        "destinations": Place.objects.count(),
        "moods": Mood.objects.count(),
        "travelers": User.objects.count(),
    }
    return Response(data)


# =====================================================================
# TOKEN SERIALIZER
# =====================================================================
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    """Custom token serializer to allow login with either username or email."""
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


# =====================================================================
# API VIEWS
# =====================================================================

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
    """API view to update the currently authenticated user's profile data."""
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = UserProfileUpdateSerializer
    http_method_names = ['patch'] 

    def get_object(self):
        return self.request.user


class ChangePasswordView(generics.GenericAPIView):
    """An endpoint for changing the currently authenticated user's password."""
    serializer_class = ChangePasswordSerializer
    permission_classes = (permissions.IsAuthenticated,) 
    
    def get_object(self, queryset=None):
        return self.request.user

    def post(self, request, *args, **kwargs):
        self.object = self.get_object()
        serializer = self.get_serializer(data=request.data, context={'request': request}) 

        if serializer.is_valid(raise_exception=True):
            self.object.set_password(serializer.validated_data['new_password1'])
            self.object.save()
            
            return Response(
                {"detail": "Password updated successfully."},
                status=status.HTTP_200_OK
            )

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class HelloWorldView(APIView):
    """A simple test view."""
    permission_classes = [permissions.AllowAny]

    def get(self, request):
        return Response({"message": "Hello, world! Your backend is running."})


# ✅ --- PASSWORD RESET VIEWS ---
class PasswordResetRequestView(generics.GenericAPIView):
    """Takes an email and sends a password reset link if the user exists."""
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
            pass 
            
        return Response({"message": "If an account with that email exists, a password reset link has been sent."}, status=status.HTTP_200_OK)


class PasswordResetConfirmView(generics.GenericAPIView):
    """Verifies the token and uid and resets the user's password."""
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

class TestimonialListView(generics.ListAPIView):
    queryset = Testimonial.objects.all().order_by('-created_at')
    serializer_class = TestimonialSerializer
    permission_classes = [permissions.AllowAny]