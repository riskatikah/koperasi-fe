import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegistrationPages.css';

const RegisterStep1 = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(() => {
    const saved = sessionStorage.getItem('regStep1');
    return saved ? JSON.parse(saved) : {
      nik: '',
      fullName: '',
      nikEmployee: '',
      placeOfBirth: '',
      dob: '',
      npwp: '',
      gender: '',
      address: ''
    };
  });

  // 🔥 auto save ke sessionStorage
  useEffect(() => {
    sessionStorage.setItem('regStep1', JSON.stringify(formData));
  }, [formData]);

  // 🔹 handler perubahan input
  const handleChange = (field, validator) => (e) => {
    let val = e.target.value;
    if (validator) val = validator(val);
    setFormData(prev => ({ ...prev, [field]: val }));
  };

  // 🔹 validator
  const onlyNumbers = (val) => val.replace(/[^0-9]/g, '');
  const onlyLetters = (val) => val.replace(/[^a-zA-Z\s]/g, '');

  // 🔹 submit step 1
  const handleContinue = (e) => {
    e.preventDefault();

    // validasi tambahan (opsional tapi bagus)
    if (formData.nik.length !== 16) {
      alert("NIK harus 16 digit");
      return;
    }

    if (!formData.gender) {
      alert("Pilih gender dulu");
      return;
    }

    navigate('/register/step-2');
  };

  return (
    <div>
      <h2 className="reg-page-title">Registration Member</h2>

      <form className="reg-form" onSubmit={handleContinue}>
        <div className="form-grid-2">

          {/* NIK */}
          <div className="reg-form-group">
            <label className="reg-form-label">NIK (Nomor Induk Kependudukan)</label>
            <input
              type="text"
              className="reg-form-input"
              required
              maxLength={16}
              value={formData.nik}
              onChange={handleChange('nik', onlyNumbers)}
            />
          </div>

          {/* Full Name */}
          <div className="reg-form-group">
            <label className="reg-form-label">Full Name</label>
            <input
              type="text"
              className="reg-form-input"
              required
              value={formData.fullName}
              onChange={handleChange('fullName', onlyLetters)}
            />
          </div>

          {/* NIK Employee */}
          <div className="reg-form-group">
            <label className="reg-form-label">NIK Employee</label>
            <input
              type="text"
              className="reg-form-input"
              required
              value={formData.nikEmployee}
              onChange={handleChange('nikEmployee', onlyNumbers)}
            />
          </div>

          {/* Place & DOB */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="reg-form-group">
              <label className="reg-form-label">Place of Birth</label>
              <input
                type="text"
                className="reg-form-input"
                required
                value={formData.placeOfBirth}
                onChange={handleChange('placeOfBirth', onlyLetters)}
              />
            </div>

            <div className="reg-form-group">
              <label className="reg-form-label">Date of Birth</label>
              <input
                type="date"
                className="reg-form-input"
                required
                value={formData.dob}
                onChange={handleChange('dob')}
              />
            </div>
          </div>

          {/* NPWP */}
          <div className="reg-form-group">
            <label className="reg-form-label">No NPWP</label>
            <input
              type="text"
              className="reg-form-input"
              required
              value={formData.npwp}
              onChange={handleChange('npwp', onlyNumbers)}
            />
          </div>

          {/* Gender 🔥 FIXED */}
          <div className="reg-form-group">
            <label className="reg-form-label">Gender</label>
            <select
              className="reg-form-input reg-form-select"
              required
              value={formData.gender}
              onChange={handleChange('gender')}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          {/* Address */}
          <div className="reg-form-group">
            <label className="reg-form-label">Address</label>
            <textarea
              className="reg-form-input reg-form-textarea"
              required
              value={formData.address}
              onChange={handleChange('address')}
            />
          </div>

        </div>

        {/* Button */}
        <div className="reg-actions">
          <button type="submit" className="btn-primary-sm">
            Confirm & Continue 
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterStep1;
