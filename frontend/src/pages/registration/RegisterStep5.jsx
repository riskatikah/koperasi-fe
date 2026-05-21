import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Eye, EyeOff } from 'lucide-react';
import './RegistrationPages.css';

const RegisterStep5 = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
    const step1 = JSON.parse(
      sessionStorage.getItem('regStep1')
    );

    const step2 = JSON.parse(
      sessionStorage.getItem('regStep2')
    );
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const payload = {

  nik_ktp: step1.nik,

  nik_employee: step1.nikEmployee,

  full_name: step1.fullName,

  email: step2.email,

  password: password,

  phone_number:
    `+62${step2.mobilePhone}`,

  place_of_birth:
    step1.placeOfBirth,

  date_of_birth:
    step1.dob,

  address:
    step1.address,

  gender:
    step1.gender,

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

  voluntary_saving:
    step2.voluntarySaving,

  payroll_agreement:
    step2.payrollAgree,

  agreement_checked:
    step2.defaultAgree,

  join_date:
    new Date()
      .toISOString()
      .split('T')[0]
};
    // Simulate encryption before saving to database
   
   try {

  const response = await fetch(
    'http://127.0.0.1:8000/api/register/',
    {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify(payload)
    }
  );

  const data = await response.json();

  console.log(data);

  if (response.ok) {

    sessionStorage.clear();

    alert('Register berhasil');

    navigate('/login');

  } else {

    alert(
      data.message || 'Register gagal'
    );
  }

} catch (error) {

  console.error(error);

  alert('Server error');
}
  };

  // Password criteria visual checks
  const hasMinLength = password.length >= 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password);

  const togglePassword = () => setShowPassword(!showPassword);
  const toggleConfirm = () => setShowConfirm(!showConfirm);

  return (
    <div>
      <div className="reg-icon-header">
         <div className="reg-logo-icon-large bg-accent mx-auto">
           <ShieldCheck size={40} color="white" />
         </div>
      </div>
      <h2 className="reg-page-title text-center" style={{marginBottom: "0.5rem", marginTop: "1rem"}}>Welcome! Let's secure your account.</h2>
      <p className="reg-page-subtitle text-center">
        Please create a unique and strong password to<br/> access your savings safely
      </p>

      <form onSubmit={handleSubmit} className="reg-form mt-6">
        <div className="reg-form-group relative">
          <label className="reg-form-label">Password</label>
          <div className="password-input-wrapper relative flex items-center">
             <span className="input-icon-left" style={{ position: 'absolute', left: '12px', zIndex: 1, top: '50%', transform: 'translateY(-50%)', display: 'flex', alignItems: 'center' }}><ShieldCheck size={18} /></span>
             <input
               type={showPassword ? "text" : "password"}
               className="reg-form-input pl-10 pr-10"
               style={{ paddingLeft: '35px', paddingRight: '40px', width: '100%', boxSizing: 'border-box' }}
               placeholder="Password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               required
             />
             <button type="button" onClick={togglePassword} className="password-toggle absolute text-gray-400" style={{ position: 'absolute', right: '12px', zIndex: 1, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', padding: 0, display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
               {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
             </button>
          </div>
        </div>

        <div className="password-criteria grid-2-col mt-2 mb-2">
          <div className={`criteria-item ${hasMinLength ? 'met' : ''}`}><span className="check-box">{hasMinLength ? '☑' : '☐'}</span> At least 8 characters</div>
          <div className={`criteria-item ${hasUpperCase ? 'met' : ''}`}><span className="check-box">{hasUpperCase ? '☑' : '☐'}</span> One uppercase letter</div>
          <div className={`criteria-item ${hasNumber ? 'met' : ''}`}><span className="check-box">{hasNumber ? '☑' : '☐'}</span> One number</div>
          <div className={`criteria-item ${hasSymbol ? 'met' : ''}`}><span className="check-box">{hasSymbol ? '☑' : '☐'}</span> One special symbol</div>
        </div>

        <div className="reg-form-group relative mt-2">
          <label className="reg-form-label">Confirm Password</label>
          <div className="password-input-wrapper relative flex items-center">
             <span className="input-icon-left" style={{ position: 'absolute', left: '12px', zIndex: 1, top: '50%', transform: 'translateY(-50%)', display: 'flex', alignItems: 'center' }}><ShieldCheck size={18} /></span>
             <input
               type={showConfirm ? "text" : "password"}
               className="reg-form-input pl-10 pr-10"
               style={{ paddingLeft: '35px', paddingRight: '40px', width: '100%', boxSizing: 'border-box' }}
               placeholder="Re-enter your password"
               value={confirmPassword}
               onChange={(e) => setConfirmPassword(e.target.value)}
               required
             />
             <button type="button" onClick={toggleConfirm} className="password-toggle absolute text-gray-400" style={{ position: 'absolute', right: '12px', zIndex: 1, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', padding: 0, display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
               {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
             </button>
          </div>
        </div>

        <div className="reg-actions full-width mt-6">
          <button type="submit" className="btn-primary-full">
            Finalize Account Setup &rarr;
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterStep5;
