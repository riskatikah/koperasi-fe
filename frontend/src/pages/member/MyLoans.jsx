import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Info, ChevronRight } from 'lucide-react';
import './MyLoans.css';

const MyLoans = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('active');

  const tabs = [
    { id: 'active', label: 'Active Loans' },
    { id: 'completed', label: 'Completed' },
    { id: 'pending', label: 'Pending' },
    { id: 'rejected', label: 'Rejected' },
  ];

  const mockLoans = {
    active: [
      {
        id: '#20250512',
        type: 'Pinjaman Tunai',
        status: 'Active',
        totalBorrowed: 'Rp 10.000.000',
        remaining: 'Rp 5.000.000',
        purpose: 'Renovasi',
        bunga: '0,5%',
        progress: 50,
        installmentsPaid: 5,
        totalInstallments: 10,
        nextDeduction: 'Rp 1.000.000',
      },
      {
        id: '#20250513',
        type: 'Pinjaman Barang',
        status: 'Active',
        totalBorrowed: 'Rp 10.000.000',
        remaining: 'Rp 5.000.000',
        purpose: 'Renovasi',
        bunga: '0,5%',
        progress: 50,
        installmentsPaid: 5,
        totalInstallments: 10,
        nextDeduction: 'Rp 1.000.000',
      }
    ],
    completed: [
      {
        id: '#20240101',
        type: 'Pinjaman Pendidikan',
        status: 'Completed',
        totalBorrowed: 'Rp 5.000.000',
        remaining: 'Rp 0',
        purpose: 'Biaya Sekolah Anak',
        bunga: '0,5%',
        progress: 100,
        installmentsPaid: 5,
        totalInstallments: 5,
        nextDeduction: '-',
      }
    ],
    pending: [
      {
        id: '#20250999',
        type: 'Pinjaman Kendaraan',
        status: 'Pending',
        totalBorrowed: 'Rp 15.000.000',
        remaining: 'Rp 15.000.000',
        purpose: 'Beli Motor Baru',
        bunga: '0,5%',
        progress: 0,
        installmentsPaid: 0,
        totalInstallments: 15,
        nextDeduction: '-',
      }
    ],
    rejected: [
      {
        id: '#20250888',
        type: 'Pinjaman Tunai',
        status: 'Rejected',
        totalBorrowed: 'Rp 20.000.000',
        remaining: 'Rp 20.000.000',
        purpose: 'Modal Usaha',
        bunga: '0,5%',
        progress: 0,
        installmentsPaid: 0,
        totalInstallments: 20,
        nextDeduction: '-',
      }
    ]
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'active': return 'status-active';
      case 'completed': return 'status-completed';
      case 'pending': return 'status-pending';
      case 'rejected': return 'status-rejected';
      default: return '';
    }
  };

  return (
    <div className="ml-page">
      <div className="ml-header-section">
        <div className="ml-header-text">
          <h1>Loan Overview</h1>
          <p>Overview active loans, repayment progress, and payroll deduction</p>
        </div>
        <button className="btn-apply-loan" onClick={() => navigate('/dashboard/loans/application')}>
          <Plus size={16} strokeWidth={2.5} />
          Apply for a New Loan
        </button>
      </div>

      <div className="ml-overview-cards">
        <div className="ml-ov-card">
          <div className="ml-ov-label">TOTAL OUTSTANDING BALANCE</div>
          <div className="ml-ov-value">Rp 15.200.000</div>
          <div className="ml-ov-badge up">
            <ChevronRight size={12} strokeWidth={3} style={{transform: 'rotate(-45deg)'}} />
            Increased by 5% this month
          </div>
        </div>
        <div className="ml-ov-card">
          <div className="ml-ov-label">NEXT PAYROLL DEDUCTION</div>
          <div className="ml-ov-value">Oct 15, 2026</div>
          <div className="ml-ov-badge info">
            <span className="dot"></span>
            Scheduled Automatically
          </div>
        </div>
      </div>

      <div className="ml-info-banner">
        <div className="info-icon-wrapper">
          <Info size={16} strokeWidth={2} />
        </div>
        <div>
          <h4>Automatic Payment Deduction</h4>
          <p>Payments are automatically deducted by HRD on the 25th of each month</p>
        </div>
      </div>

      <div className="ml-tabs-section">
        <h2>My Loans</h2>
        <div className="ml-tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`ml-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="ml-loan-list">
        {mockLoans[activeTab].length > 0 ? (
          <div className="ml-grid">
            {mockLoans[activeTab].map((loan, idx) => (
              <div className="ml-loan-card" key={idx}>
                <div className="ml-lc-header">
                  <div>
                    <h3>{loan.type}</h3>
                    <span>ID: {loan.id}</span>
                  </div>
                  <div className={`ml-status-pill ${getStatusColor(loan.status)}`}>
                    <span className="dot"></span> {loan.status}
                  </div>
                </div>

                <div className="ml-lc-details">
                  <div className="ml-lc-col">
                    <span className="lbl">TOTAL BORROWED</span>
                    <span className="val">{loan.totalBorrowed}</span>
                  </div>
                  <div className="ml-lc-col">
                    <span className="lbl">REMAINING</span>
                    <span className="val">{loan.remaining}</span>
                  </div>
                  <div className="ml-lc-col">
                    <span className="lbl">PURPOSE</span>
                    <span className="val">{loan.purpose}</span>
                  </div>
                  <div className="ml-lc-col">
                    <span className="lbl">BUNGA (FLAT)</span>
                    <span className="val">{loan.bunga}</span>
                  </div>
                </div>

                <div className="ml-lc-progress">
                  <div className="prog-header">
                    <span>Repayment Progress</span>
                    <span className="pct">{loan.progress}%</span>
                  </div>
                  <div className="prog-bar">
                    <div className="prog-fill" style={{ width: `${loan.progress}%` }}></div>
                  </div>
                  <div className="prog-footer">
                    {loan.installmentsPaid} of {loan.totalInstallments} Installments Paid
                  </div>
                </div>

                <div className="ml-lc-footer">
                  <div>
                    <div className="lbl">NEXT DEDUCTION</div>
                    <div className="val">{loan.nextDeduction}</div>
                  </div>
                  <button className="btn-view-details" onClick={() => navigate(`/dashboard/loans/${loan.id.replace('#','')}`)}>
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="ml-empty-state">
            <p>No {activeTab} loans found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyLoans;
