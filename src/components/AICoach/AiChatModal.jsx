import { useState, useRef, useEffect } from "react";
import "./RecommendedPlanCard.css";
import { aiService } from "../../services/Services";
import ReactMarkdown from "react-markdown";

export default function AiChatModal({ isOpen, onClose }) {
  const [conversationId] = useState(() => `conv_${Date.now()}`);
  const [messages, setMessages] = useState([
    { role: "ai", content: "Hi! I'm your AI fitness coach. Ask me anything!" },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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

  if (!isOpen) return null;

  function handleOnClose() {
    setMessages([
      {
        role: "ai",
        content: "Hi! I'm your AI fitness coach. Ask me anything!",
      },
    ]);
    setInput("");
    onClose();
  }

  return (
    <div className="recommendations-modal ai-chat-modal">
      <div className="modal-overlay" onClick={handleOnClose}></div>
      <div className="modal-container">
        <div className="modal-header">
          <h2 className="modal-title">
            <span>💬</span> AI Chat Assistant
          </h2>
          <button className="modal-close" onClick={handleOnClose}>
            &times;
          </button>
        </div>

        <div className="ai-modal-body chat-body">
          <div className="chat-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chat-message ${msg.role}-message`}>
                <div className="message-avatar">
                  {msg.role === "ai" ? "🤖" : "👤"}
                </div>
                <div className="message-content">
                  <ReactMarkdown>{msg.content}</ReactMarkdown>
                  {isLoading && idx === messages.length - 1 && !msg.content && (
                    <span className="typing-cursor">|</span>
                  )}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          <div className="chat-input-section">
            <div className="quick-prompts">
              <button
                className="quick-prompt"
                onClick={() => sendMessage("Improve squat form")}
              >
                Improve squat form
              </button>
              <button
                className="quick-prompt"
                onClick={() => sendMessage("Pre-workout nutrition")}
              >
                Pre-workout nutrition
              </button>
            </div>

            <div className="chat-input-wrapper">
              <textarea
                className="chat-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  !e.shiftKey &&
                  (e.preventDefault(), sendMessage(input))
                }
                placeholder="Ask me anything..."
                rows="1"
              />
              <button
                className="btn-send-message"
                onClick={() => sendMessage(input)}
                disabled={isLoading}
              >
                <span>📤</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
