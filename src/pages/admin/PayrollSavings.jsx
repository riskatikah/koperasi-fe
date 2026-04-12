import React, { useState, useMemo } from 'react';
import { Search, ChevronRight, Upload, CheckCircle, Calendar, ShoppingBag, ArrowUp } from 'lucide-react';
import './PayrollSummary.css';

const PayrollSavings = () => {
  const [reportingMonth, setReportingMonth] = useState('2026-10');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterDept, setFilterDept] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedIds, setSelectedIds] = useState([]);

  const [data, setData] = useState([
    { id: 1, name: 'Rafilla Shalwa', nik: '00012782', department: 'Engineering', pokok: '-', wajib: 'Rp 1.000.000', sukarela: 'Rp 2.500.000', bulat: 'Rp 500.000', total: 'Rp 4.200.000', isPaid: false },
    { id: 2, name: 'Siti Rahma', nik: '00012783', department: 'Engineering', pokok: 'Rp 200.000', wajib: 'Rp 1.000.000', sukarela: 'Rp 2.500.000', bulat: 'Rp 500.000', total: 'Rp 4.200.000', isPaid: false },
    { id: 3, name: 'Budi Santoso', nik: '00012784', department: 'HRD & GA', pokok: '-', wajib: 'Rp 1.000.000', sukarela: 'Rp 2.500.000', bulat: 'Rp 500.000', total: 'Rp 4.200.000', isPaid: false },
    { id: 4, name: 'Andi Pratama', nik: '00012785', department: 'HRD & GA', pokok: '-', wajib: 'Rp 1.000.000', sukarela: 'Rp 2.500.000', bulat: 'Rp 500.000', total: 'Rp 4.200.000', isPaid: false },
    { id: 5, name: 'Chandra Wijaya', nik: '00012786', department: 'Engineering', pokok: 'Rp 200.000', wajib: 'Rp 1.000.000', sukarela: 'Rp 2.500.000', bulat: 'Rp 500.000', total: 'Rp 4.200.000', isPaid: false },
  ]);

  const filteredData = useMemo(() => {
    return data.filter(item => {
      const matchSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.nik.includes(searchQuery);
      let matchDept = true;
      if (filterDept === 'engineering') matchDept = item.department === 'Engineering';
      if (filterDept === 'hrd') matchDept = item.department === 'HRD & GA';
      
      let matchStatus = true;
      if (filterStatus === 'paid') matchStatus = item.isPaid === true;
      if (filterStatus === 'unpaid') matchStatus = item.isPaid === false;

      return matchSearch && matchDept && matchStatus;
    });
  }, [data, searchQuery, filterDept, filterStatus]);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedIds(filteredData.map(item => item.id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleSelectOne = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(itemId => itemId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const handleConfirm = () => {
    if (selectedIds.length === 0) {
      alert('Tolong centang data terlebih dahulu untuk dikonfirmasi.');
      return;
    }
    
    setData(prevData => prevData.map(item => {
      if (selectedIds.includes(item.id)) {
        return { ...item, isPaid: true };
      }
      return item;
    }));
    
    setSelectedIds([]); // Clear selection after confirm
  };

  const handleExportExcel = () => {
    if (selectedIds.length === 0) {
      alert('Tolong centang data terlebih dahulu untuk diexport.');
      return;
    }
    const exportData = data.filter(item => selectedIds.includes(item.id));
    
    const headers = ['Anggota', 'NIK', 'Department', 'Simp Pokok', 'Simp Wajib', 'Simp Sukarela', 'Pembulatan', 'Total', 'Status'];
    const csvContent = "data:text/csv;charset=utf-8," 
        + headers.join(',') + "\n"
        + exportData.map(e => `"${e.name}",="${e.nik}","${e.department}","${e.pokok}","${e.wajib}","${e.sukarela}","${e.bulat}","${e.total}","${e.isPaid ? 'Paid' : 'Unpaid'}"`).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `payroll_savings_${reportingMonth}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const totalItems = data.length;
  const confirmedItems = data.filter(d => d.isPaid).length;
  const allConfirmed = confirmedItems === totalItems && totalItems !== 0;
  
  const statusList = [
    { name: 'Confirmation Progress', val: `${confirmedItems}/${totalItems}`, isGreen: allConfirmed },
    { name: 'Total Payroll Amount', val: 'Rp 84.000.000', isGreen: false }, 
    { name: 'Cycle Status', val: allConfirmed ? 'Ready to Close' : 'Review Required', isGreen: allConfirmed },
    { name: 'Verification Status', val: allConfirmed ? '100%' : '89%', isGreen: allConfirmed },
  ];

  // Helper to format reportingMonth for display (e.g. "2026-10" to "October 2026")
  const formattedPeriod = useMemo(() => {
    if (!reportingMonth) return '';
    const [year, month] = reportingMonth.split('-');
    const date = new Date(year, parseInt(month) - 1);
    return date.toLocaleString('en-US', { month: 'long', year: 'numeric' });
  }, [reportingMonth]);

  return (
    <div className="ps-container">
      <div className="ps-header">
        <div>
          <h1 className="ps-header-title">Payroll Deduction Summary</h1>
          <div className="ps-period">
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <Calendar size={18} style={{ position: 'absolute', left: 0, pointerEvents: 'none' }} />
              <input 
                type="month" 
                value={reportingMonth}
                onChange={(e) => setReportingMonth(e.target.value)}
                style={{
                  opacity: 0,
                  position: 'absolute',
                  left: 0,
                  width: '24px',
                  height: '24px',
                  cursor: 'pointer'
                }}
              />
            </div>
            <span style={{ marginLeft: 24 }}>Reporting Period: <strong>{formattedPeriod || 'Select Month'}</strong></span>
          </div>
        </div>
        <div className="ps-header-actions">
          <button className="ps-btn-export" onClick={handleExportExcel}>
            Export to Excel
            <Upload size={16} />
          </button>
          <button className="ps-btn-confirm" onClick={handleConfirm}>
            Confirm
            <CheckCircle size={16} />
          </button>
        </div>
      </div>

      {/* Stats Row */}
      <div className="ps-stats">
        {statusList.map((stat, i) => (
          <div className="ps-stat-card" key={i}>
            <div className="ps-stat-top">
              <span className="ps-stat-name">{stat.name}</span>
              <span className="ps-stat-dots">⋮</span>
            </div>
            <div className="ps-stat-val-row">
              <div className="ps-stat-icon">
                <ShoppingBag size={18} />
              </div>
              <strong className={stat.isGreen ? 'green-text' : ''}>
                {stat.val}
              </strong>
              <div className="ps-stat-arrow">
                <ArrowUp size={16} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Table Section */}
      <div className="ps-table-wrapper">
        <div className="ps-table-controls">
          <div className="ps-search">
            <Search size={18} />
            <input 
              type="text" 
              placeholder="Search by name, NIK, or Loan ID..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="ps-filters">
            <select className="ps-filter" value={filterDept} onChange={(e) => setFilterDept(e.target.value)}>
              <option value="all">All Departments</option>
              <option value="engineering">Engineering</option>
              <option value="hrd">HRD & GA</option>
            </select>
            <select className="ps-filter" value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
              <option value="all">All Status</option>
              <option value="paid">Paid</option>
              <option value="unpaid">Unpaid</option>
            </select>
          </div>
        </div>

        <div className="ps-table">
          <table>
            <thead>
              <tr>
                <th>
                  <input 
                    type="checkbox" 
                    className="ps-checkbox" 
                    checked={filteredData.length > 0 && selectedIds.length === filteredData.length}
                    onChange={handleSelectAll}
                  />
                </th>
                <th>Anggota</th>
                <th>Department</th>
                <th>Simp Pokok</th>
                <th>Simp Wajib</th>
                <th>Simp Sukarela</th>
                <th>Pembulatan</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? filteredData.map((row) => (
                <tr key={row.id}>
                  <td>
                    <input 
                      type="checkbox" 
                      className="ps-checkbox" 
                      checked={selectedIds.includes(row.id)} 
                      onChange={() => handleSelectOne(row.id)}
                    />
                  </td>
                  <td>
                    <strong>{row.name}</strong>
                    <span className="sub">{row.nik}</span>
                  </td>
                  <td>{row.department}</td>
                  <td>{row.pokok}</td>
                  <td>{row.wajib}</td>
                  <td>{row.sukarela}</td>
                  <td>{row.bulat}</td>
                  <td className="ps-amount">{row.total}</td>
                  <td className={row.isPaid ? "ps-status paid" : "ps-status unpaid"}>
                    {row.isPaid ? 'Paid' : 'Unpaid'}
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="9" style={{ textAlign: 'center', padding: '24px' }}>No records found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */ }
        <div className="ps-pagination">
          <button className="ps-page-btn active">1</button>
          <button className="ps-page-btn next">NEXT <ChevronRight size={14} /></button>
        </div>
      </div>
    </div>
  );
};

export default PayrollSavings;
