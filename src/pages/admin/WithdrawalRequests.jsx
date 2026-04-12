import { NavLink, useNavigate } from "react-router-dom";
import "./WithdrawalRequests.css";

export default function WithdrawalRequests() {
  const navigate = useNavigate();

  const data = [
    {
      id: 1,
      name: "Rafilla Shalwa",
      dept: "HRD & GA",
      nik: "0072871",
      purpose: "Kebutuhan mendadak untuk renovasi rumah",
      date: "2026-03-02",
      amount: 800000,
    },
    {
      id: 2,
      name: "Rafilla Shalwa",
      dept: "HRD & GA",
      nik: "0072871",
      purpose: "Kebutuhan mendadak untuk renovasi rumah",
      date: "2026-03-02",
      amount: 800000,
    },
  ];

  const formatRupiah = (num) => {
    return "Rp " + num.toLocaleString("id-ID");
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
          className={({ isActive }) => `tab ${isActive ? "active" : ""}`}
        >
          Withdrawal Requests
        </NavLink>
      </div>

      {/* LIST */}
      <div className="request-list">
        {data.map((item) => (
          <div key={item.id} className="request-card">
            <div className="profile">
              <div className="avatar">👤</div>
              <div>
                <h4>{item.name}</h4>
                <p>{item.dept}</p>
                <b>{item.nik}</b>
              </div>
            </div>

            <div className="info">
              <p className="label">Purpose</p>
              <p>{item.purpose}</p>
            </div>

            <div className="info">
              <p className="label">Request Date</p>
              <p>{item.date}</p>
            </div>

            <div className="info">
              <p className="label">Amount Requested</p>
              <p>{formatRupiah(item.amount)}</p>
            </div>

            <button
              className="btn-detail"
              onClick={() =>
                navigate(`/dashboard/admin/withdrawal-requests/${item.id}`)
              }
            >
              Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}