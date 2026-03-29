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

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/register/under-review');
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
          <div className="password-input-wrapper relative">
             <span className="input-icon-left"><ShieldCheck size={18} /></span>
             <input
               type={showPassword ? "text" : "password"}
               className="reg-form-input pl-10 pr-10"
               placeholder="Password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               required
             />
             <button type="button" onClick={togglePassword} className="password-toggle absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
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
          <div className="password-input-wrapper relative">
             <span className="input-icon-left"><ShieldCheck size={18} /></span>
             <input
               type={showConfirm ? "text" : "password"}
               className="reg-form-input pl-10 pr-10"
               placeholder="Re-enter your password"
               value={confirmPassword}
               onChange={(e) => setConfirmPassword(e.target.value)}
               required
             />
             <button type="button" onClick={toggleConfirm} className="password-toggle absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
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
