import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Printer, UploadCloud, Edit2 } from 'lucide-react';
import './AdminLoanDetail.css';

const AdminLoanDetail = () => {
  const navigate = useNavigate();
  const [repaymentTerm, setRepaymentTerm] = useState('12');
  const [interestRate, setInterestRate] = useState('0.5');
  const [isEditingTerm, setIsEditingTerm] = useState(false);
  const [isEditingInterest, setIsEditingInterest] = useState(false);

  const handleProfileClick = () => {
    // Navigate to a generic member detail (or could be specific transaction list)
    navigate('/dashboard/admin/members/123'); // Example ID
  };

  return (
    <div className="admin-loan-detail">
      <div className="aldet-header-area">
        <div className="aldet-header-left">
          <h1>Loan Details</h1>
          <span className="aldet-badge active">Active</span>
        </div>
        <p className="aldet-submitted">Submitted on December 15, 2025 at 15:00</p>
        <button className="aldet-print-btn">
          <Printer size={18} />
        </button>
      </div>

      <div className="aldet-profile-card">
        <div className="aldet-profile-top">
          <div className="aldet-profile-avatar">
            <User size={32} color="white" />
          </div>
          <div className="aldet-profile-info-grid">
            <div className="aldet-pi-col">
              <div className="aldet-pi-name">Budi Rahman</div>
              <div className="aldet-pi-sub">Departement: HRD & GA</div>
              <div className="aldet-pi-sub">NIK: +900 231 1212</div>
            </div>
            <div className="aldet-pi-col">
              <div className="aldet-pi-sub">Email: budirahman@gmail.com</div>
              <div className="aldet-pi-sub">Phone: +900 231 1212</div>
            </div>
          </div>
        </div>
        <button className="aldet-view-profile-btn" onClick={handleProfileClick}>
          View profile
        </button>
      </div>

      <div className="aldet-layout">
        <div className="aldet-left-col">
          <h2 className="aldet-section-title">Detail Pinjaman</h2>
          <div className="aldet-loan-info-grid">
            <div className="aldet-info-box">
              <div className="aldet-ib-label">Amount Requested</div>
              <div className="aldet-ib-value lg">Rp 10.000.000</div>
              <div className="aldet-ib-label mt">Purpose</div>
              <div className="aldet-ib-value">Home Renovation</div>
            </div>
            
            <div className="aldet-info-box">
              <div className="aldet-ib-header">
                <div className="aldet-ib-label">Repayment Term</div>
                <button className="aldet-edit-btn" onClick={() => setIsEditingTerm(!isEditingTerm)}>
                  <Edit2 size={14} />
                </button>
              </div>
              {isEditingTerm ? (
                <div className="aldet-edit-row">
                  <input 
                    type="number" 
                    value={repaymentTerm} 
                    onChange={(e) => setRepaymentTerm(e.target.value)}
                    className="aldet-input"
                  />
                  <span>Bulan</span>
                </div>
              ) : (
                <div className="aldet-ib-value mb">{repaymentTerm} Bulan</div>
              )}

              <div className="aldet-ib-header mt">
                <div className="aldet-ib-label">Bunga</div>
                <button className="aldet-edit-btn" onClick={() => setIsEditingInterest(!isEditingInterest)}>
                  <Edit2 size={14} />
                </button>
              </div>
              <div className="aldet-ib-recommend">Loan Recommendation {interestRate}%</div>
              {isEditingInterest ? (
                <div className="aldet-edit-row">
                  <input 
                    type="number" 
                    step="0.1"
                    value={interestRate} 
                    onChange={(e) => setInterestRate(e.target.value)}
                    className="aldet-input"
                  />
                  <span>%/Month(Flat)</span>
                </div>
              ) : (
                <div className="aldet-ib-value">{interestRate}%/Month(Flat)</div>
              )}
            </div>
          </div>

          <div className="aldet-risk">
            <span className="aldet-risk-label">Risk Rating</span>
            <span className="aldet-risk-val low">Low</span>
          </div>

          <div className="aldet-decision">
            <h3 className="aldet-section-title">Admin Decision</h3>
            <textarea placeholder="Type some notes" className="aldet-textarea"></textarea>
          </div>

          <div className="aldet-upload">
            <h3 className="aldet-section-title">Upload Document (Slip Gaji)</h3>
            <div className="aldet-dropzone">
              <UploadCloud size={24} color="#4f7df3" />
              <p>Drop your image here, or browse</p>
            </div>
          </div>

          <div className="aldet-actions">
            <button className="aldet-action-btn reject">REJECT</button>
            <button className="aldet-action-btn approve">APPROVE</button>
          </div>
        </div>

        <div className="aldet-right-col">
          <div className="aldet-sim-card">
            <h3 className="aldet-sim-title">Angsuran Simulation</h3>
            <div className="aldet-sim-label">Monthly Payment</div>
            <div className="aldet-sim-amount">Rp 500,000</div>
            <div className="aldet-sim-desc">Based on {repaymentTerm} months @ {interestRate}% interest</div>
            <div className="aldet-sim-disclaimer">
              The interest rate shown is a system estimate and is not binding. Final rates are set by the cooperative.
            </div>

            <div className="aldet-sim-breakdown">
              <div className="aldet-sim-row">
                <span>Principal</span>
                <span>Rp 500.000</span>
              </div>
              <div className="aldet-sim-row">
                <span>Total Interest</span>
                <span>Rp 300.000</span>
              </div>
              <div className="aldet-sim-divider"></div>
              <div className="aldet-sim-row total">
                <span>Total Repayment</span>
                <span>Rp 800.000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLoanDetail;
