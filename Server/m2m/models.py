from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone_number = models.CharField(max_length=15, blank=True)
    blood_group = models.CharField(max_length=3, blank=True, null=True)
    
    # --- ADDED GENDER FIELD ---
    GENDER_CHOICES = [
        ('Male', 'Male'),
        ('Female', 'Female'),
        ('Other', 'Other'),
        ('N/A', 'Prefer not to say'),
    ]
    gender = models.CharField(
        max_length=10,
        choices=GENDER_CHOICES,
        default='N/A',
        blank=True,
        null=True
    )
    # --------------------------
    
    def __str__(self):
        return f'{self.user.username} Profile'

# REMINDER: After saving this, you must run migrations:
# python manage.py makemigrations
# python manage.py migrate