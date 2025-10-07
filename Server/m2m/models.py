from django.db import models

# Create your models here.
# m2m/models.py
from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone_number = models.CharField(max_length=15, blank=True)
    blood_group = models.CharField(max_length=3, blank=True, null=True) 
    def __str__(self):
        return f'{self.user.username} Profile'