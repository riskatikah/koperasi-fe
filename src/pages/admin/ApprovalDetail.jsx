import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HelpCircle } from 'lucide-react';
import './ApprovalDetail.css';

const ApprovalDetail = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('new');

  return (
    <div className="ad-detail-container">
      <div className="add-header">

        <h1 className="add-title">Permintaan Pendaftaran Akun Baru</h1>
      </div>

      <div className="add-form">
        {/* Row 1 */}
        <div className="add-form-group">
          <label className="lbl">NIK (Nomor Induk Kependudukan)</label>
          <input type="text" className="add-input" disabled />
        </div>
        <div className="add-form-group">
          <label className="lbl">NIK (Employee)</label>
          <input type="text" className="add-input" disabled />
        </div>

        {/* Row 2 */}
        <div className="add-form-group">
          <label className="lbl">NPWP</label>
          <input type="text" className="add-input" disabled />
        </div>
        <div className="add-row">
          <div className="add-form-group">
            <label className="lbl">Place of Birth</label>
            <input type="text" className="add-input" disabled />
          </div>
          <div className="add-form-group">
            <label className="lbl">Date of Birth</label>
            <input type="date" className="add-input" disabled />
          </div>
        </div>

        {/* Row 3 */}
        <div className="add-form-group" style={{ gridRow: 'span 2' }}>
          <label className="lbl">Address</label>
          <textarea className="add-input" rows={6} disabled></textarea>
        </div>
        <div className="add-row">
          <div className="add-form-group">
            <label className="lbl">Gender</label>
            <select className="add-input" disabled>
              <option></option>
            </select>
          </div>
          <div className="add-form-group">
            <label className="lbl">Department</label>
            <select className="add-input" disabled>
              <option></option>
            </select>
          </div>
        </div>
        <div className="add-form-group">
          <label className="lbl">Registration Date</label>
          <input type="date" className="add-input" disabled />
        </div>

        {/* Row 5 */}
        <div className="add-form-group">
          <label className="lbl">Mobile Phone Number</label>
          <div className="add-input-group">
            <span className="add-input-prefix">+62</span>
            <input type="text" className="add-input" disabled />
          </div>
        </div>
        <div className="add-form-group">
          <label className="lbl">KTP File</label>
          <input type="file" className="add-input" disabled />
        </div>

        {/* Row 6 */}
        <div className="add-form-group">
          <label className="lbl">Email Address</label>
          <input type="email" className="add-input" disabled />
        </div>
        <div className="add-form-group">
          <label className="lbl">Salary Statement</label>
          <input type="file" className="add-input" disabled />
        </div>

        {/* Row 7 */}
        <div className="add-form-group">
          <label className="lbl" style={{display:'flex', alignItems:'center', gap: 4}}>
            Monthly Income (Net) <HelpCircle size={14}/>
          </label>
          <div className="add-input-group">
            <span className="add-input-prefix" style={{ background: 'transparent', borderRight: 'none', paddingRight: 6 }}>Rp</span>
            <input type="text" className="add-input" disabled style={{ paddingLeft: 6 }} />
          </div>
        </div>
        <div className="add-form-group">
          <label className="lbl">Payroll Statement</label>
          <input type="file" className="add-input" disabled />
        </div>

        {/* Row 8 */}
        <div className="add-form-group">
          <label className="lbl">Employee Status</label>
          <select className="add-input" disabled>
            <option></option>
          </select>
        </div>
      </div>

      <div className="add-actions">
        <button className="btn-add edit">Edit</button>
        <button className="btn-add back" onClick={() => navigate(-1)}>Back</button>
        <button className="btn-add save">Save</button>
        <button className="btn-add reject">Reject</button>
        <button className="btn-add approve">Approved</button>
      </div>
    </div>
  );
};

export default ApprovalDetail;
