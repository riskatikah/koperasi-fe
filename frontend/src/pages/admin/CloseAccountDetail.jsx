import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './MemberDetail.css'; // Let's reuse MemberDetail.css since it has suitable input wrappers

const CloseAccountDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleBack = () => {
    navigate('/dashboard/admin/approvals');
  };

  return (
    <div className="md-container" style={{ padding: '0 28px' }}>
      <div className="md-header">
        <h1 className="md-title">Permintaan Close Akun</h1>
      </div>

      <div className="md-content">
        <div className="md-section">
          <div className="md-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div className="md-form-group">
              <label>NIK (Nomor Induk Kependudukan)</label>
              <input type="text" className="md-input" disabled />
            </div>
            <div className="md-form-group">
              <label>Voluntary Saving</label>
              <input type="text" className="md-input" disabled />
            </div>

            <div className="md-form-group">
              <label>NPWP</label>
              <input type="text" className="md-input" disabled />
            </div>
            <div className="md-form-group">
              <label>Mandatory Saving</label>
              <input type="text" className="md-input" disabled />
            </div>

            <div className="md-form-group">
              <label>Address</label>
              <textarea className="md-input" style={{ height: '80px', resize: 'none' }} disabled></textarea>
            </div>
            <div className="md-form-group">
              <label>SHU Calcualted</label>
              <input type="text" className="md-input" disabled />
            </div>

            <div className="md-form-group">
              <label>Mobile Phone Number</label>
              <input type="text" className="md-input" value="+62" disabled />
            </div>
            <div className="md-form-group">
              <label>Total Cooperative Liabilities to Members</label>
              <input type="text" className="md-input" value="Rp" disabled />
            </div>

            <div className="md-form-group">
              <label>Email Address</label>
              <input type="text" className="md-input" disabled />
            </div>
            <div className="md-form-group">
              <label>Reason of Account Closure</label>
              <textarea className="md-input" style={{ height: '110px', resize: 'none' }} disabled></textarea>
            </div>
          </div>
        </div>

        <div className="md-section" style={{ borderTop: '1px solid #E2E8F0', paddingTop: '24px' }}>
          <div className="md-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div>
              <div className="md-form-group">
                <label>Member Status</label>
                <select className="md-input" style={{ backgroundColor: '#F8FAFC' }}>
                  <option></option>
                </select>
              </div>
              <div className="md-form-group" style={{ marginTop: '20px' }}>
                <label>Notes</label>
                <textarea className="md-input" style={{ height: '100px', resize: 'none', backgroundColor: '#fff' }}></textarea>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '24px' }}>
              <button 
                className="md-btn-back" 
                onClick={handleBack}
                style={{ backgroundColor: '#64748B', color: '#fff', border: 'none', padding: '10px 30px', borderRadius: '6px', fontWeight: '600' }}
              >
                Back
              </button>
              <button 
                className="md-btn-reject"
                style={{ backgroundColor: '#57534E', color: '#fff', border: 'none', padding: '10px 30px', borderRadius: '6px', fontWeight: '600' }}
              >
                Reject
              </button>
              <button 
                className="md-btn-approve"
                style={{ backgroundColor: '#4b5563', color: '#fff', border: 'none', padding: '10px 30px', borderRadius: '6px', fontWeight: '600' }}
              >
                Approved
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloseAccountDetail;
