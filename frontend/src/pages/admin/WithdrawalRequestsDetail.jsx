import { useParams, NavLink, useNavigate } from "react-router-dom";
import "./WithdrawalRequests.css";

export default function WithdrawalRequestsDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const data = {
    totalSaving: 14000000,
    requestAmount: 5000000,
    remaining: 9000000,
    name: "RISKA ATIKAH RAHMAWATI",
    memberSince: "Oct 23, 2025",
    nik: "123-32747",
    bank: "MANDIRI",
    accountNumber: "34620234 734623392",
  };

  const formatRupiah = (num) => {
    return "Rp " + num.toLocaleString("id-ID") + ",00";
  };

  return (
    <div className="card">
         {/* BREADCRUMB */}
      <div className="breadcrumb">
        <NavLink to="/dashboard/admin/ls-savings">
           ← Kembali ke Savings Dashboard
        </NavLink>
      </div>
      <h2>Pending Withdrawal Request</h2>
      
      {/* ✅ TABS */}
      <div className="tabs">
        <NavLink to="/dashboard/admin/savings-management" className="tab">
          Savings Management
        </NavLink>

        <NavLink to="/dashboard/admin/mandatory-savings" className="tab">
          Mandatory Savings
        </NavLink>

        <NavLink to="/dashboard/admin/voluntary-savings" className="tab">
          Voluntary Savings & Withdrawal
        </NavLink>

        <NavLink
          to="/dashboard/admin/withdrawal-requests"
          className="tab active"
        >
          Withdrawal Requests
        </NavLink>
      </div>

      {/* SUMMARY */}
      <div className="summary-cards">
        <div className="card-box">
          <p>Total Voluntary Saving</p>
          <h3>{formatRupiah(data.totalSaving)}</h3>
        </div>

        <div className="card-box">
          <p>Request Amount</p>
          <h3 className="red">{formatRupiah(data.requestAmount)}</h3>
        </div>

        <div className="card-box">
          <p>Remaining Balance</p>
          <h3>{formatRupiah(data.remaining)}</h3>
        </div>
      </div>

      {/* DETAIL GRID */}
      <div className="detail-grid">
        <div className="detail-card">
          <h4>Member Info</h4>
          <p><b>{data.name}</b></p>
          <p>Member Since: {data.memberSince}</p>
          <p>ID Number: {data.nik}</p>
        </div>

        <div className="detail-card">
          <h4>Bank Destination</h4>
          <p><b>{data.name}</b></p>
          <p>{data.accountNumber}</p>
          <p>{data.bank}</p>
        </div>

        <div className="detail-card">
          <h4>Reason Withdraws</h4>
          <div className="box-input"></div>
        </div>

        <div className="detail-card">
          <h4>Notes Admin</h4>
          <div className="box-input"></div>
        </div>
      </div>

      {/* ACTION */}
      <div className="action-bar">
        <button className="upload">Upload Transfer</button>
        <button className="approve">Approve</button>
        <button className="reject">Rejected</button>
      </div>

      {/* BACK */}
      <button className="btn-back" onClick={() => navigate(-1)}>
        ← Back
      </button>
    </div>
  );
}