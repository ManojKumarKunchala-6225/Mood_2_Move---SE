from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError
# Assuming your User model is being extended by a Profile model in .models
from .models import Profile 

User = get_user_model() # Best practice: always use get_user_model()

# ====================================================================
# AUTH & PROFILE SERIALIZERS
# ====================================================================

class RegisterSerializer(serializers.ModelSerializer):
    """Serializer for the user registration endpoint."""
    phone_number = serializers.CharField(max_length=15, write_only=True, required=True)
    name = serializers.CharField(write_only=True, required=False, allow_blank=True) # Maps to first_name

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
            first_name=first_name
        )
        Profile.objects.create(user=user, phone_number=phone_number)
        return user


class UserProfileSerializer(serializers.ModelSerializer):
    """
    Serializer to get user details including data from the profile (READ ONLY).
    """
    phone_number = serializers.CharField(source='profile.phone_number', read_only=True)
    blood_group = serializers.CharField(source='profile.blood_group', read_only=True)
    name = serializers.CharField(source='first_name', read_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'name', 'phone_number', 'blood_group']


# 🛑 FIX: MISSING SERIALIZER ADDED 🛑
class UserProfileUpdateSerializer(serializers.ModelSerializer):
    """
    Serializer to handle PATCH requests for updating User and Profile data.
    """
    phone_number = serializers.CharField(source='profile.phone_number', required=False, allow_blank=True)
    blood_group = serializers.CharField(source='profile.blood_group', required=False, allow_blank=True)
    name = serializers.CharField(source='first_name', required=False, allow_blank=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'name', 'phone_number', 'blood_group']
        read_only_fields = ['id'] 
        extra_kwargs = {
            'username': {'required': False},
            'email': {'required': False},
        }

    def update(self, instance, validated_data):
        profile_data = validated_data.pop('profile', {})

        # 1. Update User model fields
        if 'first_name' in validated_data:
            instance.first_name = validated_data.pop('first_name')
            
        user = super().update(instance, validated_data)
        
        # 2. Update Profile model fields
        profile = user.profile
        
        if 'phone_number' in profile_data:
            profile.phone_number = profile_data['phone_number']
        
        if 'blood_group' in profile_data:
            profile.blood_group = profile_data['blood_group']

        profile.save()
        user.save()
        return user


# 🚀 NEW: ChangePasswordSerializer
class ChangePasswordSerializer(serializers.Serializer):
    """
    Serializer for the password change endpoint.
    Requires old_password, new_password1, and new_password2.
    """
    old_password = serializers.CharField(required=True)
    new_password1 = serializers.CharField(required=True)
    new_password2 = serializers.CharField(required=True)

    def validate_old_password(self, value):
        user = self.context['request'].user
        if not user.check_password(value):
            raise serializers.ValidationError(
                "Your old password was entered incorrectly. Please try again."
            )
        return value

    def validate(self, data):
        """
        Check that the two new passwords match and validate against
        Django's configured password complexity rules.
        """
        if data['new_password1'] != data['new_password2']:
            raise serializers.ValidationError({
                "new_password2": ["The two new passwords did not match."]
            })
        
        # Check against Django's password validators (complexity, history, etc.)
        try:
            validate_password(data['new_password1'], self.context['request'].user)
        except ValidationError as e:
            # Re-raise as a DRF validation error, attached to the new_password1 field
            raise serializers.ValidationError({"new_password1": list(e.messages)})

        return data


# ====================================================================
# RECOMMENDATION & PASSWORD RESET SERIALIZERS
# ====================================================================

class RecommendationRequestSerializer(serializers.Serializer):
    """Handles validation for the recommendation request."""
    mood = serializers.CharField(max_length=100, required=True)
    people = serializers.CharField(max_length=100, required=True)
    location = serializers.CharField(max_length=100, required=True)


class PasswordResetRequestSerializer(serializers.Serializer):
    """Serializer for the password reset request."""
    email = serializers.EmailField(required=True)


class PasswordResetConfirmSerializer(serializers.Serializer):
    """Serializer for confirming the password reset."""
    password = serializers.CharField(write_only=True, required=True)
