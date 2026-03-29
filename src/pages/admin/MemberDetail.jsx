import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Pen, Handshake } from 'lucide-react';
import './MemberDetail.css';

const MemberDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="md-container">
      <h1 className="md-title">Detail Member</h1>

      <div className="md-banner">
        <div className="md-banner-top">
          <div className="md-banner-logo">
            <div className="icon"><Handshake size={20} /></div>
            Koperasi Sanoh Sinergi Bersama
          </div>
          <div className="md-banner-badge">ACTIVE</div>
        </div>
        <div className="md-user-info">
          <div>
            <h2>Rafilla Shalwa</h2>
            <p>123-32747</p>
          </div>
          <div className="account-number">12.345.678.9-6636.000</div>
        </div>
      </div>

      <div className="md-content">
        <div className="md-form-column">
          <div className="md-form-group">
            <label className="lbl">Full Name</label>
            <input type="text" className="md-input" value="Rafilla Shalwa" disabled />
          </div>
          
          <div className="md-form-group">
            <label className="lbl">Phone Number</label>
            <input type="text" className="md-input" value="0821321728319" disabled />
          </div>

          <div className="md-form-group">
            <label className="lbl">Email</label>
            <input type="email" className="md-input" value="rafillashalwa@gmail.com" disabled />
          </div>

          <div className="md-form-group">
            <label className="lbl">Address</label>
            <textarea className="md-input" rows={4} disabled value="Jl. Cimandiri 7 Blok W2 No.21" />
          </div>

          <div className="md-form-group">
            <label className="lbl">Department</label>
            <input type="text" className="md-input" value="Engineering" disabled />
          </div>

          <div className="md-form-group">
            <label className="lbl">Gender</label>
            <input type="text" className="md-input" value="Female" disabled />
          </div>

          <div className="md-form-group">
            <label className="lbl">Employee Status</label>
            <input type="text" className="md-input" value="Contract" disabled />
          </div>

          <div className="md-form-group">
            <label className="lbl">Total Current Loan</label>
            <div className="md-input-group">
              <span className="md-input-prefix">Rp</span>
              <input type="text" className="md-input" value="100.000,00" disabled />
            </div>
          </div>

          <div className="md-form-group">
            <label className="lbl">Current SHU</label>
            <div className="md-input-group">
              <span className="md-input-prefix">Rp</span>
              <input type="text" className="md-input" value="100.000,00" disabled />
            </div>
          </div>
        </div>

        <div className="md-form-column">
          <div className="md-form-group">
            <label className="lbl">Destination Bank Account</label>
            <select className="md-input" disabled defaultValue="mandiri">
              <option value="mandiri">BANK MANDIRI</option>
            </select>
          </div>

          <div className="md-form-group">
            <label className="lbl">Account Name</label>
            <input type="text" className="md-input" value="RAFILLA SHALWA" disabled />
          </div>

          <div className="md-form-group">
            <label className="lbl">Account Number</label>
            <input type="text" className="md-input" value="00120251304" disabled />
          </div>

          <div className="md-form-group" style={{marginTop: 16}}>
            <label className="lbl">Voluntary Saving</label>
            <div className="md-input-group">
              <span className="md-input-prefix">Rp</span>
              <input type="text" className="md-input" value="100.000,00" disabled />
            </div>
          </div>

          <div className="md-form-group">
            <label className="lbl">Total Voluntary Saving</label>
            <div className="md-input-group">
              <span className="md-input-prefix">Rp</span>
              <input type="text" className="md-input" value="100.000,00" disabled />
            </div>
          </div>

          <div className="md-form-group">
            <label className="lbl">Total Mandatory Saving</label>
            <div className="md-input-group">
              <span className="md-input-prefix">Rp</span>
              <input type="text" className="md-input" value="100.000,00" disabled />
            </div>
          </div>

          <div className="md-form-group">
            <label className="lbl">Registration Date</label>
            <input type="text" className="md-input" value="13 November 2025" disabled />
          </div>

          <div className="md-form-group">
            <label className="lbl">KTP</label>
            <a href="#" className="md-file-link">KTP.pdf</a>
          </div>

          <div className="md-form-group">
            <label className="lbl">Salary Income</label>
            <div className="md-input-group" style={{background: 'transparent', border: '1px solid #CBD5E1'}}>
              <span className="md-input-prefix">Rp</span>
              <input type="text" className="md-input" value="5.000.000,00" disabled />
            </div>
          </div>

          <div className="md-form-group">
            <label className="lbl">NIK Employee</label>
            <input type="text" className="md-input" value="1123" disabled style={{background: 'transparent', border: '1px solid #CBD5E1'}} />
          </div>
        </div>

        <div className="md-actions">
          <button className="btn-md" onClick={() => navigate(-1)}>Back</button>
          <button className="btn-md edit">
            <Pen size={14} /> Edit Profile
          </button>
          <button className="btn-md">Save</button>
        </div>
      </div>
    </div>
  );
};

export default MemberDetail;
