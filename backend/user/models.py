from django.db import models
from django.contrib.auth.models import AbstractUser

class Profile(AbstractUser):
    email = models.EmailField(unique=True)
    cpf = models.CharField(max_length=11, unique=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []
