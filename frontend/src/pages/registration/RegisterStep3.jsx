import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './RegistrationPages.css';

const RegisterStep3 = () => {

  const [agreed, setAgreed] = useState(false);

  const navigate = useNavigate();

  const handleFinish = (e) => {

    e.preventDefault();

    if (agreed) {

      sessionStorage.setItem(
        'regStep3',
        JSON.stringify({ agreed: true })
      );

      navigate('/register/step-4');
    }
  };

  return (

    <div>

      <h2 className="reg-page-title">
        Terms & Conditions
      </h2>

      <p
        className="reg-step-subtitle"
        style={{ marginBottom: '2rem' }}
      >
        Please review the agreement below to proceed
        with your cooperative registration.
      </p>

      <div className="terms-box">

        <h3>1. Membership Eligibility</h3>

        <p>
          Membership is open to all permanent and
          contract employees of PT Sanoh Indonesia.
          By registering, you confirm your employment
          status is active.
        </p>

        <br />

        <h3>2. Deposits and Savings</h3>

        <p>
          <strong>2.1 Principal Deposit:</strong>
          A one-time principal deposit is required
          upon registration.
        </p>

        <p>
          <strong>2.2 Mandatory Savings:</strong>
          Members are required to contribute a monthly
          mandatory savings amount of IDR 100,000.
        </p>

        <p>
          <strong>2.3 Voluntary Savings:</strong>
          Members may contribute additional savings.
        </p>

        <br />

        <h3>3. Loans and Credit</h3>

        <p>
          Members active for at least 3 months are
          eligible to apply for loans.
        </p>

        <br />

        <h3>4. Resignation and Withdrawal</h3>

        <p>
          Members may withdraw membership provided
          they have no outstanding liabilities.
        </p>

        <br />

        <h3>5. Privacy Policy</h3>

        <p>
          All personal and financial information will
          remain confidential.
        </p>

      </div>

      <form onSubmit={handleFinish}>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            marginTop: '2rem'
          }}
        >

          <div
            className="checkbox-group"
            style={{
              margin: 0,
              flex: 1,
              minWidth: '300px'
            }}
          >

            <input
              type="checkbox"
              id="terms-agree"
              required
              checked={agreed}
              onChange={(e) =>
                setAgreed(e.target.checked)
              }
            />
<label htmlFor="terms-agree" className="checkbox-label">
  <strong>I have read and agree to the Terms & Conditions.</strong>

  <span className="checkbox-desc">
    By checking this box, I agree to be bound by the cooperative rules.
  </span>
</label>

          </div>

          <div
            style={{
              display: 'flex',
              gap: '1rem'
            }}
          >

            <Link
              to="/register/step-2"
              className="btn-secondary"
            >
              ← Decline
            </Link>

            <button
              type="submit"
              className="btn-primary-sm"
              disabled={!agreed}
              style={{
                opacity: agreed ? 1 : 0.5,
                cursor: agreed
                  ? 'pointer'
                  : 'not-allowed'
              }}
            >
              Agree & Continue →
            </button>

          </div>

        </div>

      </form>

    </div>
  );
};

export default RegisterStep3;