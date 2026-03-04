import "./RecommendedPlanCard.css";

export default function AiChatModal({ isOpen, onClose }) {
  return (
    <>
      {/* AI Chat Modal */}
      <div className="recommendations-modal ai-chat-modal">
        <div className="modal-overlay" onClick={onClose}></div>
        <div className="modal-container">
          <div className="modal-header">
            <h2 className="modal-title">
              <span>💬</span>
              AI Chat Assistant
            </h2>
            <button className="modal-close" onClick={onClose}>
              &times;
            </button>
          </div>

          <div className="ai-modal-body chat-body">
            {/* Chat Messages */}
            <div className="chat-messages" id="chatMessages">
              <div className="chat-message ai-message">
                <div className="message-avatar">🤖</div>
                <div className="message-content">
                  <p>
                    Hi! I'm your AI fitness coach. Ask me anything about
                    workouts, nutrition, form, or training advice!
                  </p>
                </div>
              </div>
            </div>

            {/* Chat Input */}
            <div className="chat-input-section">
              <div className="quick-prompts">
                <button
                  className="quick-prompt"
                  onclick="sendQuickPrompt('How do I improve my squat form?')"
                >
                  Improve squat form
                </button>
                <button
                  className="quick-prompt"
                  onclick="sendQuickPrompt('What should I eat before a workout?')"
                >
                  Pre-workout nutrition
                </button>
                <button
                  className="quick-prompt"
                  onclick="sendQuickPrompt('How to build bigger arms?')"
                >
                  Build bigger arms
                </button>
              </div>

              <div className="chat-input-wrapper">
                <textarea
                  className="chat-input"
                  id="chatInput"
                  placeholder="Ask me anything about fitness..."
                  rows="1"
                  onkeydown="handleChatKeyPress(event)"
                ></textarea>
                <button
                  className="btn-send-message"
                  onclick="sendChatMessage()"
                >
                  <span>📤</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
