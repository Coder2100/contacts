
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('frontend.urls')),
    path('admin/', admin.site.urls),
    path('', include('employees.urls')),
    path('', include('accounts.urls'))
]
