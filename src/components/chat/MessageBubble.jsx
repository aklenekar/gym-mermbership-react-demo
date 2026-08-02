// src/components/chat/MessageBubble.jsx
export default function MessageBubble({ message }) {
  return (
    <div className={`message-row ${message.isOwnMessage ? "own" : "other"}`}>
      <div className="message-bubble">
        <p className="message-content">{message.content}</p>
        <div className="message-meta">
          <span className="message-time">
            {new Date(message.sentAt).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
          {message.isOwnMessage && (
            <span className={`message-status ${message.status.toLowerCase()}`}>
              {message.status === "READ" ? "✓✓" : message.status === "DELIVERED" ? "✓✓" : "✓"}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}