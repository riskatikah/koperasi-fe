import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, Plus, Upload, X, UploadCloud, Download, AlertCircle, FileText, Database, ArrowLeft } from 'lucide-react';
import './SHUManagement.css';

const SHUOutcomeTransaction = () => {
  const navigate = useNavigate();
  const [showManualModal, setShowManualModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);

  return (
    <div className="shu-container">
      {/* Detail Headers */}
      <button className="shu-btn-back" onClick={() => navigate('/dashboard/admin/shu-dashboard')}>
        <ArrowLeft size={16} /> Back to Dashboard
      </button>
      <h1 className="shu-page-title" style={{ fontSize: '20px', marginBottom: 0 }}>
        SHU MANAGEMENT &gt; OUTCOME TRANSACTION
      </h1>
      <p className="shu-page-subtitle" style={{ borderBottom: '1px solid #E2E8F0', paddingBottom: '24px' }}>
        Report for the 2025 Financial Year
      </p>

      {/* Outcome Cards row */}
      <div style={{ marginTop: '8px' }}>
        <h2 className="shu-page-title" style={{ fontSize: '20px', marginBottom: '16px' }}>
          Outcome Transaction Management
        </h2>
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
          <div style={{ display: 'flex', gap: '16px', flex: 1 }}>
            
            {/* Total Outcome Card */}
            <div style={{ 
              display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 20px', 
              background: '#F8FAFC', border: '1px solid #C7D2FE', borderRadius: '8px', flex: 1
            }}>
              <div style={{ width: '40px', height: '40px', background: '#EEF2FF', color: '#8B5CF6', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <FileText size={20} />
              </div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#3D5270', marginBottom: '4px' }}>Total Outcome</div>
                <div style={{ fontSize: '20px', fontWeight: 800, color: '#8B5CF6', fontFamily: 'var(--font-h)' }}>Rp 78.000.000</div>
              </div>
            </div>

            {/* Transactions Card */}
            <div style={{ 
              display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 20px', 
              background: '#F8FAFC', border: '1px solid #FDE68A', borderRadius: '8px', flex: 1
            }}>
              <div style={{ width: '40px', height: '40px', background: '#FFFBEB', color: '#F59E0B', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Database size={20} />
              </div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#3D5270', marginBottom: '4px' }}>Transactions</div>
                <div style={{ fontSize: '20px', fontWeight: 800, color: '#F59E0B', fontFamily: 'var(--font-h)' }}>24 records</div>
              </div>
            </div>

          </div>
          
          <select style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid #E2E8F0', color: '#8B5CF6', fontWeight: 600, outline: 'none', background: 'white' }}>
            <option>December 2025</option>
            <option>November 2025</option>
          </select>
        </div>
      </div>

      {/* Table Actions */}
      <div className="shu-table-header-row" style={{ marginTop: '24px' }}>
        <div style={{ display: 'flex', gap: '12px', flex: 1 }}>
          <div style={{ position: 'relative', width: '320px' }}>
            <Search size={16} style={{ position: 'absolute', left: 12, top: 12, color: '#94A3B8' }} />
            <input 
              type="text" 
              placeholder="Search by Number ID or Invoice No..." 
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
      <div className="shu-table-container" style={{ background: 'white', border: '1px solid #E2E8F0' }}>
        <table className="shu-table">
          <thead style={{ background: '#EDE9FE' }}>
            <tr>
              <th>Number ID</th>
              <th>Date</th>
              <th>Type Outcome</th>
              <th>No. Invoice</th>
              <th>Quantity</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody style={{ background: '#F5F3FF' }}>
            {[
              { id: 1, nid: '00111225', date: '11-12-2025', type: 'Gaji pengelola', invoice: 'INV-31122025001', qty: '10', payment: '250.000' },
              { id: 2, nid: '00111225', date: '11-12-2025', type: 'Operasional', invoice: 'INV-31122025001', qty: '10', payment: '250.000' },
              { id: 3, nid: '00111225', date: '11-12-2025', type: 'Tagihan', invoice: 'INV-31122025001', qty: '10', payment: '250.000' },
              { id: 4, nid: '00111225', date: '11-12-2025', type: 'Biaya peralatan', invoice: 'INV-31122025001', qty: '10', payment: '250.000' },
              { id: 5, nid: '00111225', date: '11-12-2025', type: 'Pinjaman anggota', invoice: 'INV-31122025001', qty: '10', payment: '250.000' },
              { id: 6, nid: '00111225', date: '11-12-2025', type: 'Biaya peralatan', invoice: 'INV-31122025001', qty: '10', payment: '250.000' },
              { id: 7, nid: '00111225', date: '11-12-2025', type: 'Tagihan', invoice: 'INV-31122025001', qty: '10', payment: '250.000' },
            ].map(row => (
              <tr key={row.id}>
                <td style={{ fontWeight: 800, fontSize: '13px' }}>{row.nid}</td>
                <td style={{ fontWeight: 800, fontSize: '13px' }}>{row.date}</td>
                <td style={{ fontWeight: 800, fontSize: '13px' }}>{row.type}</td>
                <td style={{ fontWeight: 800, fontSize: '13px' }}>{row.invoice}</td>
                <td style={{ fontWeight: 800, fontSize: '13px' }}>{row.qty}</td>
                <td style={{ fontWeight: 800, fontSize: '13px' }}>{row.payment}</td>
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
              <div className="shu-modal-title">SHU MANAGEMENT &gt; OUTCOME TRANSACTION &gt; Add Manually</div>
              <button className="shu-modal-close" onClick={() => setShowManualModal(false)}>
                <X size={20} />
              </button>
            </div>
            <div className="shu-form-container">
              <p style={{ color: '#3D5270', fontSize: '14px', marginBottom: '24px', borderBottom: '1px solid #E2E8F0', paddingBottom: '16px' }}>
                Laporan Periode Tahun Buku 2025
              </p>
              <form onSubmit={(e) => { e.preventDefault(); setShowManualModal(false); }}>
                <div className="shu-form-grid">
                  <label style={{ fontWeight: 800, color: '#0A1628', fontSize: '15px' }}>ID Number</label>
                  <input type="text" className="shu-form-input" />
                </div>
                
                <div className="shu-form-grid">
                  <label style={{ fontWeight: 800, color: '#0A1628', fontSize: '15px' }}>Date</label>
                  <input type="date" className="shu-form-input" />
                </div>
                
                <div className="shu-form-grid">
                  <label style={{ fontWeight: 800, color: '#0A1628', fontSize: '15px' }}>Outcome Type</label>
                  <input type="text" className="shu-form-input" />
                </div>
                
                <div className="shu-form-grid">
                  <label style={{ fontWeight: 800, color: '#0A1628', fontSize: '15px' }}>No. Invoice</label>
                  <input type="text" className="shu-form-input" />
                </div>
                
                <div className="shu-form-grid">
                  <label style={{ fontWeight: 800, color: '#0A1628', fontSize: '15px' }}>Quantity</label>
                  <input type="text" className="shu-form-input" />
                </div>
                
                <div className="shu-form-grid">
                  <label style={{ fontWeight: 800, color: '#0A1628', fontSize: '15px' }}>Price</label>
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
            <div className="shu-modal-header" style={{ paddingBottom: '0', borderBottom: 'none' }}>
              <div className="shu-modal-title">SHU MANAGEMENT &gt; OUTCOME TRANSACTION &gt; Upload Excel</div>
              <button className="shu-modal-close" onClick={() => setShowUploadModal(false)}>
                <X size={20} />
              </button>
            </div>
            
            <div className="shu-form-container">
              <p style={{ color: '#3D5270', fontSize: '14px', marginBottom: '24px', borderBottom: '1px solid #E2E8F0', paddingBottom: '16px', marginTop: 0 }}>
                Report for the 2025 Financial Year
              </p>

              <div style={{ border: '1px solid #E2E8F0', borderRadius: '12px', padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#8B5CF6', fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}>
                  <Download size={16} />
                  <span style={{ textDecoration: 'underline' }}>Download Excel Template</span>
                </div>

                <div className="shu-upload-instruction">
                  <AlertCircle size={20} color="#8B5CF6" style={{ flexShrink: 0 }} />
                  <div>
                    <strong style={{ display: 'block', color: '#0A1628', fontSize: '15px', marginBottom: '4px' }}>Instructions</strong>
                    To import Outcome transactions in bulk, please use the provided Excel template. Ensure your data matches the columns specified in the system.
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
        </div>
      )}

    </div>
  );
};

export default SHUOutcomeTransaction;
