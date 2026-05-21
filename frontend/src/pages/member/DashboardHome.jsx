import React, { useState, useRef, useEffect } from 'react';
import {
  Wallet, PiggyBank, Briefcase, CreditCard,
  Download, Copy, HandCoins, ArrowUpRight, TrendingUp,
} from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale, LinearScale, PointElement,
  LineElement, Title, Tooltip, Filler, Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import './DashboardHome.css';

ChartJS.register(
  CategoryScale, LinearScale, PointElement,
  LineElement, Title, Tooltip, Filler, Legend,
);

/* ─── DATA ─────────────────────────────────────────────────────────────────── */
const dummyTransactions = [
  { id: '9283-3844', date: 'Oct 20, 2023', time: '09:06 AM', type: 'Voluntary Saving Payment', amount: 'Rp 50.000,00', status: 'Success', recipient: 'Koperasi Sanoh' },
  { id: '9283-3843', date: 'Oct 15, 2023', time: '14:20 PM', type: 'Mandatory Saving Payment', amount: 'Rp 100.000,00', status: 'Success', recipient: 'Koperasi Sanoh' },
  { id: '9283-3842', date: 'Oct 01, 2023', time: '08:15 AM', type: 'Principal Saving Payment', amount: 'Rp 100.000,00', status: 'Success', recipient: 'Koperasi Sanoh' },
  { id: '9283-3841', date: 'Sep 25, 2023', time: '11:45 AM', type: 'Loan Installment', amount: 'Rp 300.000,00', status: 'Pending', recipient: 'Koperasi Sanoh' },
  { id: '9283-3840', date: 'Sep 20, 2023', time: '09:00 AM', type: 'Voluntary Saving Payment', amount: 'Rp 50.000,00', status: 'Success', recipient: 'Koperasi Sanoh' },
];

const dummyChartDataMap = {
  '1M': { labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'], data: [120000, 118000, 125000, 130000], grow: '4.2%', total: 'Rp 125.000' },
  '3M': { labels: ['Feb', 'Mar', 'Apr'], data: [85000, 110000, 130000], grow: '12.5%', total: 'Rp 115.000' },
  'YTD': { labels: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'], data: [35000, 32000, 40000, 85000, 110000, 130000], grow: '16.4%', total: 'Rp 130.000' },
  '1Y': { labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'], data: [15000, 18000, 17000, 22000, 25000, 30000, 35000, 32000, 40000, 85000, 110000, 130000], grow: '24.8%', total: 'Rp 102.000' },
  '3Y': { labels: ['2021', '2022', '2023'], data: [450000, 680000, 950000], grow: '45.2%', total: 'Rp 650.000' },
  '5Y': { labels: ['2019', '2020', '2021', '2022', '2023'], data: [200000, 310000, 450000, 680000, 950000], grow: '110.5%', total: 'Rp 450.000' },
};

const PERIODS = ['1M', '3M', 'YTD', '1Y', '3Y', '5Y'];

/* ─── CHART OPTIONS ─────────────────────────────────────────────────────────── */
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      mode: 'index',
      intersect: false,
      backgroundColor: 'rgba(10,22,40,0.92)',
      titleColor: 'rgba(255,255,255,0.5)',
      bodyColor: '#FFFFFF',
      padding: 10,
      cornerRadius: 8,
      displayColors: false,
      callbacks: {
        label: (ctx) => 'Rp ' + ctx.parsed.y.toLocaleString('id-ID'),
      },
    },
  },
  scales: {
    y: { display: false },
    x: {
      grid: { display: false, drawBorder: false },
      ticks: {
        color: '#7A90B0',
        font: { size: 10, family: "'DM Sans', sans-serif" },
      },
      border: { display: false },
    },
  },
  elements: {
    line: { tension: 0.42 },
    point: { radius: 0, hitRadius: 12, hoverRadius: 4, hoverBorderWidth: 2, hoverBorderColor: '#fff', hoverBackgroundColor: '#2D6BE4' },
  },
  interaction: { mode: 'nearest', axis: 'x', intersect: false },
};

