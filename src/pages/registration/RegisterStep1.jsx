import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import './RegistrationPages.css';

const RegisterStep1 = () => {
  const navigate = useNavigate();

  const handleContinue = (e) => {
    e.preventDefault();
    navigate('/register/step-2');
  };

  return (
    <div>
      <h2 className="reg-page-title">Registration Member</h2>
      
      <form className="reg-form" onSubmit={handleContinue}>
        <div className="form-grid-2">
          {/* Left Column */}
          <div className="reg-form-group">
            <label className="reg-form-label">NIK (Nomor Induk Kependudukan)</label>
            <input type="text" className="reg-form-input" required />
          </div>
          
          <div className="reg-form-group">
            <label className="reg-form-label">Full Name</label>
            <input type="text" className="reg-form-input" required />
          </div>

          <div className="reg-form-group">
            <label className="reg-form-label">NIK Employee</label>
            <input type="text" className="reg-form-input" required />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="reg-form-group">
              <label className="reg-form-label">Place of Birth</label>
              <input type="text" className="reg-form-input" required />
            </div>
            <div className="reg-form-group">
              <label className="reg-form-label">Date of Birth</label>
              <div style={{ position: 'relative' }}>
                <input type="date" className="reg-form-input" required style={{ paddingRight: '2.5rem' }} />
              </div>
            </div>
          </div>

          <div className="reg-form-group">
            <label className="reg-form-label">No NPWP</label>
            <input type="text" className="reg-form-input" required />
          </div>

          <div className="reg-form-group">
            <label className="reg-form-label">Gender</label>
            <div className="custom-select-wrapper">
              <select className="reg-form-input reg-form-select" required defaultValue="">
                <option value="" disabled></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>

          <div className="reg-form-group">
            <label className="reg-form-label">Address</label>
            <textarea className="reg-form-input reg-form-textarea" required></textarea>
          </div>
        </div>

        <div className="reg-actions">
          <button type="submit" className="btn-primary-sm">Confirm & Continue →</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterStep1;
