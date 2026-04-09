import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./MandatorySavings.css";

export default function MandatorySavings() {

  // ✅ DATA HARUS DI ATAS
  const data = [
    {
      name: "Shalwa",
      dept: "Engineering",
      date: "2022-01-08",
      amount: 50000,
      status: "Pending",
    },
    {
      name: "Shalwa",
      dept: "Engineering",
      date: "2022-01-08",
      amount: 50000,
      status: "Success",
    },
  ];

  // ✅ STATE
  const [statusFilter, setStatusFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");
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

    setFilteredResult(result);
  };

  // ✅ CLEAR
  const handleClear = () => {
    setStatusFilter("");
    setDateFilter("");
    setFilteredResult(data);
  };

  const formatRupiah = (num) => {
    return "Rp " + num.toLocaleString("id-ID");
  };

  return (
    <div className="card">

      {/* BACK */}
      <div className="breadcrumb">
        <NavLink to="/dashboard/admin/ls-savings">
          ← Kembali ke Savings Dashboard
        </NavLink>
      </div>

      <h2>Mandatory Savings</h2>

      {/* TABS */}
      <div className="tabs">
        <NavLink to="/dashboard/admin/savings-management" className={({ isActive }) => `tab ${isActive ? "active" : ""}`}>
          Savings Management
        </NavLink>

        <NavLink to="/dashboard/admin/mandatory-savings" className={({ isActive }) => `tab ${isActive ? "active" : ""}`}>
          Mandatory Savings
        </NavLink>

        <NavLink to="/dashboard/admin/voluntary-savings" className={({ isActive }) => `tab ${isActive ? "active" : ""}`}>
          Voluntary Savings & Withdrawal
        </NavLink>

        <NavLink to="/dashboard/admin/withdrawal-requests" className={({ isActive }) => `tab ${isActive ? "active" : ""}`}>
          Withdrawal Requests
        </NavLink>
      </div>

      {/* CARDS */}
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
            <th>Member</th>
            <th>Department</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {filteredResult.length > 0 ? (
            filteredResult.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.dept}</td>
                <td>{item.date}</td>
                <td>{formatRupiah(item.amount)}</td>
                <td className={item.status === "Pending" ? "pending" : "success"}>
                  {item.status}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="empty">
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