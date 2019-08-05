from .models import Employee
from rest_framework import viewsets, permissions

from .serializers import EmployeeSerializer


class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    permissions_classes = (permissions.AllowAny,)

    serializer_class = EmployeeSerializer
