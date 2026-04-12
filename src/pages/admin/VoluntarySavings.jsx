import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./VoluntarySavings.css";

export default function VoluntarySavings() {
  // ✅ DATA
  const data = [
    {
      name: "Shalwa",
      type: "Deposit",
      date: "2022-01-08",
      amount: 50000,
      status: "Pending",
    },
    {
      name: "Riska",
      type: "Withdraws",
      date: "2022-01-02",
      amount: 50000,
      status: "Success",
    },
    {
      name: "Syawa",
      type: "Deposit",
      date: "2022-01-02",
      amount: 50000,
      status: "Pending",
    },
  ];

  // ✅ STATE
  const [statusFilter, setStatusFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [filteredResult, setFilteredResult] = useState(data);

  // ✅ SEARCH
  const handleSearch = () => {
    let result = data;

    if (statusFilter !== "") {
      result = result.filter((item) => item.status === statusFilter);
    }

    if (dateFilter !== "") {
      result = result.filter((item) => item.date === dateFilter);
    }

    if (typeFilter !== "") {
      result = result.filter((item) => item.type === typeFilter);
    }

    setFilteredResult(result);
  };

  // ✅ CLEAR
  const handleClear = () => {
    setStatusFilter("");
    setDateFilter("");
    setTypeFilter("");
    setFilteredResult(data);
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

      <h2>Voluntary Savings & Withdrawal</h2>

      {/* TABS */}
      <div className="tabs">
        <NavLink to="/dashboard/admin/savings-management" className="tab">
          Savings Management
        </NavLink>

        <NavLink to="/dashboard/admin/mandatory-savings" className="tab">
          Mandatory Savings
        </NavLink>

        <NavLink
          to="/dashboard/admin/voluntary-savings"
          className={({ isActive }) => `tab ${isActive ? "active" : ""}`}
        >
          Voluntary Savings & Withdrawal
        </NavLink>

        <NavLink to="/dashboard/admin/withdrawal-requests" className="tab">
          Withdrawal Requests
        </NavLink>
      </div>

      {/* SUMMARY */}
      <div className="summary-cards">
        <div className="card-box">
          <p>Mandatory Savings Active</p>
          <h3>60 Members</h3>
        </div>

        <div className="card-box">
          <p>Transaction Pending</p>
          <h3 className="red">5</h3>
        </div>

        <div className="card-box">
          <p>Total Amount Pending</p>
          <h3>Rp 5.000.000,00</h3>
        </div>
      </div>

      {/* FILTER */}
      <div className="filter-bar">
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">Status</option>
          <option value="Pending">Pending</option>
          <option value="Success">Success</option>
        </select>

        <input
          type="date"
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
        />

        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
        >
          <option value="">Type</option>
          <option value="Deposit">Deposit</option>
          <option value="Withdraws">Withdraws</option>
        </select>

        <button className="btn-clear" onClick={handleClear}>
          Clear
        </button>

        <button className="btn-search" onClick={handleSearch}>
          Search
        </button>
      </div>

      {/* TABLE */}
      <table>
        <thead>
          <tr>
            <th>Member Name</th>
            <th>Type</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Detail</th>
          </tr>
        </thead>

        <tbody>
          {filteredResult.length > 0 ? (
            filteredResult.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.type}</td>
                <td>{item.date}</td>
                <td>{formatRupiah(item.amount)}</td>
                <td className={item.status === "Pending" ? "pending" : "success"}>
                  {item.status}
                </td>
                <td>
                  <button className="btn-detail">Detail</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="empty">
                Data tidak ditemukan
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* PAGINATION */}
      <div className="pagination">
        <button className="active">1</button>
        <button>2</button>
        <button>3</button>
        <span>...</span>
        <button>10</button>
        <button>Next &gt;</button>
      </div>
    </div>
  );
}