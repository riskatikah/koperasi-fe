import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './RegistrationPages.css';

const RegisterStep3 = () => {
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  const handleFinish = (e) => {
    e.preventDefault();
    if (agreed) {
      navigate('/register/step-4');
    }
  };

  return (
    <div>
      <h2 className="reg-page-title">Terms & Conditions</h2>
      <p className="reg-step-subtitle" style={{ marginBottom: '2rem' }}>
        Please review the agreement below to proceed with your cooperative registration.
      </p>

      <div className="terms-box">
        <h3>1. Membership Eligibility</h3>
        <p>Membership is open to all permanent and contract employees of PT Sanoh Indonesia. By registering, you confirm your employment status is active.</p>
        <br />
        
        <h3>2. Deposits and Savings</h3>
        <p><strong>2.1 Principal Deposit:</strong> A one-time principal deposit is required upon registration. The amount is determined by the cooperative's bylaws.</p>
        <p><strong>2.2 Mandatory Savings:</strong> Members are required to contribute a monthly mandatory savings amount of IDR 100,000, which will be automatically deducted from the monthly payroll.</p>
        <p><strong>2.3 Voluntary Savings:</strong> Members may opt to contribute additional voluntary savings, with a minimum amount of IDR 50,000 per month.</p>
        <br />

        <h3>3. Loans and Credit</h3>
        <p>Members who have been active for at least 3 months are eligible to apply for loans. All loan applications are subject to approval based on the member's financial standing and savings balance.</p>
        <br />

        <h3>4. Resignation and Withdrawal</h3>
        <p>Members may withdraw their membership at any time, provided they have no outstanding loans or liabilities with the cooperative. Upon withdrawal, accumulated Principal, Mandatory, and Voluntary savings will be returned to the member within 30 working days.</p>
        <br />

        <h3>5. Privacy Policy</h3>
        <p>All personal and financial information provided during registration will be kept confidential and used solely for the administration of cooperative activities and payroll deductions.</p>
      </div>

      <form onSubmit={handleFinish}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div className="checkbox-group" style={{ margin: 0, flex: 1, minWidth: '300px' }}>
            <input 
              type="checkbox" 
              id="terms-agree" 
              required 
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <label htmlFor="terms-agree" className="checkbox-label" style={{ margin: 0 }}>
              <strong>I have read and agree to the Terms & Conditions and Privacy Policy.</strong>
              By checking this box, I agree to be bound by the bylaws of Koperasi PT Sanoh Indonesia Sinergi Bersama.
            </label>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link to="/register/step-2" className="btn-secondary">← Decline</Link>
            <button 
              type="submit" 
              className="btn-primary-sm"
              disabled={!agreed}
              style={{ opacity: agreed ? 1 : 0.5, cursor: agreed ? 'pointer' : 'not-allowed' }}
            >
              Agree & Continue for Verification →
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterStep3;
