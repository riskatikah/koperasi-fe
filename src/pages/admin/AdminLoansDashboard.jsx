import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, Search, Printer, MoreHorizontal } from 'lucide-react';
import './AdminLoansDashboard.css';

const AdminLoansDashboard = () => {
  const navigate = useNavigate();

  const handlePendingDetails = (id) => {
    navigate(`/dashboard/admin/ls-loans/${id}`);
  };

  return (
    <div className="admin-loans-dash">
      <div className="ald-header">
        <h1>Loan Management</h1>
        <div className="ald-breadcrumb">Home &gt; Loan Management</div>
      </div>

      <div className="ald-stats">
        {[
          { title: 'Total Outstanding', value: '$126.500', up: '34.7%' },
          { title: 'Active Borrowers', value: '$126.500', up: '34.7%' },
          { title: 'Next Payroll Deduction', value: '$126.500', up: '34.7%' },
          { title: 'Pending Approvals', value: '$126.500', up: '34.7%' }
        ].map((stat, i) => (
          <div key={i} className="ald-stat-card">
            <div className="ald-stat-top">
              <div className="ald-stat-title">{stat.title}</div>
            </div>
            <div className="ald-stat-body">
              <div className="ald-stat-icon-wrapper">
                <ShoppingBag size={18} className="ald-stat-icon" />
              </div>
              <div className="ald-stat-value">{stat.value}</div>
              <div className="ald-stat-trend">↑ {stat.up}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="ald-pending-section">
        <div className="ald-pending-header">
          <h2>Pending Approvals</h2>
          <Link to="/dashboard/admin/ls-loans/pending" className="ald-view-more">
            View More &rarr;
          </Link>
        </div>

        <div className="ald-pending-list">
          {[1, 2, 3].map((item) => (
            <div key={item} className="ald-pending-card" onClick={() => handlePendingDetails(item)} style={{ cursor: 'pointer' }}>
              <div className="ald-pc-top">
                <div className="ald-pc-avatar"></div>
                <div className="ald-pc-info">
                  <div className="ald-pc-name">Rafilla Shalwa</div>
                  <div className="ald-pc-dept">HRD & GA</div>
                  <div className="ald-pc-id">0072871</div>
                </div>
              </div>
              <div className="ald-pc-mid">
                <div className="ald-pc-col">
                  <div className="ald-pc-label">Purpose</div>
                  <div className="ald-pc-desc">Kebutuhan mendadak untuk renovasi rumah</div>
                </div>
                <div className="ald-pc-col term">
                  <div className="ald-pc-label">Term</div>
                  <div className="ald-pc-desc">6 Bulan</div>
                </div>
              </div>
              <div className="ald-pc-amount">
                <span>Amount</span>
                <span>Rp 5.000.000</span>
              </div>
              <div className="ald-pc-actions">
                <button className="ald-btn reject">REJECT</button>
                <button className="ald-btn approve" onClick={() => handlePendingDetails(item)}>APPROVE</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="ald-table-section">
        <div className="ald-table-controls">
          <div className="ald-search">
            <Search size={16} />
            <input type="text" placeholder="Search by name, NIK, or Loan ID..." />
          </div>
          <div className="ald-filter">
            <select>
              <option>Date</option>
            </select>
          </div>
          <button className="ald-print-btn">
            <Printer size={16} />
          </button>
        </div>

        <div className="ald-table-container">
          <table className="ald-table">
            <thead>
              <tr>
                <th>Anggota</th>
                <th>Jenis</th>
                <th>Total Angsuran</th>
                <th>Installment</th>
                <th>Progress</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Adidas Ultra boost</td>
                <td>Cash Loan</td>
                <td>Rp 5.000.000</td>
                <td>Rp 2.500.000</td>
                <td>5/10</td>
                <td>50%</td>
                <td><span className="ald-status active">Active</span></td>
              </tr>
              <tr>
                <td>Adidas Ultra boost</td>
                <td>Goods Loan</td>
                <td>Rp 5.000.000</td>
                <td>Rp 2.500.000</td>
                <td>5/10</td>
                <td>50%</td>
                <td><span className="ald-status paid">Lunas</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminLoansDashboard;
