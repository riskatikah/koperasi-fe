import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./SavingsManagement.css";
export default function SavingsManagement() {
  const [search, setSearch] = useState("");

  const [month, setMonth] = useState("July");
const [year, setYear] = useState("2025");
 const data = [
  {
    id: "00012782",
    name: "Rafilla Shalwa",
    dept: "Engineering",
    withdraw: 300000,
    pokok: 1000000,
    wajib: 2500000,
    sukarela: 2500000,
    month: "July",
    year: "2025",
  },
  {
    id: "00055521",
    name: "Andi Saputra",
    dept: "Finance",
    withdraw: 200000,
    pokok: 1000000,
    wajib: 2000000,
    sukarela: 1000000,
    month: "June",
    year: "2025",
  },
];

  const formatRupiah = (num) => {
    return "Rp " + num.toLocaleString("id-ID");
  };
const [selectedIds, setSelectedIds] = useState([]);
const [generatedData, setGeneratedData] = useState([]);
const [isGenerated, setIsGenerated] = useState(false);
const [generatedDate, setGeneratedDate] = useState("");
const handleCheckbox = (id) => {
  setSelectedIds((prev) =>
    prev.includes(id)
      ? prev.filter((item) => item !== id)
      : [...prev, id]
  );
};
 const filteredData = data.filter((item) => {
  const keyword = search.toLowerCase();

  const matchSearch =
    item.name.toLowerCase().includes(keyword) ||
    item.id.includes(keyword) ||
    item.dept.toLowerCase().includes(keyword);

  const matchDate =
    item.month === month && item.year === year;

  return matchSearch && matchDate;
});

  

 return (
  <div className="card">

    {/* 🔙 BACK */}
    <div className="breadcrumb">
      <NavLink to="/dashboard/admin/ls-savings">
        ← Kembali ke Savings Dashboard
      </NavLink>
    </div>

    <div className="savings-header">
      <h2>Savings Management</h2>
    </div>

    {/* TABS */}
    <div className="tabs">
      <NavLink to="/dashboard/admin/savings-management" end className={({ isActive }) => `tab ${isActive ? "active" : ""}`}>
        Savings Management
      </NavLink>
      <NavLink to="/dashboard/admin/mandatory-savings" end className={({ isActive }) => `tab ${isActive ? "active" : ""}`}>
        Mandatory Savings
      </NavLink>
      <NavLink to="/dashboard/admin/voluntary-savings" end className={({ isActive }) => `tab ${isActive ? "active" : ""}`}>
        Voluntary Savings & Withdrawal
      </NavLink>
      <NavLink to="/dashboard/admin/withdrawal-requests" end className={({ isActive }) => `tab ${isActive ? "active" : ""}`}>
        Withdrawal Requests
      </NavLink>
    </div>

    {/* HEADER */}
    <div className="table-header">
      <div className="search-box">
        <input
          placeholder="Search by name, NIK, or Loan ID..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="filter-box">
        <select value={month} onChange={(e) => setMonth(e.target.value)}>
          <option>January</option>
          <option>February</option>
          <option>March</option>
          <option>April</option>
          <option>May</option>
          <option>June</option>
          <option>July</option>
          <option>August</option>
          <option>September</option>
          <option>October</option>
          <option>November</option>
          <option>December</option>
        </select>

        <select value={year} onChange={(e) => setYear(e.target.value)}>
          <option>2024</option>
          <option>2025</option>
          <option>2026</option>
        </select>
      </div>
    </div>

    {/* ACTION */}
    <div className="action-bar">
      {!isGenerated ? (
        <button
          className={`btn-generate ${selectedIds.length ? "active" : ""}`}
          disabled={!selectedIds.length}
          onClick={() => {
            const selectedData = filteredData.filter((item) =>
              selectedIds.includes(item.id)
            );

            setGeneratedData(selectedData);
            setIsGenerated(true);
            setGeneratedDate(new Date().toLocaleDateString("id-ID"));

            alert("Bills berhasil di-generate ✅");
          }}
        >
          Generate Bills
        </button>
      ) : (
        <button
          className="btn-print active"
          onClick={() => window.print()}
        >
          🖨️ Print
        </button>
      )}
    </div>

    {/* ✅ PRINT AREA (DI LUAR TABLE) */}
    {isGenerated && (
      <div className="print-area">
        <h2>Koperasi Sanoh</h2>
        <p>Tanggal Generate: {generatedDate}</p>
        <p>Periode: {month} {year}</p>

        <table>
          <thead>
            <tr>
              <th>Nama</th>
              <th>ID</th>
              <th>Department</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {generatedData.map((item) => {
              const total =
                item.pokok + item.wajib + item.sukarela - item.withdraw;

              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.id}</td>
                  <td>{item.dept}</td>
                  <td>{formatRupiah(total)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    )}

    {/* TABLE */}
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Anggota</th>
          <th>Department</th>
          <th>Withdraw</th>
          <th>Simp Pokok</th>
          <th>Simp Wajib</th>
          <th>Simp Sukarela</th>
          <th>Total</th>
        </tr>
      </thead>

      <tbody>
        {filteredData.length > 0 ? (
          filteredData.map((item) => {
            const total =
              item.pokok + item.wajib + item.sukarela - item.withdraw;

            return (
              <tr key={item.id}>
                {/* ✅ FIX CHECKBOX */}
                <td>
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(item.id)}
                    onChange={() => handleCheckbox(item.id)}
                  />
                </td>

                <td>
                  {item.name} <br />
                  <span className="sub">{item.id}</span>
                </td>

                <td>{item.dept}</td>
                <td>{formatRupiah(item.withdraw)}</td>
                <td>{formatRupiah(item.pokok)}</td>
                <td>{formatRupiah(item.wajib)}</td>
                <td>{formatRupiah(item.sukarela)}</td>

                <td className="total">{formatRupiah(total)}</td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan="8" className="empty">
              Data tidak ditemukan
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
);

}
