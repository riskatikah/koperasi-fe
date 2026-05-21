from django.db import models

class Users(models.Model):

    username = models.CharField(max_length=100)

    email = models.EmailField(unique=True)

    password = models.CharField(max_length=255)

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    class Meta:
        db_table = 'users'
        managed = False


class Department(models.Model):
    class Meta:
        db_table = 'departments'
        managed = False


class EmployeeStatus(models.Model):
    class Meta:
        db_table = 'employee_statuses'
        managed = False


class Status(models.Model):
    class Meta:
        db_table = 'statuses'
        managed = False


class Member(models.Model):
    GENDER_CHOICES = [
        ('Male', 'Male'),
        ('Female', 'Female'),
    ]

    user = models.ForeignKey(
        Users,
        on_delete=models.RESTRICT,
        related_name='members'
    )

    department = models.ForeignKey(
        Department,
        on_delete=models.RESTRICT,
        related_name='members'
    )

    employee_status = models.ForeignKey(
        EmployeeStatus,
        on_delete=models.RESTRICT,
        related_name='members'
    )

    member_status = models.ForeignKey(
        Status,
        on_delete=models.RESTRICT,
        related_name='members'
    )

    nik_ktp = models.CharField(
        max_length=16,
        unique=True
    )

    nik_employee = models.CharField(
        max_length=50
    )

    npwp_number = models.CharField(
        max_length=50,
        blank=True,
        null=True
    )

    full_name = models.CharField(
        max_length=100
    )

    phone_number = models.CharField(
        max_length=20
    )

    email = models.EmailField(
        unique=True
    )

    password = models.CharField(
        max_length=255
    )

    place_of_birth = models.CharField(
        max_length=100
    )

    date_of_birth = models.DateField()

    address = models.TextField()

    gender = models.CharField(
        max_length=20,
        choices=GENDER_CHOICES
    )

    voluntary_saving = models.DecimalField(
        max_digits=12,
        decimal_places=2,
        default=0
    )

    payroll_agreement = models.BooleanField(
        default=False
    )

    agreement_checked = models.BooleanField(
        default=False
    )

    email_verified = models.BooleanField(
        default=False
    )

    join_date = models.DateField()

    ktp_file_path = models.CharField(
        max_length=500,
        blank=True,
        null=True
    )

    npwp_file = models.CharField(
        max_length=500,
        blank=True,
        null=True
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    updated_at = models.DateTimeField(
        auto_now=True
    )

    deleted_at = models.DateTimeField(
        null=True,
        blank=True
    )

    class Meta:
        db_table = 'members'
        managed = False

    def __str__(self):
        return f"{self.full_name} ({self.nik_ktp})"


# =========================================
# EMAIL OTP MODEL
# =========================================

class EmailOTP(models.Model):

    email = models.EmailField()

    otp_code = models.CharField(
        max_length=6
    )

    is_verified = models.BooleanField(
        default=False
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    class Meta:
        db_table = 'email_otps'

    def __str__(self):
        return f"{self.email} - {self.otp_code}"