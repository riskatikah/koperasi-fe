import React, { useState, useEffect, useRef } from 'react';
import './SHUManagement.css';

const SHUMasterData = () => {
  const today = new Date();

  const [month, setMonth] = useState(today.getMonth() + 1);
  const [year, setYear] = useState(today.getFullYear());

  const [shuTypes, setShuTypes] = useState([]);
  const [name, setName] = useState('');
  const [percentage, setPercentage] = useState('');
  const [showForm, setShowForm] = useState(false);

  const [editId, setEditId] = useState(null);
  const [editPercentage, setEditPercentage] = useState('');

  const formRef = useRef(null);

  const storageKey = `shuMasterData_${year}_${month}`;

  useEffect(() => {
    const savedData = localStorage.getItem(storageKey);
    setShuTypes(savedData ? JSON.parse(savedData) : []);
  }, [storageKey]);

  const totalPercentage = shuTypes.reduce((sum, item) => sum + item.percentage, 0);

  const saveToStorage = (data) => {
    localStorage.setItem(storageKey, JSON.stringify(data));
  };

  const handleSave = () => {
    if (!name || !percentage) return alert("Please fill all fields");

    const newTotal = totalPercentage + Number(percentage);
    if (newTotal > 100) return alert("Max 100%");

    const newData = {
      id: Date.now(),
      name,
      percentage: Number(percentage),
    };

    const updated = [...shuTypes, newData];
    setShuTypes(updated);
    saveToStorage(updated);

    setName('');
    setPercentage('');
    setShowForm(false);
  };

  const handleAddClick = () => {
    if (totalPercentage === 100) return alert("Sudah 100%");
    setShowForm(true);
    setTimeout(() => formRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  const handleCancel = () => {
    setShowForm(false);
    setName('');
    setPercentage('');
  };

  const handleEdit = (item) => {
    setEditId(item.id);
    setEditPercentage(item.percentage);
  };

  const handleSaveEdit = (id) => {
    const newVal = Number(editPercentage);

    const otherTotal = shuTypes
      .filter(i => i.id !== id)
      .reduce((sum, i) => sum + i.percentage, 0);

    if (otherTotal + newVal > 100) return alert("Max 100%");

    const updated = shuTypes.map(i =>
      i.id === id ? { ...i, percentage: newVal } : i
    );

    setShuTypes(updated);
    saveToStorage(updated);
    setEditId(null);
  };

  return (
    <div className="shu-container">

      {/* HEADER */}
      <div className="shu-header">
        <div>
          <h2 className="shu-title">MASTER DATA</h2>
          <p className="shu-subtitle">SHU Distribution Management</p>
        </div>

        <div className="shu-filter">
          <select value={month} onChange={(e) => setMonth(Number(e.target.value))}>
            {["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"]
              .map((m, i) => <option key={i} value={i+1}>{m}</option>)}
          </select>

          <select value={year} onChange={(e) => setYear(Number(e.target.value))}>
            {[2024,2025,2026,2027].map(y => <option key={y}>{y}</option>)}
          </select>
        </div>
      </div>

      {/* TABLE */}
      <div className="shu-table-container">
        <div className="shu-table-header">
          <h3>SHU MASTER</h3>

          <div className="shu-table-actions">
            <span className="shu-total-badge">
              Total: {totalPercentage}%
            </span>

            <button className="btn-add" onClick={handleAddClick}>
              + Add New
            </button>
          </div>
        </div>

        <table className="shu-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Type</th>
              <th>%</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {shuTypes.length === 0 ? (
              <tr><td colSpan="4" align="center">No data</td></tr>
            ) : (
              shuTypes.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>

                  <td>
                    {editId === item.id ? (
                      <input
                        type="number"
                        value={editPercentage}
                        onChange={(e) => setEditPercentage(e.target.value)}
                        className="input-inline"
                      />
                    ) : `${item.percentage}%`}
                  </td>

                  <td className="action-cell">
                    {editId === item.id ? (
                      <>
                        <button
                          className="btn-table btn-save"
                          onClick={() => handleSaveEdit(item.id)}
                        >
                          Save
                        </button>

                        <button
                          className="btn-table btn-cancel"
                          onClick={() => setEditId(null)}
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <button
                        className="btn-table btn-edit"
                        onClick={() => handleEdit(item)}
                      >
                        Edit
                      </button>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* FORM */}
      {showForm && (
        <div className="shu-card" ref={formRef}>
          <h3>Add New SHU</h3>

          <input
            placeholder="Nama SHU"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="number"
            placeholder="Percentage"
            value={percentage}
            onChange={(e) => setPercentage(e.target.value)}
          />

          <div className="shu-actions">
            <button className="btn-cancel" onClick={handleCancel}>
              Cancel
            </button>

            <button
              className="btn-save"
              onClick={handleSave}
              disabled={totalPercentage >= 100}
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SHUMasterData;
