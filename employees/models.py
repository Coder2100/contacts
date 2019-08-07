from django.db import models



#for users
from django.contrib.auth.models import User
# Create your models here.

class Employee(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=225, unique=True)
    quote = models.TextField()
    owner = models.ForeignKey(User, related_name="employees", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
