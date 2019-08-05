from rest_framework import serializers

from .models import Employee
# create employee serialiser


class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee

        fields = ['id', 'name', 'email', 'quote', 'created_at']
