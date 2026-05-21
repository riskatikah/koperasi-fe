import React, { useState } from 'react';
import { Search, ChevronDown, FileText, Plus, Upload } from 'lucide-react';
import './DocumentArchives.css';

const DocumentArchives = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const documents = Array(5).fill({
    name: 'Loan_Agreement.pdf',
    size: '800 KB - PDF Document',
    category: 'Loan',
    date: 'Oct 23, 2025'
  });

  return (
    <div className="da-container">
      <div className="da-header">
        <div>
          <h1 className="da-title">Document Archives</h1>
          <p className="da-subtitle">Overview your document</p>
        </div>
        <button className="da-btn-upload" onClick={() => setIsModalOpen(true)}>
          <Plus size={16} />
          Upload New Document
        </button>
      </div>

      <div className="da-content">
        <div className="da-controls">
          <div className="da-search">
            <Search size={16} color="#94A3B8" />
            {/* <span style={{ fontSize: '14px', color: '#1E293B', fontWeight: '700', marginRight: '8px' }}>Upload Document <span style={{ fontSize: '10px', color: '#94A3B8', fontWeight: '400' }}>(max 100kb)</span></span> */}
            <input type="text" placeholder="Search by title, ID, or content..." style={{ flex: 1 }} />
          </div>
          <div className="da-dropdown">
            <span>All Types</span>
            <ChevronDown size={14} color="#64748B" />
          </div>
        </div>

        <table className="da-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Date Uploaded</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((doc, index) => (
              <tr key={index}>
                <td>
                  <div className="da-doc-name">
                    <div className="da-doc-icon">
                      <FileText fill="#334155" color="#fff" size={24} />
                    </div>
                    <div>
                      <strong>{doc.name}</strong>
                      <span className="da-doc-meta">{doc.size}</span>
                    </div>
                  </div>
                </td>
                <td className="da-cell-category">{doc.category}</td>
                <td className="da-cell-date">{doc.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="da-modal-overlay">
          <div className="da-modal">
            <h2 className="da-modal-title">Upload Document</h2>

            <div className="da-modal-body">
              <div className="da-upload-box">
                <span style={{ color: 'transparent' }}>Choose File</span>
                <Upload size={18} color="#000" />
              </div>

              <div className="da-form-group">
                <label>Title</label>
                <input type="text" className="da-input" />
              </div>

              <div className="da-form-group">
                <label>Description</label>
                <textarea className="da-textarea"></textarea>
              </div>

              <div className="da-form-group">
                <label>Category</label>
                <div className="da-select-box">
                  <span style={{ color: 'transparent' }}>Select</span>
                </div>
              </div>
            </div>

            <div className="da-modal-actions">
              <button className="da-btn-back" onClick={() => setIsModalOpen(false)}>Back</button>
              <button className="da-btn-save">Upload</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentArchives;
