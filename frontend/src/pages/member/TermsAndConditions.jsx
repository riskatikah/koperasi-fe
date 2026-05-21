import React from 'react';
import { DownloadCloud, FileText } from 'lucide-react';
import './TermsAndConditions.css';

const TermsAndConditions = () => {
  return (
    <div className="tc-page">
      {/* HEADER */}
      <div className="tc-header">
        <div className="tc-header-left">
          <h1>Terms and Conditions</h1>
          <p>Everything you need to know about your koperasi membership</p>
        </div>
        <div className="tc-header-actions">
          <button className="btn-download">
            <DownloadCloud size={17} />
            Download TnC
          </button>
        </div>
      </div>

      {/* DOCUMENT VIEWER */}
      <div className="tc-document-viewer">
        <div className="tc-document-viewer-content">
          <FileText size={56} className="tc-doc-icon" strokeWidth={1.5} />
          <h3>Terms & Conditions document viewer</h3>
          <p>PDF will be embedded here</p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;