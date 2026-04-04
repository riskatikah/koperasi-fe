import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, ShoppingBag } from 'lucide-react';
import './AdminPendingApprovals.css';

const AdminPendingApprovals = () => {
  const [activeTab, setActiveTab] = useState('approvals'); // 'approvals' | 'active'
  const navigate = useNavigate();

  const handleDetails = (id) => {
    navigate(`/dashboard/admin/ls-loans/${id}`);
  };

  return (
    <div className="admin-pending-approvals">
      <div className="apa-header">
        <h1>{activeTab === 'approvals' ? 'Pending Approvals' : 'Loan Payment Reminder'}</h1>
        <div className="apa-breadcrumb">
          {activeTab === 'approvals' 
            ? 'Loan Dashboard > Pending Approvals' 
            : 'Dashboard > Loan Payment Reminder'}
        </div>
      </div>

      <div className="apa-tabs">
        <button 
          className={`apa-tab ${activeTab === 'approvals' ? 'active' : ''}`}
          onClick={() => setActiveTab('approvals')}
        >
          Loan Approvals
        </button>
        <button 
          className={`apa-tab ${activeTab === 'active' ? 'active' : ''}`}
          onClick={() => setActiveTab('active')}
        >
          Payment Active
        </button>
      </div>

      {activeTab === 'approvals' && (
        <div className="apa-approvals-content">
          {[1, 2, 3, 4].map(item => (
            <div key={item} className="apa-approval-card">
              <div className="apa-card-avatar">
                <User size={24} color="white" />
              </div>
              <div className="apa-card-user">
                <div className="apa-card-name">Rafilla Shalwa</div>
                <div className="apa-card-dept">HRD & GA</div>
                <div className="apa-card-id">0072871</div>
              </div>
              <div className="apa-card-purpose">
                <div className="apa-card-label">Purpose</div>
                <div className="apa-card-value">Kebutuhan mendadak untuk renovasi rumah</div>
              </div>
              <div className="apa-card-term">
                <div className="apa-card-label">Term</div>
                <div className="apa-card-value">6 Bulan</div>
              </div>
              <div className="apa-card-amount">
                <div className="apa-card-label">Amount</div>
                <div className="apa-card-value bold">8.000.000</div>
              </div>
              <div className="apa-card-action">
                <button className="apa-btn-details" onClick={() => handleDetails(item)}>Details</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'active' && (
        <div className="apa-active-content">
          <div className="apa-stats">
            <div className="apa-stat-card">
              <div className="apa-stat-title">Total Active Loan</div>
              <div className="apa-stat-body">
                <div className="apa-stat-icon"><ShoppingBag size={18} /></div>
                <div className="apa-stat-val bold">15/30 Members</div>
              </div>
            </div>
            <div className="apa-stat-card">
              <div className="apa-stat-title">Collected This Month</div>
              <div className="apa-stat-body">
                <div className="apa-stat-icon"><ShoppingBag size={18} /></div>
                <div className="apa-stat-val bold">Rp 2.300.000,00</div>
              </div>
            </div>
            <div className="apa-stat-card">
              <div className="apa-stat-title">Total Overdue Amount</div>
              <div className="apa-stat-body">
                <div className="apa-stat-icon overdue"><ShoppingBag size={18} /></div>
                <div className="apa-stat-val bold overdue">RP 5.000.000,00</div>
              </div>
            </div>
          </div>

          <div className="apa-filters">
            <div className="apa-filter-group">
              <label>Status</label>
              <select><option></option></select>
            </div>
            <div className="apa-filter-group">
              <label>Date</label>
              <div className="apa-date-range">
                <input type="date" /> - <input type="date" />
              </div>
            </div>
            <div className="apa-filter-actions">
              <button className="apa-btn-gray">Send Reminders</button>
              <button className="apa-btn-gray">Clear</button>
              <button className="apa-btn-gray">Search</button>
            </div>
          </div>

          <div className="apa-table-wrapper">
            <table className="apa-table">
              <thead>
                <tr>
                  <th><input type="checkbox" /></th>
                  <th>Member</th>
                  <th>Loan Id</th>
                  <th>Due Date</th>
                  <th>Installment</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4].map(row => (
                  <tr key={row}>
                    <td><input type="checkbox" /></td>
                    <td className="bold">Shalwa</td>
                    <td className="bold">236174</td>
                    <td className="bold">Jan 8th,2022</td>
                    <td className="bold">11/12</td>
                    <td className="bold">Rp 50.000,00</td>
                    <td className="bold">Paid</td>
                    <td><button className="apa-btn-table" onClick={() => handleDetails(row)}>Detail</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            <div className="apa-pagination">
              <button className="active">1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
              <span>...</span>
              <button>10</button>
              <button>NEXT &gt;</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPendingApprovals;
