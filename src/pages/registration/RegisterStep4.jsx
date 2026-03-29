import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MailCheck } from 'lucide-react';
import './RegistrationPages.css';

const RegisterStep4 = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/register/step-5');
  };

  return (
    <div>
      <div className="reg-icon-header">
        <MailCheck size={48} color="var(--color-primary)" />
      </div>
      <h2 className="reg-page-title text-center" style={{marginBottom: "0.5rem"}}>Email Verification</h2>
      <p className="reg-page-subtitle text-center">
        We have sent a verification code to your email.<br/> Please enter the code below to verify your email address.
      </p>

      <form onSubmit={handleSubmit} className="reg-form mt-6">
        <div className="reg-form-group">
          <label className="reg-form-label text-center">Verification Code</label>
          <input
            type="text"
            className="reg-form-input text-center text-letter-spacing"
            placeholder="Enter 6-digit code"
            maxLength={6}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
            autoFocus
          />
        </div>

        <div className="reg-actions justify-center mt-6">
          <button type="button" className="btn-secondary" onClick={() => navigate('/register/step-3')}>
            Back
          </button>
          <button type="submit" className="btn-primary-sm" disabled={code.length < 6}>
            Verify Email &rarr;
          </button>
        </div>
        
        <p className="text-center mt-4">
          <a href="#" className="text-link">Didn't receive code? Resend</a>
        </p>
      </form>
    </div>
  );
};

export default RegisterStep4;
