import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, Plus, Upload, X, UploadCloud, Download, AlertCircle, ArrowLeft } from 'lucide-react';
import './SHUManagement.css';

const SHUIncomeTransaction = () => {
  const navigate = useNavigate();
  const [showManualModal, setShowManualModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showProcessModal, setShowProcessModal] = useState(false);

  return (
    <div className="shu-container">
      {/* Detail Headers */}
      <button className="shu-btn-back" onClick={() => navigate('/dashboard/admin/shu-dashboard')}>
        <ArrowLeft size={16} /> Back to Dashboard
      </button>
      <h1 className="shu-page-title" style={{ fontSize: '20px', marginBottom: 0 }}>
        SHU MANAGEMENT &gt; INCOME TRANSACTION
      </h1>
      <p className="shu-page-subtitle" style={{ borderBottom: '1px solid #E2E8F0', paddingBottom: '24px' }}>
        Report for the 2025 Financial Year
      </p>

      {/* Info Box */}
      <div style={{ marginTop: '8px' }}>
        <h2 className="shu-page-title" style={{ fontSize: '18px', marginBottom: '12px' }}>
          DAFTAR PEMBAGIAN SHU ANGGOTA
        </h2>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px' }}>
          <div className="shu-blue-bar">
            Mengelola data pendapatan bulanan untuk perhitungan SHU. Lihat catatan saat ini atau unggah file Excel untuk entri dalam jumlah besar.
          </div>
          <select style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid #E2E8F0', color: '#8B5CF6', fontWeight: 600, outline: 'none', background: 'white' }}>
            <option>Desember 2025</option>
            <option>November 2025</option>
          </select>
        </div>
      </div>

      {/* Table Actions */}
      <div className="shu-table-header-row" style={{ marginTop: '16px' }}>
        <div style={{ display: 'flex', gap: '12px', flex: 1 }}>
          <div style={{ position: 'relative', width: '320px' }}>
            <Search size={16} style={{ position: 'absolute', left: 12, top: 12, color: '#94A3B8' }} />
            <input 
              type="text" 
              placeholder="Cari berdasarkan ID atau No Invoice..." 
              style={{ width: '100%', padding: '10px 16px 10px 36px', borderRadius: '8px', border: '1px solid #E2E8F0', backgroundColor: '#F8FAFC', outline: 'none' }}
            />
          </div>
          <button style={{ padding: '10px 16px', background: 'transparent', border: 'none', cursor: 'pointer' }}>
            <Filter size={18} color="#0A1628" />
          </button>
        </div>
        
        <div className="shu-table-actions">
          <button className="shu-btn-secondary" onClick={() => setShowManualModal(true)}>
            <Plus size={16} /> Add Manually
          </button>
          <button className="shu-btn-primary" onClick={() => setShowUploadModal(true)}>
            <Upload size={16} /> Upload Excel
          </button>
        </div>
      </div>

      {/* Table Content */}
      <div className="shu-table-container">
        <table className="shu-table">
          <thead>
            <tr>
              <th>Nama Anggota</th>
              <th>NIK</th>
              <th>Total Simpanan Anggota</th>
              <th>SHU Jasa Modal</th>
              <th>Bank</th>
              <th>Nomer Akun</th>
              <th>Proses</th>
            </tr>
          </thead>
          <tbody>
            {[
              { id: 1, name: 'Agung', nik: '1112', total: 'Rp 2.500.000', shu: 'Rp 4.200.000', bank: 'BCA', acc: '02873' },
              { id: 2, name: 'Agung', nik: '1112', total: 'Rp 2.500.000', shu: 'Rp 4.200.000', bank: 'MANDIRI', acc: '02873' },
              { id: 3, name: 'Agung', nik: '1112', total: 'Rp 2.500.000', shu: 'Rp 4.200.000', bank: 'BRI', acc: '02873' },
              { id: 4, name: 'Agung', nik: '1112', total: 'Rp 2.500.000', shu: 'Rp 4.200.000', bank: 'BRI', acc: '02873' },
              { id: 5, name: 'Agung', nik: '1112', total: 'Rp 2.500.000', shu: 'Rp 4.200.000', bank: 'BRI', acc: '02873' },
              { id: 6, name: 'Agung', nik: '1112', total: 'Rp 2.500.000', shu: 'Rp 4.200.000', bank: 'BRI', acc: '02873' },
            ].map(row => (
              <tr key={row.id}>
                <td>{row.name}</td>
                <td>{row.nik}</td>
                <td>{row.total}</td>
                <td className="blue-text">{row.shu}</td>
                <td>{row.bank}</td>
                <td>{row.acc}</td>
                <td>
                  <button onClick={() => setShowProcessModal(true)} style={{
                    background: 'transparent', // The picture is dark blue outline button actually, but in general design it was purple. I'll stick to a blue/purple gradient matching the original implementation but now with onClick.
                    background: 'linear-gradient(135deg, #7C3AED, #6D28D9)',
                    color: 'white',
                    border: 'none',
                    padding: '8px 16px',
                    borderRadius: '6px',
                    fontWeight: 600,
                    fontSize: '12px',
                    cursor: 'pointer'
                  }}>PROCESS</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Manual Entry Modal */}
      {showManualModal && (
        <div className="shu-modal-overlay" onClick={() => setShowManualModal(false)}>
          <div className="shu-modal-content" onClick={e => e.stopPropagation()}>
            <div className="shu-modal-header">
              <div className="shu-modal-title">Add Manually</div>
              <button className="shu-modal-close" onClick={() => setShowManualModal(false)}>
                <X size={20} />
              </button>
            </div>
            <div className="shu-form-container">
              <form onSubmit={(e) => { e.preventDefault(); setShowManualModal(false); }}>
                <div className="shu-form-grid">
                  <label style={{ fontWeight: 700, color: '#0A1628', fontSize: '14px' }}>Member Name</label>
                  <input type="text" className="shu-form-input" />
                </div>
                
                <div className="shu-form-grid">
                  <label style={{ fontWeight: 700, color: '#0A1628', fontSize: '14px' }}>NIK</label>
                  <input type="text" className="shu-form-input" />
                </div>
                
                <div className="shu-form-grid">
                  <label style={{ fontWeight: 700, color: '#0A1628', fontSize: '14px' }}>Total Member Savings</label>
                  <input type="text" className="shu-form-input" />
                </div>
                
                <div className="shu-form-grid">
                  <label style={{ fontWeight: 700, color: '#0A1628', fontSize: '14px' }}>SHUCapital Service</label>
                  <input type="text" className="shu-form-input" />
                </div>
                
                <div className="shu-form-grid">
                  <label style={{ fontWeight: 700, color: '#0A1628', fontSize: '14px' }}>Bank</label>
                  <input type="text" className="shu-form-input" />
                </div>
                
                <div className="shu-form-grid">
                  <label style={{ fontWeight: 700, color: '#0A1628', fontSize: '14px' }}>Account Number</label>
                  <input type="text" className="shu-form-input" />
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '32px' }}>
                  <button type="submit" className="shu-btn-primary" style={{ padding: '12px 48px' }}>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Upload Excel Modal */}
      {showUploadModal && (
        <div className="shu-modal-overlay" onClick={() => setShowUploadModal(false)}>
          <div className="shu-modal-content" onClick={e => e.stopPropagation()}>
            <div className="shu-modal-header">
              <div className="shu-modal-title">Upload Excel</div>
              <button className="shu-modal-close" onClick={() => setShowUploadModal(false)}>
                <X size={20} />
              </button>
            </div>
            
            <div className="shu-form-container">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#8B5CF6', fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}>
                <Download size={16} />
                <span style={{ textDecoration: 'underline' }}>Download Excel Template</span>
              </div>

              <div className="shu-upload-instruction">
                <AlertCircle size={20} color="#8B5CF6" style={{ flexShrink: 0 }} />
                <div>
                  <strong style={{ display: 'block', color: '#0A1628', fontSize: '15px', marginBottom: '4px' }}>Instructions</strong>
                  To import transactions in bulk, please use the provided Excel template. Ensure your data matches the columns specified in the system.
                </div>
              </div>

              <div className="shu-drop-zone">
                <div className="shu-drop-icon">
                  <UploadCloud size={32} />
                </div>
                <h3 style={{ fontSize: '18px', color: '#0A1628', marginBottom: '8px' }}>
                  Drag & drop your Excel file here
                </h3>
                <p style={{ color: '#64748B', fontSize: '14px', marginBottom: '24px' }}>
                  or <span style={{ color: '#8B5CF6', fontWeight: 600, cursor: 'pointer' }}>browse files</span> from your computer
                </p>
                <div style={{ fontSize: '12px', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase', marginBottom: '12px' }}>Supported Format</div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <span style={{ background: '#DCFCE7', color: '#22C55E', padding: '4px 12px', borderRadius: '12px', fontSize: '10px', fontWeight: 700 }}>XLSX</span>
                  <span style={{ background: '#DCFCE7', color: '#22C55E', padding: '4px 12px', borderRadius: '12px', fontSize: '10px', fontWeight: 700 }}>XLS</span>
                </div>
              </div>

              <div className="shu-upload-footer">
                <button className="shu-btn-secondary" onClick={() => setShowUploadModal(false)}>
                  Cancel
                </button>
                <button className="shu-btn-primary" style={{ padding: '10px 24px' }} onClick={() => setShowUploadModal(false)}>
                  <UploadCloud size={16} /> Upload Data
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Process Modal */}
      {showProcessModal && (
        <div className="shu-modal-overlay" onClick={() => setShowProcessModal(false)} style={{ zIndex: 99999 }}>
          <div style={{ background: '#7645fa', padding: '48px 64px', borderRadius: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px', boxShadow: '0 20px 40px rgba(118, 69, 250, 0.4)' }} onClick={e => e.stopPropagation()}>
            <h3 style={{ color: 'white', fontFamily: 'var(--font-h)', fontSize: '18px', textAlign: 'center', margin: 0 }}>DO YOU WANT TO PROCESS SHU?</h3>
            <div style={{ display: 'flex', gap: '24px' }}>
              <button onClick={() => setShowProcessModal(false)} style={{ background: '#06B6D4', color: 'white', border: 'none', padding: '10px 48px', borderRadius: '8px', fontWeight: 800, cursor: 'pointer', transition: '0.2s', fontSize: '14px' }}>YES</button>
              <button onClick={() => setShowProcessModal(false)} style={{ background: '#06B6D4', color: 'white', border: 'none', padding: '10px 48px', borderRadius: '8px', fontWeight: 800, cursor: 'pointer', transition: '0.2s', fontSize: '14px' }}>NO</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default SHUIncomeTransaction;
