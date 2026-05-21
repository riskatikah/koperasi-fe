import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Upload } from 'lucide-react';
import './RegistrationPages.css';

const RegisterStep2 = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(() => {
    const saved = sessionStorage.getItem('regStep2');
    return saved ? JSON.parse(saved) : {
      mobilePhone: '',
      email: '',
      employeeStatus: '',
      department: '',
      voluntarySaving: '',
      defaultAgree: false,
      payrollAgree: false
    };
  });

  const [files, setFiles] = useState({ npwp: null, ktp: null });

  // 🔥 auto save
  useEffect(() => {
    sessionStorage.setItem('regStep2', JSON.stringify(formData));
  }, [formData]);

  // 🔹 helpers
  const onlyNumbers = (val) => val.replace(/[^0-9]/g, '');

  const formatPhone = (phone) => {
    if (!phone) return '';
    if (phone.startsWith('0')) return '+62' + phone.slice(1);
    return '+62' + phone;
  };

  const mapEmployeeStatus = {
    permanent: 1,
    contract: 2
  };

  const mapDepartment = {
    it: 1,
    hr: 2,
    finance: 3,
    operations: 4
  };

  // 🔹 handlers
  const handleChange = (field, validator) => (e) => {
    let val = e.target.value;
    if (validator) val = validator(val);
    setFormData(prev => ({ ...prev, [field]: val }));
  };

  const handleCheckboxChange = (field) => (e) => {
    setFormData(prev => ({ ...prev, [field]: e.target.checked }));
  };

  const npwpInputRef = useRef(null);
  const ktpInputRef = useRef(null);

  const handleFileChange = (field) => (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 100 * 1024) {
        alert("File max 100KB");
        e.target.value = '';
        return;
      }
      setFiles(prev => ({ ...prev, [field]: file.name }));
    }
  };

  // 🔥 submit step 2
  const handleContinue = (e) => {
    e.preventDefault();

    if (!files.npwp || !files.ktp) {
      alert("Upload NPWP & KTP dulu");
      return;
    }

    if (parseInt(formData.voluntarySaving) < 50000) {
      alert("Minimum saving Rp 50.000");
      return;
    }

    if (!formData.defaultAgree || !formData.payrollAgree) {
      alert("Harus setuju semua checkbox");
      return;
    }

    navigate('/register/step-3');
  };

  return (
  <div className="auth-page">
    <div className="auth-header">
      <h1 className="auth-title">Registration Step 2</h1>

      <p className="auth-subtitle">
        Complete your employee and contact information
      </p>
    </div>

    <form className="reg-form" onSubmit={handleContinue}>

      {/* PHONE */}
      <div className="reg-form-group">
        <label className="reg-form-label">
          Mobile Phone
        </label>

        <div className="flex items-center">
          <div
            style={{
              padding: '0.75rem 1rem',
              background: '#f3f4f6',
              border: '1px solid #d1d5db',
              borderRight: 'none',
              borderRadius: '10px 0 0 10px'
            }}
          >
            +62
          </div>

          <input
            type="tel"
            className="reg-form-input"
            style={{
              borderRadius: '0 10px 10px 0'
            }}
            required
            value={formData.mobilePhone}
            onChange={handleChange(
              'mobilePhone',
              onlyNumbers
            )}
          />
        </div>
      </div>

      {/* EMAIL */}
      <div className="reg-form-group">
        <label className="reg-form-label">
          Email
        </label>

        <input
          type="email"
          className="reg-form-input"
          required
          value={formData.email}
          onChange={handleChange('email')}
        />
      </div>

      {/* EMPLOYEE STATUS */}
      <div className="reg-form-group">
        <label className="reg-form-label">
          Employee Status
        </label>

        <select
          className="reg-form-input"
          required
          value={formData.employeeStatus}
          onChange={handleChange('employeeStatus')}
        >
          <option value="">Select</option>
          <option value="permanent">
            Permanent
          </option>
          <option value="contract">
            Contract
          </option>
        </select>
      </div>

      {/* DEPARTMENT */}
      <div className="reg-form-group">
        <label className="reg-form-label">
          Department
        </label>

        <select
          className="reg-form-input"
          required
          value={formData.department}
          onChange={handleChange('department')}
        >
          <option value="">Select</option>
          <option value="it">IT</option>
          <option value="hr">HR</option>
          <option value="finance">
            Finance
          </option>
          <option value="operations">
            Operations
          </option>
        </select>
      </div>

      {/* NPWP */}
      <div className="reg-form-group">
        <label className="reg-form-label">
          Upload NPWP
        </label>

        <div
          className="file-upload-box"
          onClick={() =>
            npwpInputRef.current.click()
          }
        >
          <div className="text-center">
            <Upload size={28} />

            <p className="mt-2">
              {files.npwp
                ? files.npwp
                : 'Click to upload NPWP'}
            </p>
          </div>

          <input
            type="file"
            hidden
            ref={npwpInputRef}
            onChange={handleFileChange('npwp')}
          />
        </div>
      </div>

      {/* KTP */}
      <div className="reg-form-group">
        <label className="reg-form-label">
          Upload KTP
        </label>

        <div
          className="file-upload-box"
          onClick={() =>
            ktpInputRef.current.click()
          }
        >
          <div className="text-center">
            <Upload size={28} />

            <p className="mt-2">
              {files.ktp
                ? files.ktp
                : 'Click to upload KTP'}
            </p>
          </div>

          <input
            type="file"
            hidden
            ref={ktpInputRef}
            onChange={handleFileChange('ktp')}
          />
        </div>
      </div>

      {/* SAVING */}
      <div className="reg-form-group">
        <label className="reg-form-label">
          Voluntary Saving
        </label>

        <input
          type="number"
          className="reg-form-input"
          min="50000"
          value={formData.voluntarySaving}
          onChange={handleChange(
            'voluntarySaving',
            onlyNumbers
          )}
          required
        />
      </div>

      {/* CHECKBOX */}
      <div className="checkbox-group">
        <input
          type="checkbox"
          checked={formData.defaultAgree}
          onChange={handleCheckboxChange(
            'defaultAgree'
          )}
        />

        <label className="checkbox-label">
          Agree mandatory saving
        </label>
      </div>

      <div className="checkbox-group">
        <input
          type="checkbox"
          checked={formData.payrollAgree}
          onChange={handleCheckboxChange(
            'payrollAgree'
          )}
        />

        <label className="checkbox-label">
          Agree payroll deduction
        </label>
      </div>

      {/* ACTION */}
      <div className="reg-actions">
        <Link
          to="/register/step-1"
          className="btn-secondary"
        >
          Back
        </Link>

        <button
          type="submit"
          className="btn-primary-sm"
        >
          Continue
        </button>
      </div>

    </form>
  </div>
);
};

export default RegisterStep2;
