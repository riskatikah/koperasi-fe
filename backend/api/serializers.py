from rest_framework import serializers
from .models import Member


class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = [
            'user',

            'nik_ktp',
            'nik_employee',
            'npwp_number',

            'full_name',
            'phone_number',
            'email',

            'place_of_birth',
            'date_of_birth',
            'address',
            'gender',

            'department',
            'employee_status',
            'member_status',

            'voluntary_saving',

            'payroll_agreement', 
            'email_verified',

            'join_date',

            'ktp_file_path',
            'npwp_file',
        ]

    def validate_nik_ktp(self, value):
        if len(value) != 16:
            raise serializers.ValidationError(
                "NIK KTP harus 16 digit."
            )

        if not value.isdigit():
            raise serializers.ValidationError(
                "NIK KTP harus berupa angka."
            )

        return value

    def validate_phone_number(self, value):
        if not value.startswith('+'):
            raise serializers.ValidationError(
                "Format nomor harus E.164, contoh: +628123456789"
            )

        return value
        