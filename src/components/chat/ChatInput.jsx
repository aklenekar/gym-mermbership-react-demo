// src/components/chat/ChatInput.jsx
import { useRef, useState } from "react";

export default function ChatInput({ onSend, onTyping }) {
  const [value, setValue] = useState("");
  const typingThrottleRef = useRef(false);

  function handleChange(e) {
    setValue(e.target.value);

    if (!typingThrottleRef.current) {
      onTyping();
      typingThrottleRef.current = true;
      setTimeout(() => (typingThrottleRef.current = false), 1500);
    }
  }

  function handleSend() {
    if (!value.trim()) return;
    onSend(value);
    setValue("");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <div className="chat-input-row">
      <textarea
        className="chat-input-textarea"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Type a message..."
        rows="1"
      />
      <button className="btn-send-chat" onClick={handleSend} disabled={!value.trim()}>
        Send
      </button>
    </div>
  );
}