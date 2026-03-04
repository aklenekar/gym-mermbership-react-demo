import "./RecommendedPlanCard.css";

// Full Modal Component with Recommendations List

export default function RecommendationsModal({
  isOpen,
  onClose,
  recommendations,
  isLoading,
  handleRegenerate,
}) {
  if (!isOpen) return null;

  return (
    <div className="recommendations-modal">
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-container">
        {/* Header */}
        <div className="modal-header">
          <div className="header-content">
            <h2 className="modal-title">
              <span className="title-icon">🤖</span>
              AI Recommended Classes For You
            </h2>
            <p className="modal-subtitle">
              Personalized suggestions based on your fitness profile
            </p>
          </div>
          <button className="modal-close" onClick={onClose}>
            &times;
          </button>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="loading-state">
            <div className="loading-spinner"></div>
            <p className="loading-text">Analyzing your fitness profile...</p>
            <p className="loading-subtext">This may take a few seconds</p>
          </div>
        )}

        {/* Recommendations List */}
        {!isLoading && recommendations && recommendations.length > 0 && (
          <>
            <div className="recommendations-summary">
              <div className="summary-badge">
                <span className="summary-icon">✨</span>
                <span className="summary-text">
                  {recommendations.length} Perfect Matches Found
                </span>
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
            </div>

            <div className="recommendations-list">
              {recommendations.map((rec, index) => (
                <div key={index} className="recommendation-card">
                  {/* Rank Badge */}
                  <div className="rank-badge">#{index + 1}</div>

                  {/* Header */}
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
                                  ? "linear-gradient(90deg, #00d084, #00f2b8)"
                                  : rec.matchPercentage >= 85
                                    ? "linear-gradient(90deg, var(--primary), var(--primary-light))"
                                    : "linear-gradient(90deg, #ffd600, #ffed4e)",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="recommendation-body">
                    {/* Reasoning */}
                    <div className="info-section reasoning-section">
                      <div className="section-header">
                        <span className="section-icon">💡</span>
                        <h4 className="section-title">Why This Class?</h4>
                      </div>
                      <p className="reasoning-text">{rec.reasoning}</p>
                    </div>

                    {/* Benefits */}
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

                  {/* Footer */}
                  <div className="recommendation-footer">
                    <button
                      className="btn-book"
                      onClick={() => handleBook(rec.className)}
                    >
                      <span className="btn-icon">📅</span>
                      Book This Class
                    </button>
                    <button
                      className="btn-details"
                      onClick={() => handleViewDetails(rec.className)}
                    >
                      <span className="btn-icon">👁️</span>
                      View Schedule
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="modal-footer">
              <button className="btn-close" onClick={onClose}>
                Close
              </button>
              <button className="btn-regenerate" onClick={handleRegenerate}>
                <span className="btn-icon">🔄</span>
                Get New Recommendations
              </button>
            </div>
          </>
        )}

        {/* Empty State */}
        {!isLoading && (!recommendations || recommendations.length === 0) && (
          <div className="empty-state">
            <span className="empty-icon">🤔</span>
            <h3 className="empty-title">No Recommendations Found</h3>
            <p className="empty-text">
              We couldn't find suitable classes based on your profile. Try
              updating your fitness goals or preferences.
            </p>
            <button className="btn-try-again" onClick={handleRegenerate}>
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
