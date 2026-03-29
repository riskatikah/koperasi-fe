import React from 'react';
import { DollarSign, Briefcase, ChevronDown, Calendar, ChevronRight } from 'lucide-react';
import './TransactionHistory.css';

const TransactionHistory = () => {
  return (
    <div className="th-container">
      <h1 className="th-title">Transaction History</h1>

      <div className="th-cards">
        <div className="th-card">
          <div className="th-card-title">Voluntary Savings</div>
          <div className="th-card-val">
            <div className="th-icon-box"><DollarSign size={18} color="#fff" /></div>
            <span>Rp 500.000,00</span>
          </div>
        </div>
        <div className="th-card">
          <div className="th-card-title">Mandatory Savings</div>
          <div className="th-card-val">
            <div className="th-icon-box"><DollarSign size={18} color="#fff" /></div>
            <span>Rp 500.000,00</span>
          </div>
        </div>
        <div className="th-card">
          <div className="th-card-title">Loan</div>
          <div className="th-card-val">
            <div className="th-icon-box" style={{ background: '#3B82F6' }}><Briefcase size={18} color="#fff" /></div>
            <span>Rp 200.000,00</span>
          </div>
        </div>
      </div>

      <div className="th-filters-modern">
        <div className="th-fm-group">
          <label className="th-fm-label">TRANS. TYPE</label>
          <div className="th-fm-select">
            <span>All Types</span>
            <ChevronDown size={14} color="#64748B" />
          </div>
        </div>
        
        <div className="th-fm-group">
          <label className="th-fm-label">DATE</label>
          <div className="th-fm-datebox">
            <span>mm/dd/yyyy</span>
            <Calendar size={14} color="#94A3B8" />
          </div>
          <span className="th-fm-dash">—</span>
          <div className="th-fm-datebox">
            <span>mm/dd/yyyy</span>
            <Calendar size={14} color="#94A3B8" />
          </div>
        </div>

        <div style={{ flex: 1 }}></div>
        
        <div className="th-fm-actions">
          <button className="th-fm-btn clear">Clear</button>
          <button className="th-fm-btn search">Search</button>
        </div>
      </div>

      <div className="th-table-wrap">
        <table className="th-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Transaction Type</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3].map((row) => (
              <tr key={row}>
                <td>Jan 8th,2022</td>
                <td>r</td>
                <td>{row === 1 ? 'Voluntary Saving' : 'Mandatory Saving'}</td>
                <td>Rp 50.000,00</td>
                <td>Completed</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="th-pagination">
        <button className="th-page-btn active">1</button>
        <button className="th-page-btn">2</button>
        <button className="th-page-btn">3</button>
        <button className="th-page-btn">4</button>
        <span>...</span>
        <button className="th-page-btn">10</button>
        <button className="th-page-btn next">NEXT <ChevronRight size={14} /></button>
      </div>
    </div>
  );
};

export default TransactionHistory;
