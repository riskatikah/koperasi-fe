import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search, Filter, Plus, Upload, X,
  UploadCloud, Download, AlertCircle, ArrowLeft
} from 'lucide-react';
import './SHUManagement.css';

const SHUIncomeTransaction = () => {
  const navigate = useNavigate();

  const [showManualModal, setShowManualModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showProcessModal, setShowProcessModal] = useState(false);

  const data = [
    { id: 1, name: 'Agung', nik: '1112', total: 'Rp 2.500.000', shu: 'Rp 4.200.000', bank: 'BCA', acc: '02873' },
    { id: 2, name: 'Agung', nik: '1112', total: 'Rp 2.500.000', shu: 'Rp 4.200.000', bank: 'MANDIRI', acc: '02873' },
    { id: 3, name: 'Agung', nik: '1112', total: 'Rp 2.500.000', shu: 'Rp 4.200.000', bank: 'BRI', acc: '02873' },
  ];

  return (
    <div className="shu-container">

      {/* HEADER */}
      <button className="shu-btn-back" onClick={() => navigate('/dashboard/admin/shu-dashboard')}>
        <ArrowLeft size={16} /> Back
      </button>

      <h1 className="shu-page-title">SHU INCOME TRANSACTION</h1>

      {/* SEARCH */}
      <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
        <input
          placeholder="Search..."
          style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
        />
        <button>
          <Filter size={18} />
        </button>
      </div>

      {/* ACTION BUTTON */}
      <div style={{ marginTop: '16px' }}>
        <button onClick={() => setShowManualModal(true)}>
          <Plus size={16} /> Add
        </button>

        <button onClick={() => setShowUploadModal(true)}>
          <Upload size={16} /> Upload
        </button>
      </div>

      {/* TABLE */}
      <table style={{ width: '100%', marginTop: '20px' }}>
        <thead>
          <tr>
            <th>Nama</th>
            <th>NIK</th>
            <th>SHU</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map(row => (
            <tr key={row.id}>
              <td>{row.name}</td>
              <td>{row.nik}</td>
              <td>{row.shu}</td>
              <td>
                {/* ✅ FIXED BUTTON */}
                <button
                  onClick={() => setShowProcessModal(true)}
                  style={{
                    background: 'linear-gradient(135deg, #7C3AED, #6D28D9)',
                    color: 'white',
                    border: 'none',
                    padding: '8px 16px',
                    borderRadius: '6px',
                    cursor: 'pointer'
                  }}
                >
                  PROCESS
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* MODAL PROCESS */}
      {showProcessModal && (
        <div onClick={() => setShowProcessModal(false)}>
          <div onClick={e => e.stopPropagation()}>
            <h3>Process SHU?</h3>

            <button onClick={() => setShowProcessModal(false)}>YES</button>
            <button onClick={() => setShowProcessModal(false)}>NO</button>
          </div>
        </div>
      )}

    </div>
  );
};

export default SHUIncomeTransaction;