from django.contrib.auth.hashers import make_password, check_password
from django.core.mail import send_mail
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken

from .models import (
    Member,
    EmailOTP,
    Users
)

import random


# =========================
# REGISTER MEMBER
# =========================
@api_view(['POST'])
def register_member(request):

    data = request.data

    try:

        # CEK EMAIL SUDAH VERIFIKASI
        otp_verified = EmailOTP.objects.filter(
            email=data['email'],
            is_verified=True
        ).exists()

        if not otp_verified:
            return Response({
                "success": False,
                "message": "Email belum diverifikasi"
            }, status=400)

        member = Member.objects.create(
            nik_ktp=data['nik_ktp'],
            nik_employee=data['nik_employee'],
            full_name=data['full_name'],
            phone_number=data['phone_number'],
            email=data['email'],
            password=make_password(data['password']),
            place_of_birth=data['place_of_birth'],
            date_of_birth=data['date_of_birth'],
            address=data['address'],
            gender=data['gender'],
            voluntary_saving=data.get('voluntary_saving', 0),
            payroll_agreement=data.get('payroll_agreement', False),
            agreement_checked=data.get('agreement_checked', False),
            email_verified=True,
            join_date=data['join_date'],

            # DEFAULT FK
            user_id=1,
            department_id=1,
            employee_status_id=1,
            member_status_id=1,
        )

        return Response({
            "success": True,
            "message": "Register berhasil"
        })

    except Exception as e:

        return Response({
            "success": False,
            "error": str(e)
        }, status=400)


# =========================
# LOGIN MEMBER
# =========================
@api_view(['POST'])
def login_member(request):

    email = request.data.get('email')
    password = request.data.get('password')

    try:

        member = Member.objects.get(email=email)

        # CEK PASSWORD
        if not check_password(password, member.password):

            return Response({
                "success": False,
                "message": "Password salah"
            }, status=400)

        # JWT TOKEN
        refresh = RefreshToken.for_user(member)

        return Response({
            "success": True,
            "message": "Login berhasil",

            "access": str(refresh.access_token),
            "refresh": str(refresh),

            "member": {
                "id": member.id,
                "full_name": member.full_name,
                "email": member.email,
            }
        })

    except Member.DoesNotExist:

        return Response({
            "success": False,
            "message": "Email tidak ditemukan"
        }, status=400)


# =========================
# SEND OTP
# =========================
@api_view(['POST'])
def send_otp(request):

    try:

        email = request.data.get('email')

        # VALIDASI EMAIL
        if not email:

            return Response({
                "success": False,
                "message": "Email wajib diisi"
            }, status=400)

        # GENERATE OTP
        otp_code = str(random.randint(100000, 999999))

        # HAPUS OTP LAMA
        EmailOTP.objects.filter(
            email=email
        ).delete()

        # SIMPAN OTP
        EmailOTP.objects.create(
            email=email,
            otp_code=otp_code
        )

        # KIRIM EMAIL
        send_mail(
            'Kode Verifikasi Koperasi',

            f'''
Halo,

Kode OTP verifikasi akun koperasi kamu adalah:

{otp_code}

Jangan berikan kode ini kepada siapa pun.
            ''',

            'admin@koperasi.com',
            [email],

            fail_silently=False,
        )

        return Response({
            "success": True,
            "message": "OTP berhasil dikirim"
        })

    except Exception as e:

        return Response({
            "success": False,
            "error": str(e)
        }, status=400)


# =========================
# VERIFY OTP
# =========================
@api_view(['POST'])
def verify_otp(request):

    try:

        email = request.data.get('email')
        otp = request.data.get('otp')

        # VALIDASI INPUT
        if not email or not otp:

            return Response({
                "success": False,
                "message": "Email dan OTP wajib diisi"
            }, status=400)

        # CARI OTP
        otp_data = EmailOTP.objects.filter(
            email=email,
            otp_code=otp,
            is_verified=False
        ).latest('created_at')

        # UPDATE VERIFIED
        otp_data.is_verified = True
        otp_data.save()

        return Response({
            "success": True,
            "message": "OTP valid"
        })

    except EmailOTP.DoesNotExist:

        return Response({
            "success": False,
            "message": "OTP salah atau expired"
        }, status=400)

    except Exception as e:

        return Response({
            "success": False,
            "error": str(e)
        }, status=400)