import React, { useState, useEffect, useRef } from "react";
import PageHeader from "../pageHeader/PageHeader";
import { payrollService } from "../../services/Services";
import "./ManagePayroll.css";

export default function ManagePayroll() {
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("runs");
  const [selectedTrainerId, setSelectedTrainerId] = useState("");
  const [trainerConfig, setTrainerConfig] = useState({
    baseSalary: 3500,
    commissionRatePerClass: 25,
    commissionPercentage: 15,
    hourlyRate: 40,
    payFrequency: "MONTHLY",
  });

  const [newRun, setNewRun] = useState({
    trainerId: "1",
    periodStart: new Date(new Date().getFullYear(), new Date().getMonth(), 1)
      .toISOString()
      .split("T")[0],
    periodEnd: new Date().toISOString().split("T")[0],
    bonusAmount: 0,
    deductionAmount: 0,
    referenceNo: "",
  });

  const dialogRef = useRef(null);

  const openModal = () => dialogRef.current?.showModal();
  const closeModal = () => dialogRef.current?.close();

  useEffect(() => {
    loadPayrollData();
  }, []);

  const loadPayrollData = async () => {
    setLoading(true);
    try {
      const data = await payrollService.fetchSummary();
      setSummary(data);
    } catch (err) {
      console.error("Failed to load payroll summary:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (runId, newStatus) => {
    try {
      await payrollService.updateStatus(runId, newStatus);
      loadPayrollData();
    } catch (err) {
      alert("Failed to update payout status: " + err.message);
    }
  };

  const handleGenerateRunSubmit = async (e) => {
    e.preventDefault();
    try {
      await payrollService.generateRun({
        trainerId: Number(newRun.trainerId),
        periodStart: newRun.periodStart,
        periodEnd: newRun.periodEnd,
        bonusAmount: Number(newRun.bonusAmount || 0),
        deductionAmount: Number(newRun.deductionAmount || 0),
        referenceNo: newRun.referenceNo || `PAY-${Date.now().toString().slice(-6)}`,
      });
      closeModal();
      loadPayrollData();
    } catch (err) {
      alert("Failed to generate payroll run: " + err.message);
    }
  };

  const handleSaveConfigSubmit = async (e) => {
    e.preventDefault();
    if (!selectedTrainerId) return;
    try {
      await payrollService.saveConfig(selectedTrainerId, trainerConfig);
      alert("Trainer compensation settings saved successfully!");
    } catch (err) {
      alert("Failed to save config: " + err.message);
    }
  };

  if (loading) {
    return (
      <>
        <PageHeader
          title="PAYROLL MANAGEMENT"
          subTitle="Track staff compensation, commission payouts, and period payroll runs"
        />
        <section className="admin-content">
          <div className="container payroll-loading">
            <div className="spinner"></div>
            <p>Loading Payroll & Commission Data...</p>
          </div>
        </section>
      </>
    );
  }

  const {
    totalMonthlyPayroll = 0,
    totalPendingCommissions = 0,
    totalPaidThisMonth = 0,
    activeTrainersCount = 0,
    recentPayrollRuns = [],
    pendingCommissions = [],
  } = summary || {};

  return (
    <>
      <PageHeader
        title="PAYROLL MANAGEMENT"
        subTitle="Track staff compensation, commission payouts, and period payroll runs"
      />

      <section className="admin-content">
        <div className="container">
          {/* Controls Bar */}
          <div className="payroll-controls">
            <div className="payroll-tabs-nav">
              <button
                className={`tab-btn ${activeTab === "runs" ? "active" : ""}`}
                onClick={() => setActiveTab("runs")}
              >
                📋 Payroll Runs ({recentPayrollRuns.length})
              </button>
              <button
                className={`tab-btn ${activeTab === "commissions" ? "active" : ""}`}
                onClick={() => setActiveTab("commissions")}
              >
                ⚡ Pending Commissions ({pendingCommissions.length})
              </button>
              <button
                className={`tab-btn ${activeTab === "config" ? "active" : ""}`}
                onClick={() => setActiveTab("config")}
              >
                ⚙️ Rate Configs
              </button>
            </div>

            <div className="filters">
              <button className="btn-refresh" onClick={loadPayrollData}>
                🔄 Refresh
              </button>
              <button className="btn-add-payroll" onClick={openModal}>
                + Generate Payroll Run
              </button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="payroll-stats">
            <div className="stat-box">
              <div className="stat-number">
                ${Number(totalMonthlyPayroll).toLocaleString(undefined, { minimumFractionDigits: 0 })}
              </div>
              <div className="stat-label">Total Monthly Payroll</div>
            </div>
            <div className="stat-box">
              <div className="stat-number" style={{ color: "#fbbf24" }}>
                ${Number(totalPendingCommissions).toLocaleString(undefined, { minimumFractionDigits: 0 })}
              </div>
              <div className="stat-label">Pending Commissions</div>
            </div>
            <div className="stat-box">
              <div className="stat-number" style={{ color: "#22c55e" }}>
                ${Number(totalPaidThisMonth).toLocaleString(undefined, { minimumFractionDigits: 0 })}
              </div>
              <div className="stat-label">Processed Payouts</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">{activeTrainersCount}</div>
              <div className="stat-label">Active Trainers</div>
            </div>
          </div>

          {/* Modal Dialog */}
          <dialog ref={dialogRef} className="payroll-modal">
            <div className="modal-inner">
              <div className="modal-header">
                <h2>Generate Payout Run</h2>
                <button className="close-btn" onClick={closeModal}>
                  ✖
                </button>
              </div>
              <form onSubmit={handleGenerateRunSubmit} className="modal-form">
                <div className="form-group">
                  <label>Trainer ID</label>
                  <input
                    type="number"
                    required
                    value={newRun.trainerId}
                    onChange={(e) => setNewRun({ ...newRun, trainerId: e.target.value })}
                    className="form-input"
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Period Start</label>
                    <input
                      type="date"
                      required
                      value={newRun.periodStart}
                      onChange={(e) => setNewRun({ ...newRun, periodStart: e.target.value })}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label>Period End</label>
                    <input
                      type="date"
                      required
                      value={newRun.periodEnd}
                      onChange={(e) => setNewRun({ ...newRun, periodEnd: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Bonus ($)</label>
                    <input
                      type="number"
                      value={newRun.bonusAmount}
                      onChange={(e) => setNewRun({ ...newRun, bonusAmount: e.target.value })}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label>Deduction ($)</label>
                    <input
                      type="number"
                      value={newRun.deductionAmount}
                      onChange={(e) => setNewRun({ ...newRun, deductionAmount: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Reference Number (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. PAY-AUG-001"
                    value={newRun.referenceNo}
                    onChange={(e) => setNewRun({ ...newRun, referenceNo: e.target.value })}
                    className="form-input"
                  />
                </div>
                <div className="modal-actions">
                  <button type="button" className="btn-cancel" onClick={closeModal}>
                    Cancel
                  </button>
                  <button type="submit" className="btn-submit">
                    Process Payout Run
                  </button>
                </div>
              </form>
            </div>
          </dialog>

          {/* Tab Content: Payroll Runs */}
          {activeTab === "runs" && (
            <div className="payroll-table-container">
              <table className="payroll-table">
                <thead>
                  <tr>
                    <th>Trainer</th>
                    <th>Pay Period</th>
                    <th>Base Pay</th>
                    <th>Commission</th>
                    <th>Bonus / Ded.</th>
                    <th>Net Payout</th>
                    <th>Status</th>
                    <th>Ref No.</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentPayrollRuns.length === 0 ? (
                    <tr>
                      <td colSpan="9" className="empty-state">
                        No payroll runs recorded yet. Click "+ Generate Payroll Run" above.
                      </td>
                    </tr>
                  ) : (
                    recentPayrollRuns.map((run) => (
                      <tr key={run.id}>
                        <td>
                          <div className="trainer-info-cell">
                            <span className="trainer-name">{run.trainerName}</span>
                            <span className="trainer-email">{run.trainerEmail}</span>
                          </div>
                        </td>
                        <td>
                          {run.periodStart} to {run.periodEnd}
                        </td>
                        <td>${Number(run.baseSalaryAmount || 0).toFixed(2)}</td>
                        <td>
                          <span className="text-highlight">+${Number(run.commissionAmount || 0).toFixed(2)}</span>
                        </td>
                        <td>
                          <span className="text-muted">
                            +${Number(run.bonusAmount || 0).toFixed(2)} / -${Number(run.deductionAmount || 0).toFixed(2)}
                          </span>
                        </td>
                        <td className="font-bold">
                          ${Number(run.netPayout || 0).toFixed(2)}
                        </td>
                        <td>
                          <span className={`status-badge status-${run.status?.toLowerCase()}`}>
                            {run.status}
                          </span>
                        </td>
                        <td className="code-text">{run.referenceNo || "N/A"}</td>
                        <td>
                          <div className="action-buttons">
                            {run.status === "DRAFT" && (
                              <button
                                className="btn-action btn-approve"
                                onClick={() => handleStatusChange(run.id, "APPROVED")}
                              >
                                Approve
                              </button>
                            )}
                            {run.status === "APPROVED" && (
                              <button
                                className="btn-action btn-pay"
                                onClick={() => handleStatusChange(run.id, "PAID")}
                              >
                                Mark Paid
                              </button>
                            )}
                            {run.status === "PAID" && (
                              <span className="text-success">Paid ✓</span>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}

          {/* Tab Content: Pending Commissions */}
          {activeTab === "commissions" && (
            <div className="payroll-table-container">
              <table className="payroll-table">
                <thead>
                  <tr>
                    <th>Trainer</th>
                    <th>Session Title</th>
                    <th>Type</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {pendingCommissions.length === 0 ? (
                    <tr>
                      <td colSpan="7" className="empty-state">
                        No pending commissions currently logged.
                      </td>
                    </tr>
                  ) : (
                    pendingCommissions.map((comm) => (
                      <tr key={comm.id}>
                        <td className="font-medium">{comm.trainerName}</td>
                        <td>{comm.sessionTitle}</td>
                        <td>
                          <span className="badge-type">{comm.sessionType}</span>
                        </td>
                        <td>{comm.sessionDate}</td>
                        <td className="text-highlight font-bold">
                          +${Number(comm.amount).toFixed(2)}
                        </td>
                        <td>
                          <span className="status-badge status-pending">
                            {comm.status}
                          </span>
                        </td>
                        <td className="text-muted">{comm.notes || "—"}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}

          {/* Tab Content: Rate Config */}
          {activeTab === "config" && (
            <div className="config-card">
              <h3 className="config-title">Set Trainer Compensation & Commission Rates</h3>
              <p className="config-subtitle">
                Configure base salary, hourly rate, and per-class commission rates for individual staff members.
              </p>
              <form onSubmit={handleSaveConfigSubmit} className="config-form-grid mt-4">
                <div className="form-group">
                  <label>Trainer ID</label>
                  <input
                    type="number"
                    placeholder="e.g. 1"
                    value={selectedTrainerId}
                    onChange={(e) => setSelectedTrainerId(e.target.value)}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label>Base Monthly Salary ($)</label>
                  <input
                    type="number"
                    value={trainerConfig.baseSalary}
                    onChange={(e) =>
                      setTrainerConfig({ ...trainerConfig, baseSalary: Number(e.target.value) })
                    }
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label>Commission Rate per Class ($)</label>
                  <input
                    type="number"
                    value={trainerConfig.commissionRatePerClass}
                    onChange={(e) =>
                      setTrainerConfig({ ...trainerConfig, commissionRatePerClass: Number(e.target.value) })
                    }
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label>Commission Percentage (%)</label>
                  <input
                    type="number"
                    value={trainerConfig.commissionPercentage}
                    onChange={(e) =>
                      setTrainerConfig({ ...trainerConfig, commissionPercentage: Number(e.target.value) })
                    }
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label>Hourly Rate ($)</label>
                  <input
                    type="number"
                    value={trainerConfig.hourlyRate}
                    onChange={(e) =>
                      setTrainerConfig({ ...trainerConfig, hourlyRate: Number(e.target.value) })
                    }
                    className="form-input"
                  />
                </div>
                <div className="form-group full-width mt-2">
                  <button
                    type="submit"
                    className="btn-add-payroll"
                    disabled={!selectedTrainerId}
                  >
                    💾 Save Compensation Config
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
