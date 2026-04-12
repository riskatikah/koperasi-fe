import React from 'react';
import { User, ChevronDown } from 'lucide-react';
import './ManualPayment.css';

const ManualPayment = () => {
  return (
    <div className="mp-container">
      <h1 className="mp-title">Manual Transaction</h1>

      <div className="mp-card">
        <div className="mp-user-info">
          <div className="mp-user-avatar">
            <User size={24} color="#fff" />
          </div>
          
          <div className="mp-user-select-wrap">
            <div className="mp-user-select">
              <span style={{ color: 'transparent' }}>Select</span>
              <ChevronDown size={16} />
            </div>
            <div className="mp-user-meta">
              Departement: HRD & GA<br/>
              NIK: +900 231 1212
            </div>
          </div>

          <div className="mp-user-details">
            Email: budirahman@gmail.com<br/>
            Phone: +900 231 1212
          </div>
        </div>

        <div className="mp-section">
          <h2 className="mp-section-title">Detail Outstanding</h2>
          <div className="mp-grid">
            <div className="mp-outstanding-list">
              <div className="mp-out-item">
                <label>Loan Balance</label>
                <div className="mp-amount">Rp 5.000.000,00</div>
              </div>
              <div className="mp-out-item">
                <label>Mandatory Saving</label>
                <div className="mp-amount">Rp 150.000,00</div>
              </div>
              <div className="mp-out-item">
                <label>Voluntary Saving</label>
                <div className="mp-amount">Rp 100.000,00</div>
              </div>
            </div>
            
            <div className="mp-saving-card">
              <label>Amount Saving Balance</label>
              <h3>Rp 10.000.000</h3>
              <label style={{ marginTop: '16px' }}>Bank/Rek</label>
              <h4>BCA/7363223 (Budi)</h4>
            </div>
          </div>
        </div>

        <div className="mp-section">
          <h2 className="mp-section-title">Payment</h2>
          <div className="mp-payment-inputs">
            <div className="mp-input-wrap select">
              <select className="mp-clean-input">
                <option value="">Transaction Type</option>
                <option value="mandatory">Mandatory Saving</option>
                <option value="voluntary">Voluntary Saving</option>
                <option value="loan">Loan Repayment</option>
              </select>
            </div>
            <div className="mp-input-wrap">
              <input type="text" className="mp-clean-input" placeholder="Rp 0,00" />
            </div>
          </div>
        </div>

        <div className="mp-actions">
          <button className="mp-btn">Back</button>
          <button className="mp-btn">Process</button>
          <button className="mp-btn">Clear</button>
        </div>
      </div>
    </div>
  );
};

export default ManualPayment;
