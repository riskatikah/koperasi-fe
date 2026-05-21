import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ChevronRight } from 'lucide-react';
import './MemberManagement.css';

const MemberManagement = () => {
  const navigate = useNavigate();

  const handleDetail = (id) => {
    navigate(`/dashboard/admin/members/${id}`);
  };

  return (
    <div className="mm-container">
      <h1 className="mm-header-title">Member Management</h1>

      {/* Stats Row */}
      <div className="mm-stats">
        <div className="mm-stat-card">
          <div className="mm-stat-lbl">Total Member Savings</div>
          <div className="mm-stat-val">
            <div className="mm-stat-box"></div>
            <strong>Rp 126.500.000</strong>
          </div>
        </div>
        <div className="mm-stat-card">
          <div className="mm-stat-lbl">Principle Saving</div>
          <div className="mm-stat-val">
            <div className="mm-stat-box"></div>
            <strong>Rp 126.500.000</strong>
          </div>
        </div>
        <div className="mm-stat-card">
          <div className="mm-stat-lbl">Mandatory Saving</div>
          <div className="mm-stat-val">
            <div className="mm-stat-box"></div>
            <strong>Rp 126.500.000</strong>
          </div>
        </div>
        <div className="mm-stat-card">
          <div className="mm-stat-lbl">Voluntary Saving</div>
          <div className="mm-stat-val">
            <div className="mm-stat-box"></div>
            <strong>Rp 126.500.000</strong>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="mm-table-wrapper">
        <div className="mm-table-controls">
          <div className="mm-search">
            <Search size={18} />
            <input type="text" placeholder="Search by name" />
          </div>
          <select className="mm-filter">
            <option value="department">Department</option>
            <option value="engineering">Engineering</option>
            <option value="hrd">HRD & GA</option>
          </select>
        </div>

        <div className="mm-table">
          <table>
            <thead>
              <tr>
                <th>Anggota</th>
                <th>Department</th>
                <th>Join Date</th>
                <th>NPWP</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Total Saving</th>
                <th>Detail</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5, 6].map((row) => (
                <tr key={row}>
                  <td>
                    Rafilla Shalwa
                    <span className="sub">00012782</span>
                  </td>
                  <td>Engineering</td>
                  <td>12-02-2025</td>
                  <td>Rp 1.000.000</td>
                  <td>Rp 2.500.000</td>
                  <td>Rp 2.500.000</td>
                  <td className="total">Rp 4.200.000</td>
                  <td>
                    <button className="btn-detail" onClick={() => handleDetail(row)}>Detail</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */ }
        <div className="mm-pagination">
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

export default MemberManagement;
