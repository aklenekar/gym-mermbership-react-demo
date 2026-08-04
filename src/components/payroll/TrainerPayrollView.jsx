import React, { useState, useEffect } from "react";
import PageHeader from "../pageHeader/PageHeader";
import { payrollService } from "../../services/Services";
import "./ManagePayroll.css";

export default function TrainerPayrollView() {
  const [payrollHistory, setPayrollHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMyPayroll();
  }, []);

  const loadMyPayroll = async () => {
    setLoading(true);
    try {
      const data = await payrollService.fetchMyPayroll();
      setPayrollHistory(data);
    } catch (err) {
      console.error("Failed to load trainer payroll:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <PageHeader
          title="MY EARNINGS & COMMISSIONS"
          subTitle="View your coaching salary, class commissions, and payout receipts"
        />
        <section className="admin-content">
          <div className="container payroll-loading">
            <div className="spinner"></div>
            <p>Loading My Earnings & Commission History...</p>
          </div>
        </section>
      </>
    );
  }

  const latestRun = payrollHistory[0] || {};
  const totalEarned = payrollHistory.reduce((acc, curr) => acc + (curr.netPayout || 0), 0);
  const totalCommissions = payrollHistory.reduce((acc, curr) => acc + (curr.commissionAmount || 0), 0);

  return (
    <>
      <PageHeader
        title="MY EARNINGS & COMMISSIONS"
        subTitle="View your coaching salary, class commissions, and payout receipts"
      />

      <section className="admin-content">
        <div className="container">
          <div className="payroll-controls" style={{ justifyContent: "flex-end" }}>
            <button className="btn-refresh" onClick={loadMyPayroll}>
              🔄 Refresh Earnings
            </button>
          </div>

          {/* Trainer Stats Overview */}
          <div className="payroll-stats">
            <div className="stat-box">
              <div className="stat-number" style={{ color: "#22c55e" }}>
                ${Number(totalEarned).toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </div>
              <div className="stat-label">Total Net Earnings</div>
            </div>

            <div className="stat-box">
              <div className="stat-number" style={{ color: "#ff4d00" }}>
                ${Number(totalCommissions).toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </div>
              <div className="stat-label">Class Commissions</div>
            </div>

            <div className="stat-box">
              <div className="stat-number" style={{ fontSize: "1.5rem" }}>
                {latestRun.status || "ACTIVE"}
              </div>
              <div className="stat-label">Latest Payout Status</div>
            </div>

            <div className="stat-box">
              <div className="stat-number">
                {payrollHistory.length}
              </div>
              <div className="stat-label">Payout Stubs</div>
            </div>
          </div>

          {/* Table Container */}
          <div className="payroll-table-container">
            <table className="payroll-table">
              <thead>
                <tr>
                  <th>Period</th>
                  <th>Base Salary</th>
                  <th>Commissions</th>
                  <th>Bonuses</th>
                  <th>Net Payout</th>
                  <th>Status</th>
                  <th>Payment Date</th>
                  <th>Reference No.</th>
                </tr>
              </thead>
              <tbody>
                {payrollHistory.length === 0 ? (
                  <tr>
                    <td colSpan="8" className="empty-state">
                      No payout history found for your account yet.
                    </td>
                  </tr>
                ) : (
                  payrollHistory.map((run) => (
                    <tr key={run.id || run.referenceNo}>
                      <td>
                        {run.periodStart} to {run.periodEnd}
                      </td>
                      <td>${Number(run.baseSalaryAmount || 0).toFixed(2)}</td>
                      <td>
                        <span className="text-highlight">
                          +${Number(run.commissionAmount || 0).toFixed(2)}
                        </span>
                      </td>
                      <td>+${Number(run.bonusAmount || 0).toFixed(2)}</td>
                      <td className="font-bold">
                        ${Number(run.netPayout || 0).toFixed(2)}
                      </td>
                      <td>
                        <span className={`status-badge status-${run.status?.toLowerCase()}`}>
                          {run.status}
                        </span>
                      </td>
                      <td>{run.paymentDate || "Pending"}</td>
                      <td className="code-text">{run.referenceNo || "N/A"}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
