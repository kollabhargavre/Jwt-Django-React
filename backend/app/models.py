from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractBaseUser,PermissionsMixin
from .managers import CustomUserManager
class MyUser(AbstractBaseUser,PermissionsMixin):
    email = models.EmailField(max_length=64, unique=True)
    username = models.CharField(max_length=64)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_superuser = models.BooleanField(default=False)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    objects=CustomUserManager()

    def __str__(self):
        return self.email

class Note(models.Model):
    user=models.ForeignKey(MyUser,on_delete=models.CASCADE,null=True)
    body=models.TextField()