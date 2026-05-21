import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, FileText, Printer, CheckCircle, AlertTriangle, X, Download, CreditCard, Copy } from 'lucide-react';
import './LoanDetails.css';

const LoanDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [selectedReceipt, setSelectedReceipt] = useState(null);
  const [showPaymentInvoice, setShowPaymentInvoice] = useState(false);

  let status = 'Active';
  if (id === '20240101') status = 'Completed';
  if (id === '20250999') status = 'Pending';
  if (id === '20250888') status = 'Rejected';

  const getStatusColor = (s) => {
    switch (s.toLowerCase()) {
      case 'active': return 'status-active';
      case 'completed': return 'status-completed';
      case 'pending': return 'status-pending';
      case 'rejected': return 'status-rejected';
      default: return '';
    }
  };

  const schedule = [
    { no: 1, date: '25 Jan 2026', amount: 'Rp 1.000.000', total: 'Rp 1.150.000', stat: 'Paid' },
    { no: 2, date: '25 Feb 2026', amount: 'Rp 1.000.000', total: 'Rp 1.150.000', stat: 'Paid' },
    { no: 3, date: '25 Mar 2026', amount: 'Rp 1.000.000', total: 'Rp 1.150.000', stat: 'Paid' },
    { no: 4, date: '25 Apr 2026', amount: 'Rp 1.000.000', total: 'Rp 1.150.000', stat: 'Due Soon' },
    { no: 5, date: '25 May 2026', amount: 'Rp 1.000.000', total: 'Rp 1.150.000', stat: 'Scheduled' },
  ];

  const getBadgeClass = (s) => {
    if (s === 'Paid') return 'bdg-paid';
    if (s === 'Due Soon') return 'bdg-due';
    if (s === 'Scheduled') return 'bdg-sched';
    return '';
  };

  const isPendingOrRejected = status === 'Pending' || status === 'Rejected';

  return (
    <div className="ld-page">
      <div className="ld-header">
        <div className="ld-header-left">
          <button className="ld-back-btn" onClick={() => navigate(-1)}>
            <ArrowLeft size={16} /> Back
          </button>
          <h1>Loan Details</h1>
          <div className={`ld-status-pill ${getStatusColor(status)}`}>
            <span className="dot"></span> {status}
          </div>
        </div>
      </div>

      <div className="ld-sub-header">
        <span className="ld-date">Start on December 15, 2025 at 15:00</span>
        <div className="ld-actions">
          <button className="ld-btn-outline"><FileText size={16} /> View Loan Agreement</button>
          <button className="ld-btn-outline"><Printer size={16} /> Print Summary</button>
        </div>
      </div>

      {status === 'Rejected' && (
        <div className="ld-rejection-note">
          <AlertTriangle size={20} className="r-icon" />
          <div className="r-text">
            <h4>Application Rejected by Administrator</h4>
            <p>Your requested amount exceeds the allowed limit based on your current salary and total cooperative savings. Please review your available limit in the application page and re-apply.</p>
          </div>
        </div>
      )}

      <div className="ld-details-card">
        <h3>{isPendingOrRejected ? 'Application Information' : 'Loan Details'}</h3>
        
        {isPendingOrRejected ? (
          <div className="ld-grid ld-grid-2">
            <div className="ld-g-col">
              <span className="lbl">TYPE OF INSTALLMENT</span>
              <span className="val">Pinjaman Tunai</span>
            </div>
            <div className="ld-g-col">
              <span className="lbl">REQUESTED AMOUNT</span>
              <span className="val">Rp 15.000.000</span>
            </div>
            <div className="ld-g-col">
              <span className="lbl">PURPOSE</span>
              <span className="val">Beli Motor Baru</span>
            </div>
            <div className="ld-g-col">
              <span className="lbl">DURATION</span>
              <span className="val">15 Months</span>
            </div>
          </div>
        ) : (
          <div className={`ld-grid ${status === 'Completed' ? 'ld-grid-2' : ''}`}>
            <div className="ld-g-col">
              <span className="lbl">TOTAL BORROWED</span>
              <span className="val">Rp 10.000.000</span>
            </div>
            <div className="ld-g-col">
              <span className="lbl">REMAINING</span>
              <span className="val">{status === 'Completed' ? 'Rp 0' : 'Rp 9.000.000'}</span>
            </div>
            
            {status === 'Active' && (
              <div className="ld-g-col ld-next-deduction">
                <span className="lbl">NEXT DEDUCTION</span>
                <span className="val-large">Rp 1.005.000</span>
                <span className="sub">Due 25 Oct 2026</span>
                <button className="btn-pay-now" onClick={() => setShowPaymentInvoice(true)}>PAY NOW</button>
              </div>
            )}

            <div className="ld-g-col">
              <span className="lbl">PURPOSE</span>
              <span className="val">Home Renovation</span>
            </div>
            <div className="ld-g-col">
              <span className="lbl">BUNGA (FLAT)</span>
              <span className="val">0.5% / 50.000</span>
            </div>
          </div>
        )}
      </div>

      {!isPendingOrRejected && (
        <div className="ld-progress-section">
          <div className="prog-header">
            <h3>Repayment Progress</h3>
            <span className="pct">{status === 'Completed' ? '100%' : '50%'}</span>
          </div>
          <div className="prog-bar">
            <div className="prog-fill" style={{width: status === 'Completed' ? '100%' : '50%'}}></div>
          </div>
          <div className="prog-footer">
            {status === 'Completed' ? '10 of 10 Installments Paid' : '5 of 10 Installments Paid'}
          </div>
        </div>
      )}

      {status !== 'Rejected' && (
        <div className="ld-schedule">
          <h3>Repayment Schedule <span style={{fontSize: 12, fontWeight: 'normal', color: '#94A3B8', marginLeft: 8}}>(Double click a paid row for receipt)</span></h3>
          <div className="ld-table-wrap">
            <table className="ld-table">
              <thead>
                <tr>
                  <th>INSTALLMENT</th>
                  <th>DUE DATE</th>
                  <th>AMOUNT</th>
                  <th>TOTAL PAYMENT</th>
                  <th>STATUS</th>
                </tr>
              </thead>
              <tbody>
                {status === 'Pending' ? (
                  <tr>
                    <td colSpan="5" className="ld-empty-row">Schedule will be generated upon approval.</td>
                  </tr>
                ) : (
                  schedule.map(s => {
                    const isPaid = status === 'Completed' || s.stat === 'Paid';
                    return (
                    <tr 
                      key={s.no}
                      onDoubleClick={() => {
                        if (isPaid) setSelectedReceipt(s);
                      }}
                      className={isPaid ? 'row-clickable' : ''}
                    >
                      <td>#{s.no}</td>
                      <td>{s.date}</td>
                      <td>{s.amount}</td>
                      <td>{s.total}</td>
                      <td>
                        <span className={`ld-badge ${status === 'Completed' ? 'bdg-paid' : getBadgeClass(s.stat)}`}>
                          {isPaid && <span className="dot" style={{backgroundColor: '#059669'}}></span>}
                          {(!isPaid && s.stat === 'Due Soon') && <span className="dot" style={{backgroundColor: '#D97706'}}></span>}
                          {status === 'Completed' ? 'Paid' : s.stat}
                        </span>
                      </td>
                    </tr>
                  )}
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Transaction Receipt Modal */}
      {selectedReceipt && createPortal(
        <div className="ld-modal-overlay" onClick={() => setSelectedReceipt(null)}>
          <div className="ld-modal" onClick={(e) => e.stopPropagation()}>
            <button className="ld-modal-close" onClick={() => setSelectedReceipt(null)}>
              <X size={18} />
            </button>
            <div className="ld-receipt-icon">
              <CheckCircle size={24} />
            </div>
            <h2>Transaction Receipt</h2>
            <div className="ld-receipt-status">SUCCESS</div>
            
            <div className="ld-receipt-details">
              <div className="ld-r-row">
                <span className="lbl">CATEGORY</span>
                <span className="val badge-outline">Loan Installment</span>
              </div>
              <div className="ld-r-row">
                <span className="lbl">DATE & TIME</span>
                <span className="val right-align">
                  <strong>{selectedReceipt.date}</strong><br/>
                  <span className="sub">09:06 AM</span>
                </span>
              </div>
              <div className="ld-r-box">
                <span className="lbl">TRANSACTION ID</span>
                <div className="val id-box">
                  92836-38439
                  <Copy size={14} className="copy-icon" />
                </div>
              </div>
              <div className="ld-r-row recipient">
                <span className="lbl">RECIPIENT</span>
                <span className="val flex-align">
                  <span className="ks-logo-sm">KS</span> Koperasi Sanoh
                </span>
              </div>
            </div>

            <div className="ld-receipt-total">
              <span className="lbl">TOTAL AMOUNT</span>
              <span className="val">{selectedReceipt.total}</span>
            </div>

            <div className="ld-modal-actions">
              <button className="btn-modal-outline" onClick={() => setSelectedReceipt(null)}>Close</button>
              <button className="btn-modal-primary">Download PDF</button>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* Payment Midtrans Invoice Modal */}
      {showPaymentInvoice && createPortal(
        <div className="ld-modal-overlay" onClick={() => setShowPaymentInvoice(false)}>
          <div className="ld-modal invoice-modal" onClick={(e) => e.stopPropagation()}>
            <button className="ld-modal-close" onClick={() => setShowPaymentInvoice(false)}>
              <X size={18} />
            </button>
            
            <div className="midtrans-header">
              <div className="m-icon"><CreditCard size={24} /></div>
              <div>
                <h3>Payment Details</h3>
                <p>Powered by Midtrans</p>
              </div>
            </div>

            <div className="m-invoice-body">
              <div className="m-inv-row">
                <span className="lbl">Order ID</span>
                <span className="val">INV-KS-992831</span>
              </div>
              <div className="m-inv-row">
                <span className="lbl">Item</span>
                <span className="val">Loan Installment Payment</span>
              </div>
              <div className="m-inv-row amount">
                <span className="lbl">Amount to Pay</span>
                <span className="val">Rp 1.005.000</span>
              </div>

              <div className="m-payment-options">
                <label>Select Payment Method:</label>
                <select className="m-select" defaultValue="bca">
                  <option value="bca">BCA Virtual Account</option>
                  <option value="mandiri">Mandiri Bill Payment</option>
                  <option value="gopay">GoPay</option>
                  <option value="qris">QRIS</option>
                </select>
              </div>
            </div>

            <div className="ld-modal-actions">
              <button className="btn-modal-outline" onClick={() => setShowPaymentInvoice(false)}>Cancel</button>
              <button className="btn-modal-blue" onClick={() => {
                alert('Redirecting to Midtrans Payment Gateway...');
                setShowPaymentInvoice(false);
              }}>Pay Now</button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default LoanDetails;
