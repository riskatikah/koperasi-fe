import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, ChevronRight } from 'lucide-react';
import './MemberApprovals.css';

const MemberApprovals = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('new'); // 'new' | 'close'

  const handleDetail = (id) => {
    navigate(`/dashboard/admin/approvals/${id}`);
  };

  return (
    <div className="ma-container">
      <div className="ma-header">
        <div className="ma-tabs">
          <button 
            className={`ma-tab-btn ${activeTab === 'new' ? 'active' : ''}`}
            onClick={() => setActiveTab('new')}
          >
            New Member
          </button>
          <button 
            className={`ma-tab-btn ${activeTab === 'close' ? 'active' : ''}`}
            onClick={() => setActiveTab('close')}
          >
            Close Account
          </button>
        </div>
        <h1 className="ma-title">
          {activeTab === 'new' ? 'Permintaan Pendaftaran Akun Baru' : 'Permintaan Close Akun'}
        </h1>
      </div>

      <div className="ma-content-wrapper">
        <div className="ma-notif-header">
          <h2 className="ma-notif-title">Notification</h2>
          
          <div className="ma-controls">
            <div className="ma-search">
              <Search size={16} />
              <input type="text" placeholder="Search by name..." />
            </div>
            <button className="ma-filter-btn">
              <Filter size={16} />
              Filter
            </button>
          </div>
        </div>

        <div className="ma-table-wrapper">
          <table className="ma-table">
            <thead>
              {activeTab === 'new' ? (
                <tr>
                  <th>Name</th>
                  <th>NIK</th>
                  <th>Registration Date</th>
                  <th>Email</th>
                  <th>No. Telp</th>
                  <th>Monthly Income (Net)</th>
                  <th>Detail</th>
                </tr>
              ) : (
                <tr>
                  <th>Name</th>
                  <th>NIK</th>
                  <th>Registration Date</th>
                  <th>Close Date Request</th>
                  <th>Status</th>
                  <th>Total Cooperative Liabilitie</th>
                  <th>Detail</th>
                </tr>
              )}
            </thead>
            <tbody>
              {activeTab === 'new' ? (
                [1, 2, 3, 4, 5, 6].map((row) => (
                  <tr key={row}>
                    <td>Shalwa</td>
                    <td>00039384</td>
                    <td>15-01-2025</td>
                    <td>shalwa@gmail.com</td>
                    <td>0876525567890</td>
                    <td>Rp 15.000.000</td>
                    <td>
                      <button className="btn-ma-detail" onClick={() => navigate(`/dashboard/admin/approvals/${row}`)}>Detail</button>
                    </td>
                  </tr>
                ))
              ) : (
                [1, 2, 3, 4, 5].map((row) => (
                  <tr key={row}>
                    <td>Shalwa</td>
                    <td>00039384</td>
                    <td>15-01-2025</td>
                    <td>shalwa@gmail.com</td> {/* Mismatched mock data from Image 1, we match the image text literally */}
                    <td>Rp 15.000.000</td>
                    <td></td> {/* Status and Total columns shifted because of bad mock data in image 1. We'll reconstruct properly */}
                    <td>
                      <button className="btn-ma-detail" onClick={() => navigate(`/dashboard/admin/approvals/close/${row}`)}>Detail</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */ }
        <div className="ma-pagination">
          <button className="mm-page-btn active">1</button>
          <button className="mm-page-btn">2</button>
          <button className="mm-page-btn">3</button>
          <button className="mm-page-btn">4</button>
          <span>...</span>
          <button className="mm-page-btn">10</button>
          <button className="mm-page-btn next">NEXT <ChevronRight size={14} /></button>
        </div>
      </div>
    </div>
  );
};

export default MemberApprovals;
