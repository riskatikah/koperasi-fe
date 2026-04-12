import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MailCheck } from 'lucide-react';
import './RegistrationPages.css';

const RegisterStep4 = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState(['', '', '', '', '', '']);

  const handleChange = (index, value) => {
    // allow only numbers
    if (value && !/^\d+$/.test(value)) return;
    
    const newCode = [...code];
    // handle paste
    if (value.length > 1) {
      const pasted = value.slice(0, 6).split('');
      for (let i = 0; i < pasted.length; i++) {
        newCode[i] = pasted[i];
      }
      setCode(newCode);
      // focus last filled
      const lastIdx = Math.min(pasted.length, 5);
      const el = document.getElementById(`code-${lastIdx}`);
      if (el) el.focus();
      return;
    }

    newCode[index] = value;
    setCode(newCode);

    // move to next
    if (value && index < 5) {
      const next = document.getElementById(`code-${index + 1}`);
      if (next) next.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      const prev = document.getElementById(`code-${index - 1}`);
      if (prev) prev.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullCode = code.join('');
    if (fullCode.length === 6) {
      navigate('/register/step-5');
    }
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
          <div className="flex justify-center gap-2 mt-2" style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
            {code.map((digit, index) => (
              <input
                key={index}
                id={`code-${index}`}
                type="text"
                className="reg-form-input text-center"
                style={{ width: '3rem', height: '3.5rem', fontSize: '1.5rem', padding: '0', borderRadius: '8px' }}
                maxLength={6}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                required
                autoFocus={index === 0}
              />
            ))}
          </div>
        </div>

        <div className="reg-actions justify-center mt-6">
          <button type="button" className="btn-secondary" onClick={() => navigate('/register/step-3')}>
            Back
          </button>
          <button type="submit" className="btn-primary-sm" disabled={code.join('').length < 6}>
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
