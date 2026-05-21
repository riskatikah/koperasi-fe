from django.urls import path

from .views import (
    register_member,
    login_member,
    send_otp,
)
from .views import (
    register_member,
    login_member,
    send_otp,
    verify_otp,
)
urlpatterns = [
    path('register/', register_member),
    path('login/', login_member),
    path('send-otp/', send_otp),
    path('verify-otp/', verify_otp),
]