/* ─── COMPONENT ─────────────────────────────────────────────────────────────── */
const DashboardHome = () => {
  const [selectedTx, setSelectedTx] = useState(null);
  const [shuFilter, setShuFilter] = useState('YTD');
  const chartRef = useRef(null);

  const activeChart = dummyChartDataMap[shuFilter];

  /* Build gradient fill dynamically */
  const getGradient = (chart) => {
    const { ctx, chartArea } = chart;
    if (!chartArea) return 'rgba(45,107,228,0.1)';
    const g = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
    g.addColorStop(0, 'rgba(45,107,228,0.18)');
    g.addColorStop(1, 'rgba(45,107,228,0)');
    return g;
  };

  const chartData = {
    labels: activeChart.labels,
    datasets: [{
      fill: true,
      label: 'SHU Value',
      data: activeChart.data,
      borderColor: '#2D6BE4',
      borderWidth: 2.5,
      backgroundColor: (context) => {
        const chart = context.chart;
        return getGradient(chart);
      },
    }],
  };

  /* Close modal on ESC */
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setSelectedTx(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="dash-home">

      {/* ── Page Header ────────────────────────────────────── */}
      <div className="dh-page-header">
        <div>
          <h1>Welcome Back, Riska!</h1>
          <p>Here is your financial overview for this period.</p>
        </div>
        <button className="dh-report-btn hidden-mobile">
          <Download size={14} />
          Report Overview
        </button>
      </div>

      {/* ── Stat Cards ─────────────────────────────────────── */}
      <div className="dash-grid-4">

        {/* Principal Savings */}
        <div className="premium-card group stat-card-blue stat-rise-1">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '18px' }}>
            <div className="icon-wrapper blue-gradient">
              <Briefcase size={20} />
            </div>
            <span className="badge-soft-green">
              <ArrowUpRight size={11} /> 2.5%
            </span>
          </div>
          <p className="summary-label">Principal Savings</p>
          <h3 className="summary-value">Rp 100.000</h3>
        </div>

        {/* Voluntary Savings */}
        <div className="premium-card group stat-card-green stat-rise-2">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '18px' }}>
            <div className="icon-wrapper green-gradient">
              <PiggyBank size={20} />
            </div>
            <span className="badge-soft-green">
              <ArrowUpRight size={11} /> 12.0%
            </span>
          </div>
          <p className="summary-label">Voluntary Savings</p>
          <h3 className="summary-value">Rp 500.000</h3>
        </div>

        {/* Mandatory Savings */}
        <div className="premium-card group stat-card-teal stat-rise-3">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '18px' }}>
            <div className="icon-wrapper teal-gradient">
              <Wallet size={20} />
            </div>
            <span className="badge-soft-green">
              <ArrowUpRight size={11} /> 5.0%
            </span>
          </div>
          <p className="summary-label">Mandatory Savings</p>
          <h3 className="summary-value">Rp 500.000</h3>
        </div>

        {/* Outstanding Payment */}
        <div className="premium-card group stat-card-rose stat-rise-4">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '18px' }}>
            <div className="icon-wrapper red-gradient">
              <CreditCard size={20} />
            </div>
            <span className="badge-soft-gray">Upcoming</span>
          </div>
          <p className="summary-label">Outstanding Payment</p>
          <h3 className="summary-value" style={{ color: '#E11D48' }}>Rp 200.000</h3>
        </div>

      </div>

      {/* ── Analytics & Loan ───────────────────────────────── */}
      <div className="dash-grid-2">

        {/* SHU Analytics */}
        <div className="premium-card" style={{ display: 'flex', flexDirection: 'column' }}>

          <div className="chart-header">
            <div className="chart-title-group">
              <div className="chart-icon-box">
                <TrendingUp size={18} />
              </div>
              <div>
                <p className="chart-title">SHU Analytics</p>
                <p className="chart-subtitle">Estimated annual return</p>
              </div>
            </div>
            {/* Period Tabs */}
            <div className="period-tab-group">
              {PERIODS.map((p) => (
                <button
                  key={p}
                  className={`period-tab-btn${shuFilter === p ? ' active' : ''}`}
                  onClick={() => setShuFilter(p)}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <div className="chart-canvas-wrap">
            <Line ref={chartRef} data={chartData} options={chartOptions} />
          </div>

          <div className="chart-metrics-row">
            <div className="chart-metric">
              <p className="metric-label-small">Grow (Selected Range)</p>
              <h4 className="metric-value-big green">
                <ArrowUpRight size={14} style={{ display: 'inline', marginRight: 2, verticalAlign: 'middle' }} />
                {activeChart.grow}
              </h4>
            </div>
            <div className="chart-metric">
              <p className="metric-label-small">Previous Total</p>
              <h4 className="metric-value-big dark">{activeChart.total}</h4>
            </div>
          </div>
        </div>

        {/* Loan Balance */}
        <div className="premium-card" style={{ display: 'flex', flexDirection: 'column' }}>

          <div>
            <p className="loan-balance-label">Active Loan Balance</p>
            <h2 className="loan-amount-big">
              Rp 14.000<span className="amount-cents">.000</span>
            </h2>
            <p className="loan-subtitle">
              From total approved loan of <strong>Rp 25.000.000</strong>
            </p>
          </div>

          <div className="loan-donut-row">
            {/* Donut Chart — SVG CSS approach */}
            {/* r=46 → C = 2π×46 ≈ 289.03  |  70% paid → dashoffset = 289.03 × 0.30 ≈ 86.71 */}
            <div className="donut-container">
              <svg className="donut-svg-el" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="46" fill="none" stroke="#EEF2F9" strokeWidth="8" />
                <circle
                  cx="50" cy="50" r="46" fill="none"
                  stroke="#F59E0B" strokeWidth="8"
                  strokeDasharray="289.03"
                  strokeDashoffset="86.71"
                  strokeLinecap="round"
                />
              </svg>
              <div className="donut-center-text">
                <span className="donut-pct">70%</span>
                <span className="donut-pct-lbl">Paid</span>
              </div>
            </div>

            <div className="loan-install-info">
              <h4>8 of 24 Installments</h4>
              <p>Keep up the good payment history to increase your next loan limit.</p>
            </div>
          </div>

          <div className="loan-footer-row">
            <div>
              <p className="due-chip-label">Next Payment Due</p>
              <p className="due-chip-val">Dec 21, 2025</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p className="due-chip-label">Amount Due</p>
              <p className="due-chip-val danger">Rp 300.000,00</p>
            </div>
          </div>
        </div>

      </div>

      {/* ── Transaction History ─────────────────────────────── */}
      <div className="premium-card" style={{ padding: 0, marginTop: '18px', overflow: 'hidden' }}>

        <div className="tx-card-header">
          <h3>Recent Transactions</h3>
        </div>

        {/* Filters */}
        <div className="tx-filters-strip">
          <span className="filter-strip-label">Trans. Type</span>
          <select
            id="transaction-type-filter"
            name="transactionType"
            className="filter-pill-select"
          >
            <option value="all">All Types</option>
            <option value="vol">Voluntary Saving</option>
            <option value="man">Mandatory Saving</option>
            <option value="pri">Principal Saving</option>
            <option value="loan">Loan Installment</option>
            <option value="with">Withdrawals</option>
          </select>

          <span className="filter-strip-label">Date</span>
          <input type="date" className="filter-pill-date" />
          <span className="filter-sep">—</span>
          <input type="date" className="filter-pill-date" />

          <div className="filter-actions-group">
            <button className="btn-filter-clear">Clear</button>
            <button className="btn-filter-search">Search</button>
          </div>
        </div>

        {/* Table */}
        <div className="tx-table-outer">
          <table className="table-excel">
            <thead>
              <tr>
                <th style={{ width: '25%' }}>Date &amp; Time</th>
                <th style={{ width: '35%' }}>Transaction Type</th>
                <th style={{ width: '20%' }}>Amount</th>
                <th style={{ width: '20%', textAlign: 'center' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {dummyTransactions.map((tx, idx) => (
                <tr key={idx} onDoubleClick={() => setSelectedTx(tx)}>
                  <td>
                    <span className="tx-date-primary">{tx.date}</span>
                    <span className="tx-date-secondary">{tx.time}</span>
                  </td>
                  <td>
                    <span className="tx-type-cell">{tx.type}</span>
                  </td>
                  <td>
                    <span className="tx-amount-cell">{tx.amount}</span>
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    {tx.status === 'Success' ? (
                      <span className="status-pill status-pill-success">Success</span>
                    ) : (
                      <span className="status-pill status-pill-pending">Pending</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="tx-pagination-row">
          <span className="pg-count-label">Showing 1 to 5 of 24 entries</span>
          <div className="pg-btn-group">
            <button className="page-nav-btn" disabled>Prev</button>
            <button className="page-nav-btn active">1</button>
            <button className="page-nav-btn">2</button>
            <button className="page-nav-btn">3</button>
            <button className="page-nav-btn">Next</button>
          </div>
        </div>
      </div>

      {/* ── Transaction Modal ───────────────────────────────── */}
      {selectedTx && (
        <div className="tx-modal-overlay" onClick={() => setSelectedTx(null)}>
          <div className="tx-modal-card" onClick={(e) => e.stopPropagation()}>

            <button
              className="btn-modal-close"
              onClick={() => setSelectedTx(null)}
              aria-label="Close"
            >✕</button>

            {/* Header */}
            <div className="modal-icon-ring">
              <HandCoins size={30} color="#059669" />
            </div>
            <div className="modal-header-text">
              <h3>Transaction Receipt</h3>
              <span className={`modal-status-tag ${selectedTx.status === 'Success' ? 'success' : 'pending'}`}>
                {selectedTx.status}
              </span>
            </div>

            <hr className="modal-divider" />

            {/* Rows */}
            <div className="modal-rows">
              <div className="modal-row">
                <span className="modal-row-key">Category</span>
                <span className="modal-row-val tag">{selectedTx.type}</span>
              </div>

              <div className="modal-row">
                <span className="modal-row-key">Date &amp; Time</span>
                <div className="modal-row-val">
                  {selectedTx.date}
                  <small>{selectedTx.time}</small>
                </div>
              </div>

              <div className="modal-id-block">
                <div>
                  <span className="modal-row-key">Transaction ID</span>
                  <span className="modal-id-code">{selectedTx.id}</span>
                </div>
                <button className="modal-copy-btn" title="Copy to clipboard">
                  <Copy size={14} />
                </button>
              </div>

              <div className="modal-row">
                <span className="modal-row-key">Recipient</span>
                <div className="modal-recipient-chip">
                  <div className="recipient-avatar">KS</div>
                  <span className="modal-row-val">{selectedTx.recipient}</span>
                </div>
              </div>
            </div>

            <hr className="modal-dashed-divider" />

            <div className="modal-total-row">
              <span className="modal-total-label">Total Amount</span>
              <span className="modal-total-amount">{selectedTx.amount}</span>
            </div>

            <div className="modal-actions">
              <button className="btn-modal-ghost" onClick={() => setSelectedTx(null)}>
                Close
              </button>
              <button className="btn-modal-primary">
                <Download size={15} /> Download PDF
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default DashboardHome;