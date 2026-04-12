import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { DollarSign, Briefcase, ChevronDown, Calendar, ChevronRight, X } from 'lucide-react';
import './TransactionHistory.css';

const TransactionHistory = () => {
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedRowContext, setSelectedRowContext] = useState(null);

  const handleRowDoubleClick = (rowId) => {
    setSelectedRowContext(rowId);
    setShowDetailModal(true);
  };
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
              <tr key={row} onDoubleClick={() => handleRowDoubleClick(row)} style={{ cursor: 'pointer' }}>
                <td>Jan 8th,2022</td>
                <td>Rafilla Shalwa</td>
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

      {showDetailModal && createPortal(
        <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && setShowDetailModal(false)}>
          <div className="closure-modal" style={{ maxWidth: '500px', cursor: 'default' }} onClick={e => e.stopPropagation()}>
            <div className="cm-header">
              <div>
                <h2>Transaction Details</h2>
              </div>
              <button className="cm-close" onClick={() => setShowDetailModal(false)}>
                <X size={16} />
              </button>
            </div>
            <div className="cm-body" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #E2E8F0', paddingBottom: '8px' }}>
                <span style={{ color: '#64748B', fontWeight: 600 }}>ID Transaction</span>
                <strong>INV-001239{selectedRowContext}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #E2E8F0', paddingBottom: '8px' }}>
                <span style={{ color: '#64748B', fontWeight: 600 }}>Date</span>
                <strong>Jan 8th, 2022 14:03</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #E2E8F0', paddingBottom: '8px' }}>
                <span style={{ color: '#64748B', fontWeight: 600 }}>Member Name</span>
                <strong>Rafilla Shalwa</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #E2E8F0', paddingBottom: '8px' }}>
                <span style={{ color: '#64748B', fontWeight: 600 }}>Transaction Type</span>
                <strong>{selectedRowContext === 1 ? 'Voluntary Saving' : 'Mandatory Saving'}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #E2E8F0', paddingBottom: '8px' }}>
                <span style={{ color: '#64748B', fontWeight: 600 }}>Status</span>
                <strong style={{ color: '#16A34A' }}>Completed</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '8px' }}>
                <span style={{ color: '#1E293B', fontWeight: 700, fontSize: '18px' }}>Amount</span>
                <strong style={{ fontSize: '18px' }}>Rp 50.000,00</strong>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default TransactionHistory;
