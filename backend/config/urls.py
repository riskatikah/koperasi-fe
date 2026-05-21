from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

def home(request):
    return HttpResponse("Backend jalan!")

urlpatterns = [
    path('admin/', admin.site.urls),

    # API APP
    path('api/', include('api.urls')),

    # JWT LOGIN
    path('api/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),

    # JWT REFRESH
    path('api/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    # HOME
    path('', home),
]