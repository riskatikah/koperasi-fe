import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./SavingsDashboard.css";

export default function SavingsDasnhboard() {
  const [amount, setAmount] = useState(100000);
  const [tempAmount, setTempAmount] = useState(100000);

  const formatRupiah = (value) => {
    return "Rp " + value.toLocaleString("id-ID");
  };

  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setTempAmount(value ? Number(value) : 0);
  };

  const handleDiscard = () => {
    setTempAmount(amount);
  };

  const handleUpdate = () => {
    setAmount(tempAmount);
    alert("Amount berhasil diupdate ke semua member");
  };

  return (
    <div className="savings-container">

   

      {/* HEADER */}
      <div className="savings-header">
        <h2>Savings Dashboard</h2>

        {/* ✅ TABS (FIXED FINAL) */}
        <div className="tabs">
          <NavLink
            to="/dashboard/admin/savings-management"
            end
            className={({ isActive }) =>
              `tab ${isActive ? "active" : ""}`
            }
          >
            Savings Management
          </NavLink>

          <NavLink
            to="/dashboard/admin/mandatory-savings"
            end
            className={({ isActive }) =>
              `tab ${isActive ? "active" : ""}`
            }
          >
            Mandatory Savings
          </NavLink>

          <NavLink
            to="/dashboard/admin/voluntary-savings"
            end
            className={({ isActive }) =>
              `tab ${isActive ? "active" : ""}`
            }
          >
            Voluntary Savings & Withdrawal
          </NavLink>

          <NavLink
            to="/dashboard/admin/withdrawal-requests"
            end
            className={({ isActive }) =>
              `tab ${isActive ? "active" : ""}`
            }
          >
            Withdrawal Requests
          </NavLink>
        </div>
      </div>

      {/* MONTHLY MANDATORY */}
      <div className="mandatory-section">
        <div className="mandatory-card">
          <div className="rate-box">
            <div className="placeholder"></div>
            <p className="amount">{formatRupiah(amount)}</p>
            <span>CURRENT RATE</span>
          </div>

          <div className="mandatory-form">
            <h3>Monthly Mandatory Amount</h3>
            <p>Define amount mandatory for all members</p>

            <label>Amount (Rupiah)</label>
            <input
              type="text"
              value={formatRupiah(tempAmount)}
              onChange={handleChange}
            />

            <div className="actions">
              <button
                className="btn secondary"
                onClick={handleDiscard}
              >
                Discard Changes
              </button>

              <button
                className="btn primary"
                onClick={handleUpdate}
              >
                Update All Members
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* PENDING APPROVALS */}
      <div className="pending-section">
        <div className="pending-header">
          <h3>Pending Approvals</h3>
        </div>

        <div className="card-list">
          {[1, 2, 3].map((item) => (
            <div className="approval-card" key={item}>
              <div className="user-info">
                <div className="avatar"></div>
                <div>
                  <h4>Rafilla Shalwa</h4>
                  <p>HRD & GA</p>
                  <span>0072871</span>
                </div>
              </div>

              <p className="highlight">
                Changed Voluntary Saving Amount
              </p>

              <div className="details">
                <div>
                  <p>Amount</p>
                  <span>Rp 500.000</span>
                </div>
              </div>

              <div className="actions">
                <button className="btn reject">Reject</button>
                <button className="btn approve">Approve</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}