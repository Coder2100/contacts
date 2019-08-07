from .models import Employee
from rest_framework import viewsets, permissions

from .serializers import EmployeeSerializer


class EmployeeViewSet(viewsets.ModelViewSet):
    #queryset = Employee.objects.all()
    #permissions_classes = (permissions.AllowAny,)
    permissions_classes = [permissions.IsAuthenticated, ]
# only return qst of the login user
    serializer_class = EmployeeSerializer

    def get_queryset(self):
        return self.request.user.employees.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
