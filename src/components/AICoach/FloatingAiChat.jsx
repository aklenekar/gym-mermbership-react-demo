import { useState, useRef, useEffect } from "react";
import "./FloatingAiChat.css";
import { aiService } from "../../services/Services";
import ReactMarkdown from "react-markdown";

export default function FloatingAiChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [conversationId] = useState(() => `conv_${Date.now()}`);
  const [messages, setMessages] = useState([
    { role: "ai", content: "Hi! I'm your AI fitness coach. Ask me anything!" },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);

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
          {/* Header */}
          <div className="floating-chat-header">
            <div className="floating-chat-title">
              <span className="chat-icon">💬</span>
              <span>AI Fitness Coach</span>
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
            <div className="quick-prompts-row">
              <button
                className="quick-prompt-btn"
                onClick={() => sendMessage("Improve squat form")}
              >
                Squat form
              </button>
              <button
                className="quick-prompt-btn"
                onClick={() => sendMessage("Pre-workout nutrition")}
              >
                Pre-workout
              </button>
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
                placeholder="Ask your coach..."
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
            <span className="trigger-icon">🤖</span>
            <span className="trigger-text">AI Coach</span>
          </>
        )}
      </button>
    </div>
  );
}