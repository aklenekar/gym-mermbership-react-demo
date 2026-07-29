import "./PlanModal.css";

export default function ClassesPlanModal({
  recommendations,
  isLoading,
  handleRegenerate,
}) {
  return (
    <div className="ai-page-wrapper">
      {/* Loading State */}
      {isLoading && (
        <div className="loading-state">
          <div className="loading-spinner"></div>
          <p className="loading-text">Analyzing your fitness profile...</p>
          <p className="loading-subtext">
            Searching for the best class matches...
          </p>
        </div>
      )}

      {/* Recommendations List */}
      {!isLoading && recommendations && recommendations.length > 0 && (
        <>
          <div className="recommendations-summary">
            <div className="summary-badge">
              <span className="summary-icon">✨</span>
              <span>{recommendations.length} Matches Found</span>
            </div>
            <div className="avg-match">
              Average Match:{" "}
              {Math.round(
                recommendations.reduce(
                  (acc, rec) => acc + rec.matchPercentage,
                  0,
                ) / recommendations.length,
              )}
              %
            </div>
            <button className="btn-regenerate" onClick={handleRegenerate}>
              <span className="btn-icon">🔄</span> Refresh Classes
            </button>
          </div>

          <div className="recommendations-list">
            {recommendations.map((rec, index) => (
              <div key={index} className="recommendation-card">
                <div className="rank-badge">#{index + 1}</div>

                <div className="recommendation-header">
                  <div className="title-section">
                    <h3 className="class-name">{rec.className}</h3>
                    <div className="match-row">
                      <div className="match-percentage">
                        <span className="match-icon">⭐</span>
                        <span className="match-value">
                          {rec.matchPercentage}%
                        </span>
                        <span className="match-label">Match</span>
                      </div>
                      <div className="match-bar-container">
                        <div
                          className="match-bar"
                          style={{
                            width: `${rec.matchPercentage}%`,
                            background:
                              rec.matchPercentage >= 95
                                ? "linear-gradient(90deg, var(--success), var(--success-light))"
                                : rec.matchPercentage >= 85
                                  ? "linear-gradient(90deg, var(--primary), var(--primary-light))"
                                  : "linear-gradient(90deg, var(--accent), var(--accent-light))",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="recommendation-body">
                  <div className="info-section reasoning-section">
                    <div className="section-header">
                      <span className="section-icon">💡</span>
                      <h4 className="section-title">Why This Class?</h4>
                    </div>
                    <p className="reasoning-text">{rec.reasoning}</p>
                  </div>

                  <div className="info-section benefits-section">
                    <div className="section-header">
                      <span className="section-icon">✨</span>
                      <h4 className="section-title">Key Benefits</h4>
                    </div>
                    <div className="benefits-grid">
                      {rec.benefits.map((benefit, idx) => (
                        <div key={idx} className="benefit-item">
                          <span className="benefit-check">✓</span>
                          <span className="benefit-text">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="recommendation-footer">
                  <button className="btn-book">
                    <span className="btn-icon">📅</span> Book Class
                  </button>
                  <button className="btn-details">
                    <span className="btn-icon">👁️</span> View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Empty State */}
      {!isLoading && (!recommendations || recommendations.length === 0) && (
        <div className="empty-state">
          <span className="empty-icon">🤔</span>
          <h3 className="empty-title">No Recommendations Found</h3>
          <p className="empty-text">
            We couldn't find matches based on your profile right now.
          </p>
          <button className="btn-try-again" onClick={handleRegenerate}>
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}
