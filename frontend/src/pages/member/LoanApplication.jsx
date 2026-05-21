import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Wallet, UploadCloud } from 'lucide-react';
import './LoanApplication.css';

const LoanApplication = () => {
  const navigate = useNavigate();
  const [showSimulation, setShowSimulation] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleContinue = (e) => {
    e.preventDefault();
    setShowSimulation(true);
  };

  const handleSubmit = () => {
    // simulated submission
    alert('Loan Application Submitted!');
    navigate('/dashboard/loans');
  };

  return (
    <div className="la-page">
      <div className="la-header">
        <button className="la-back-btn" onClick={() => navigate(-1)}>
          <ArrowLeft size={16} /> Back
        </button>
        <h1>Loan Application</h1>
        <p>Overview active loans, repayment progress, and payroll deduction</p>
      </div>

      <div className="la-limit-banner">
        <div className="la-icon-box">
          <Wallet size={16} />
        </div>
        <div className="la-limit-text">
          <strong>Available Limit</strong> Based on current salary
        </div>
      </div>

      <div className="la-content-grid">
        <form className="la-form" onSubmit={handleContinue}>
          <div className="la-form-group">
            <label>TYPE OF INSTALLMENT</label>
            <select required defaultValue="">
              <option value="" disabled>Select type...</option>
              <option value="Pinjaman Tunai">Pinjaman Tunai</option>
              <option value="Pinjaman Barang">Pinjaman Barang</option>
            </select>
          </div>

          <div className="la-form-group">
            <label>TOTAL OF INSTALLMENT</label>
            <input type="text" placeholder="Rp 10.000.000" required />
          </div>

          <div className="la-form-group">
            <label>PURPOSE</label>
            <input type="text" placeholder="e.g. Beli mobil" required />
          </div>

          <div className="la-form-group">
            <label>SALARY STATEMENT</label>
            <div className="la-upload-box">
              <UploadCloud size={20} className="u-icon" />
              <span>Upload salary statement</span>
            </div>
          </div>

          <button type="submit" className="la-btn-continue">Continue</button>
        </form>

        {showSimulation && (
          <div className="la-simulation-card fade-in">
            <h2>Angsuran Simulation</h2>
            <p className="la-sim-sub">Estimated Monthly Payment</p>
            <div className="la-sim-amount">Rp 50,000</div>
            <p className="la-sim-desc">Based on 12 months @ 0,5% interest</p>

            <div className="la-sim-details">
              <div className="la-sim-row">
                <span>Principal</span>
                <span>Rp 500.000</span>
              </div>
              <div className="la-sim-row">
                <span>Total Interest</span>
                <span>Rp 300.000</span>
              </div>
              <div className="la-sim-row total">
                <span>Total Repayment</span>
                <span>Rp 800.000</span>
              </div>
            </div>

            <p className="la-sim-disclaimer">
              The interest rate shown is a system estimate and is not binding. Final rates are set by the cooperative.
            </p>

            <label className="la-checkbox">
              <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
              <span>I verify that the information above is correct and agree to the term and service.</span>
            </label>

            <button
              className="la-btn-submit"
              disabled={!agreed}
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoanApplication;
