import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MailCheck } from 'lucide-react';
import './RegistrationPages.css';

const RegisterStep4 = () => {

  const navigate = useNavigate();

  const [code, setCode] = useState([
    '',
    '',
    '',
    '',
    '',
    ''
  ]);

  const [loading, setLoading] = useState(false);

  // =========================
  // AUTO SEND OTP
  // =========================
  useEffect(() => {

    sendOtp();

  }, []);

  // =========================
  // SEND OTP
  // =========================
  const sendOtp = async () => {

    try {

      const step2 = JSON.parse(
        sessionStorage.getItem('regStep2')
      );

      if (!step2?.email) {
        alert('Email tidak ditemukan');
        return;
      }
console.log(step2);
console.log(step2.email);
      const response = await fetch(
        'http://127.0.0.1:8000/api/send-otp/',
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json',
          },

          body: JSON.stringify({
            email: step2.email
          }),
        }
      );

      const data = await response.json();

     console.log('SEND OTP:', JSON.stringify(data, null, 2));

      if (response.ok) {

        alert('Kode OTP berhasil dikirim');

      } else {

        alert(data.message || 'Gagal kirim OTP');
      }

    } catch (error) {

      console.error(error);

      alert('Server error');
    }
  };

  // =========================
  // INPUT OTP
  // =========================
  const handleChange = (index, value) => {

    if (value && !/^\d+$/.test(value)) return;

    const newCode = [...code];

    if (value.length > 1) {

      const pasted = value.slice(0, 6).split('');

      for (let i = 0; i < pasted.length; i++) {
        newCode[i] = pasted[i];
      }

      setCode(newCode);

      return;
    }

    newCode[index] = value;

    setCode(newCode);

    if (value && index < 5) {

      const next = document.getElementById(
        `code-${index + 1}`
      );

      if (next) next.focus();
    }
  };

  // =========================
  // BACKSPACE
  // =========================
  const handleKeyDown = (index, e) => {

    if (
      e.key === 'Backspace' &&
      !code[index] &&
      index > 0
    ) {

      const prev = document.getElementById(
        `code-${index - 1}`
      );

      if (prev) prev.focus();
    }
  };

  // =========================
  // VERIFY OTP + REGISTER
  // =========================
  const handleSubmit = async (e) => {

    e.preventDefault();

    const fullCode = code.join('');
    console.log('FULL OTP:', fullCode);
    if (fullCode.length !== 6) {

      alert('OTP harus 6 digit');
      return;
    }

    try {

      setLoading(true);

      const step1 = JSON.parse(
        sessionStorage.getItem('regStep1')
      );

      const step2 = JSON.parse(
        sessionStorage.getItem('regStep2')
      );

      // =========================
      // VERIFY OTP
      // =========================
      const verifyResponse = await fetch(
        'http://127.0.0.1:8000/api/verify-otp/',
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json'
          },

          body: JSON.stringify({
            email: step2.email,
            otp: fullCode
          })
        }
      );

      const verifyData =
        await verifyResponse.json();

      console.log('VERIFY OTP:', verifyData);

      if (!verifyResponse.ok) {

        alert(
          verifyData.message || 'OTP salah'
        );

        setLoading(false);

        return;
      }
      sessionStorage.setItem(
        'otpVerified',
        'true'
      );
      // =========================
      // REGISTER MEMBER
      // =========================
      const payload = {

        nik_ktp: step1.nik,

        nik_employee: step1.nikEmployee,

        full_name: step1.fullName,

        email: step2.email,

        phone_number:
          step2.mobilePhone.startsWith('+62')
            ? step2.mobilePhone
            : `+62${step2.mobilePhone}`,

        password: step1.password,

        place_of_birth: step1.placeOfBirth,

        date_of_birth: step1.dob,

        address: step1.address,

        gender:
          step1.gender === 'male'
            ? 'Male'
            : 'Female',

        department:
          step2.department === 'it'
            ? 1
            : step2.department === 'hr'
            ? 2
            : step2.department === 'finance'
            ? 3
            : 4,

        employee_status:
          step2.employeeStatus === 'permanent'
            ? 1
            : 2,

        member_status: 1,

        join_date:
          new Date()
            .toISOString()
            .split('T')[0],

        ktp_file_path:
          'uploads/ktp/default.png',

        npwp_file:
          'uploads/npwp/default.png'
      };

      console.log('REGISTER PAYLOAD:', payload);

      const registerResponse = await fetch(
        'http://127.0.0.1:8000/api/register/',
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json'
          },

          body: JSON.stringify(payload)
        }
      );

      const registerData =
        await registerResponse.json();

      console.log(
        'REGISTER RESPONSE:',
        registerData
      );

      if (registerResponse.ok) {

        sessionStorage.removeItem('regStep1');
        sessionStorage.removeItem('regStep2');

        alert('Register berhasil');

        navigate('/register/step-5');

      } else {

       alert(data.error || data.message || 'Register gagal');
        console.log(data);
      }

    } catch (error) {

      console.error(error);

      alert('Server error');

    } finally {

      setLoading(false);
    }
  };

  return (
    <div>

      <div className="reg-icon-header">
        <MailCheck
          size={48}
          color="var(--color-primary)"
        />
      </div>

      <h2
        className="reg-page-title text-center"
        style={{ marginBottom: '0.5rem' }}
      >
        Email Verification
      </h2>

      <p className="reg-page-subtitle text-center">
        We have sent a verification code
        to your email.
        <br />
        Please enter the code below
        to verify your email address.
      </p>


      <form
      
        onSubmit={handleSubmit}
        className="reg-form mt-6"
      >

        <div className="reg-form-group">

          <label
            className="reg-form-label text-center"
          >
            Verification Code
          </label>

          <div
            style={{
              display: 'flex',
              gap: '0.5rem',
              justifyContent: 'center',
              marginTop: '1rem'
            }}
          >

            {code.map((digit, index) => (

              <input
                key={index}

                id={`code-${index}`}

                type="text"

                maxLength={1}

                value={digit}

                onChange={(e) =>
                  handleChange(
                    index,
                    e.target.value
                  )
                }

                onKeyDown={(e) =>
                  handleKeyDown(index, e)
                }

                className="reg-form-input text-center"

                style={{
                  width: '3rem',
                  height: '3.5rem',
                  fontSize: '1.5rem',
                  padding: '0',
                  borderRadius: '8px',
                  textAlign: 'center'
                }}

                required

                autoFocus={index === 0}
              />

            ))}

          </div>
        </div>

        <div
          className="reg-actions"
          style={{
            justifyContent: 'center',
            marginTop: '2rem',
            gap: '1rem'
          }}
        >

          <button
            type="button"
            className="btn-secondary"
            onClick={() =>
              navigate('/register/step-3')
            }
          >
            Back
          </button>

          <button
            type="submit"
            className="btn-primary-sm"
            disabled={
              code.join('').length < 6 ||
              loading
            }
          >
            {
              loading
                ? 'Loading...'
                : 'Verify Email'
            }
          </button>

        </div>

        <p
          className="text-center"
          style={{ marginTop: '1rem' }}
        >
          <button
            type="button"
            onClick={sendOtp}
            className="text-link"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Didn’t receive code? Resend
          </button>
        </p>

      </form>

    </div>
  );
};

export default RegisterStep4;