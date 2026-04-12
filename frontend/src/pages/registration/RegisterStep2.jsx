import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Upload } from 'lucide-react';
import './RegistrationPages.css';

const RegisterStep2 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(() => {
    const saved = sessionStorage.getItem('regStep2');
    return saved ? JSON.parse(saved) : {
      mobilePhone: '', email: '', employeeStatus: '', department: '', voluntarySaving: '', defaultAgree: false, payrollAgree: false
    };
  });

  const [files, setFiles] = useState({ npwp: null, ktp: null });

  useEffect(() => {
    sessionStorage.setItem('regStep2', JSON.stringify(formData));
  }, [formData]);

  const handleChange = (field, validator) => (e) => {
    let val = e.target.value;
    if (validator) val = validator(val);
    setFormData(prev => ({ ...prev, [field]: val }));
  };

  const handleCheckboxChange = (field) => (e) => {
    setFormData(prev => ({ ...prev, [field]: e.target.checked }));
  };

  const onlyNumbers = (val) => val.replace(/[^0-9]/g, '');

  const npwpInputRef = useRef(null);
  const ktpInputRef = useRef(null);

  const handleFileChange = (field) => (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 100 * 1024) {
        alert("File size cannot exceed 100KB");
        e.target.value = '';
        return;
      }
      setFiles(prev => ({ ...prev, [field]: file.name }));
    }
  };

  const handleContinue = (e) => {
    e.preventDefault();
    if (!files.npwp || !files.ktp) {
      alert("Please upload both NPWP and KTP documents before continuing.");
      return;
    }
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
              value={formData.mobilePhone} onChange={handleChange('mobilePhone', onlyNumbers)}
              required 
            />
          </div>
        </div>

        <div className="reg-form-group">
          <label className="reg-form-label">Email Address</label>
          <input type="email" className="reg-form-input" required value={formData.email} onChange={handleChange('email')} />
        </div>

        {/* Employment Info */}
        <div className="reg-form-group">
          <label className="reg-form-label">Employee Status</label>
          <div className="custom-select-wrapper">
            <select className="reg-form-input reg-form-select" required value={formData.employeeStatus} onChange={handleChange('employeeStatus')}>
              <option value="" disabled></option>
              <option value="permanent">Permanent</option>
              <option value="contract">Contract</option>
            </select>
          </div>
        </div>

        {/* File Uploads */}
        <div className="reg-form-group">
          <label className="reg-form-label">Upload NPWP</label>
          <div className="file-upload-box" onClick={() => npwpInputRef.current.click()} style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Upload size={20} />
            {files.npwp && <span style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>{files.npwp}</span>}
            <input type="file" ref={npwpInputRef} style={{ display: 'none' }} accept="image/*,.pdf" onChange={handleFileChange('npwp')} />
          </div>
        </div>

        <div className="reg-form-group">
          <label className="reg-form-label">Upload KTP</label>
          <div className="file-upload-box" onClick={() => ktpInputRef.current.click()} style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Upload size={20} />
            {files.ktp && <span style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>{files.ktp}</span>}
            <input type="file" ref={ktpInputRef} style={{ display: 'none' }} accept="image/*,.pdf" onChange={handleFileChange('ktp')} />
          </div>
        </div>

        {/* More Employment Info */}
        <div className="reg-form-group">
          <label className="reg-form-label">Department</label>
          <div className="custom-select-wrapper">
            <select className="reg-form-input reg-form-select" required value={formData.department} onChange={handleChange('department')}>
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
              value={formData.voluntarySaving}
              onChange={handleChange('voluntarySaving', onlyNumbers)}
            />
          </div>
        </div>

        {/* Agreements */}
        <div style={{ marginTop: '1rem' }}>
          <div className="checkbox-group" style={{ marginBottom: '1rem' }}>
            <input type="checkbox" id="mandatory-saving-agree" required checked={formData.defaultAgree} onChange={handleCheckboxChange('defaultAgree')} />
            <label htmlFor="mandatory-saving-agree" className="checkbox-label">
              By registering as a member of the cooperative, I agree to pay a mandatory deposit of IDR 100,000, which must be paid every month during active membership.
            </label>
          </div>

          <div className="checkbox-group">
            <input type="checkbox" id="payroll-deduct-agree" required checked={formData.payrollAgree} onChange={handleCheckboxChange('payrollAgree')} />
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
