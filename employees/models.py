from django.db import models

# Create your models here.


class Employee(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=225, unique=True)
    quote = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
