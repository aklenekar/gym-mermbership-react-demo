import { useState, useRef, useEffect } from "react";
import "./FloatingAiChat.css";
import { aiService } from "../../services/Services";
import { getUserRole } from "../../util/auth";
import ReactMarkdown from "react-markdown";

// Role-specific UI, prompts, and greetings
const ROLE_CONFIGS = {
  ADMIN: {
    title: "AI Admin Assistant",
    icon: "⚙️",
    initialMessage:
      "Hello Admin! How can I assist you today? I can help with platform analytics, revenue reports, or user management guidelines.",
    placeholder: "Ask about gym operations, platform stats, or user management...",
    quickPrompts: [
      "Member retention stats",
      "Revenue insights",
      "System health status",
    ],
  },
  TRAINER: {
    title: "AI Trainer Co-Pilot",
    icon: "📋",
    initialMessage:
      "Welcome Coach! Need assistance designing custom client routines, calculating macro splits, or writing exercise cues?",
    placeholder: "Ask about program design, exercise progressions, client tracking...",
    quickPrompts: [
      "Hypertrophy split 4-day",
      "Regression for knee pain",
      "Macro calculation rules",
    ],
  },
  USER: {
    title: "AI Fitness Coach",
    icon: "💬",
    initialMessage:
      "Hi! I'm your personal AI fitness coach. Ask me anything about your workouts, form, or nutrition targets!",
    placeholder: "Ask your coach...",
    quickPrompts: [
      "Squat form tips",
      "Pre-workout nutrition",
      "Fat loss strategies",
    ],
  },
  GUEST: {
    title: "Gym Assistant",
    icon: "👋",
    initialMessage:
      "Welcome to our gym! 👋 I'm here to answer any questions about our facilities, membership plans, trainer profiles, or class schedules. How can I help you?",
    placeholder: "Ask about memberships, class times, facilities...",
    quickPrompts: [
      "Membership plans & pricing",
      "Gym opening hours",
      "Available group classes",
    ],
  },
};

export default function FloatingAiChat({ userRole }) {
  // Determine role: use explicit prop if passed, otherwise call getUserRole(), fallback to 'GUEST'
  const activeRole = (userRole || getUserRole() || "GUEST").toUpperCase();
  const currentConfig = ROLE_CONFIGS[activeRole] || ROLE_CONFIGS.GUEST;

  const [isOpen, setIsOpen] = useState(false);
  const [conversationId] = useState(() => `conv_${Date.now()}`);

  // Dynamic initial message based on active role configuration
  const [messages, setMessages] = useState(() => [
    { role: "ai", content: currentConfig.initialMessage },
  ]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);

  // Update initial message if the active role changes
  useEffect(() => {
    setMessages([{ role: "ai", content: currentConfig.initialMessage }]);
  }, [activeRole]);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  async function sendMessage(text) {
    if (!text.trim() || isLoading) return;

    const userMessage = { role: "user", content: text };
    setMessages((prev) => [...prev, userMessage, { role: "ai", content: "" }]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await aiService.chat({
        message: text,
        conversationId: conversationId,
        role: activeRole, // Sends "ADMIN", "TRAINER", "USER", or "GUEST" to backend
      });

      if (!response.body) throw new Error("No response body");

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let done = false;

      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        if (value) {
          const piece = decoder.decode(value, { stream: true });

          if (piece) {
            setMessages((prev) => {
              const updated = [...prev];
              const lastIndex = updated.length - 1;

              const currentContent = updated[lastIndex].content;
              if (!currentContent.endsWith(piece)) {
                updated[lastIndex].content += piece;
              }

              return updated;
            });
          }
        }
      }
    } catch (error) {
      console.error("Streaming error:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="floating-chat-container">
      {/* Expanded Chat Window */}
      {isOpen && (
        <div className="floating-chat-window">
          {/* Dynamic Header */}
          <div className="floating-chat-header">
            <div className="floating-chat-title">
              <span className="chat-icon">{currentConfig.icon}</span>
              <span>{currentConfig.title}</span>
            </div>
            <button
              className="floating-chat-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close Chat"
            >
              &times;
            </button>
          </div>

          {/* Messages Body */}
          <div className="floating-chat-body">
            <div className="chat-messages-list">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`floating-chat-message ${msg.role}-message`}
                >
                  <div className="message-avatar">
                    {msg.role === "ai" ? "🤖" : "👤"}
                  </div>
                  <div className="message-content">
                    <ReactMarkdown>{msg.content}</ReactMarkdown>
                    {isLoading &&
                      idx === messages.length - 1 &&
                      !msg.content && (
                        <span className="typing-cursor">|</span>
                      )}
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
          </div>

          {/* Input & Quick Prompts Footer */}
          <div className="floating-chat-footer">
            {/* Dynamic Quick Prompts */}
            <div className="quick-prompts-row">
              {currentConfig.quickPrompts.map((promptText, idx) => (
                <button
                  key={idx}
                  className="quick-prompt-btn"
                  onClick={() => sendMessage(promptText)}
                >
                  {promptText}
                </button>
              ))}
            </div>

            <div className="chat-input-box">
              <textarea
                className="chat-textarea"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  !e.shiftKey &&
                  (e.preventDefault(), sendMessage(input))
                }
                placeholder={currentConfig.placeholder}
                rows="1"
              />
              <button
                className="chat-send-btn"
                onClick={() => sendMessage(input)}
                disabled={isLoading || !input.trim()}
              >
                📤
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        className={`floating-chat-trigger ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle AI Chat"
      >
        {isOpen ? (
          <span className="trigger-icon">✕</span>
        ) : (
          <>
            <span className="trigger-icon">{currentConfig.icon}</span>
            <span className="trigger-text">{currentConfig.title}</span>
          </>
        )}
      </button>
    </div>
  );
}