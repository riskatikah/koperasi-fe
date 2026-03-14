import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Upload } from 'lucide-react';
import './RegistrationPages.css';

const RegisterStep2 = () => {
  const navigate = useNavigate();

  const handleContinue = (e) => {
    e.preventDefault();
    navigate('/register/step-3');
  };

  return (
    <div>
      <h2 className="reg-page-title">Personal Information</h2>
      <p className="reg-step-subtitle" style={{ marginBottom: '2rem' }}>
        Please provide your contact information and income details for the purpose of reviewing your account registration.
      </p>
      
      <form className="reg-form" onSubmit={handleContinue}>
        {/* Contact Info */}
        <div className="reg-form-group">
          <label className="reg-form-label">Mobile Phone Number</label>
          <div style={{ display: 'flex' }}>
            <span style={{ 
              padding: '0.75rem 1rem', 
              backgroundColor: '#e5e7eb', 
              border: '1px solid var(--color-border)', 
              borderRight: 'none',
              borderRadius: 'var(--radius-md) 0 0 var(--radius-md)',
              color: '#4b5563'
            }}>+62</span>
            <input 
              type="tel" 
              className="reg-form-input" 
              style={{ borderRadius: '0 var(--radius-md) var(--radius-md) 0' }} 
              required 
            />
          </div>
        </div>

        <div className="reg-form-group">
          <label className="reg-form-label">Email Address</label>
          <input type="email" className="reg-form-input" required />
        </div>

        {/* Employment Info */}
        <div className="reg-form-group">
          <label className="reg-form-label">Employee Status</label>
          <div className="custom-select-wrapper">
            <select className="reg-form-input reg-form-select" required defaultValue="">
              <option value="" disabled></option>
              <option value="permanent">Permanent</option>
              <option value="contract">Contract</option>
            </select>
          </div>
        </div>

        {/* File Uploads */}
        <div className="reg-form-group">
          <label className="reg-form-label">Upload NPWP</label>
          <div className="file-upload-box">
            <Upload size={20} />
          </div>
        </div>

        <div className="reg-form-group">
          <label className="reg-form-label">Upload KTP</label>
          <div className="file-upload-box">
            <Upload size={20} />
          </div>
        </div>

        {/* More Employment Info */}
        <div className="reg-form-group">
          <label className="reg-form-label">Department</label>
          <div className="custom-select-wrapper">
            <select className="reg-form-input reg-form-select" required defaultValue="">
              <option value="" disabled></option>
              <option value="it">IT</option>
              <option value="hr">HR</option>
              <option value="finance">Finance</option>
              <option value="operations">Operations</option>
            </select>
          </div>
        </div>

        {/* Savings Info */}
        <div className="reg-form-group">
          <label className="reg-form-label">Input Voluntary Saving <span style={{ fontSize: '0.75rem' }}>(min Rp 50.000)</span></label>
          <div style={{ display: 'flex' }}>
            <span style={{ 
              padding: '0.75rem 1rem', 
              backgroundColor: '#e5e7eb', 
              border: '1px solid var(--color-border)', 
              borderRight: 'none',
              borderRadius: 'var(--radius-md) 0 0 var(--radius-md)',
              color: '#4b5563'
            }}>Rp</span>
            <input 
              type="number" 
              min="50000"
              className="reg-form-input" 
              style={{ borderRadius: '0 var(--radius-md) var(--radius-md) 0' }} 
              required 
            />
          </div>
        </div>

        {/* Agreements */}
        <div style={{ marginTop: '1rem' }}>
          <div className="checkbox-group" style={{ marginBottom: '1rem' }}>
            <input type="checkbox" id="mandatory-saving-agree" required />
            <label htmlFor="mandatory-saving-agree" className="checkbox-label">
              By registering as a member of the cooperative, I agree to pay a mandatory deposit of IDR 100,000, which must be paid every month during active membership.
            </label>
          </div>

          <div className="checkbox-group">
            <input type="checkbox" id="payroll-deduct-agree" required />
            <label htmlFor="payroll-deduct-agree" className="checkbox-label">
              I authorize the HR payroll department of PT Sanoh Indonesia to automatically deduct my salary for Mandatory Savings and Voluntary Savings for the Sanoh Sinergi Bersama Cooperative.
            </label>
          </div>
        </div>

        <div className="reg-actions" style={{ justifyContent: 'space-between', marginTop: '2rem' }}>
          <Link to="/register/step-1" className="btn-secondary">← Back</Link>
          <button type="submit" className="btn-primary-sm">Continue →</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterStep2;
