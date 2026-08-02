// src/components/chat/ChatThread.jsx
import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";
import LoadingIndicator from "../ui/LoadingIndicator";
import "./ChatPage.css";

export default function ChatThread({
  conversation,
  messages,
  isLoading,
  isTyping,
  onSendMessage,
  onTyping,
}) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <div className="chat-thread">
      <div className="chat-thread-header">
        <div className="conversation-avatar">
          {conversation.participantAvatar || conversation.participantName?.charAt(0)}
        </div>
        <div>
          <div className="chat-thread-name">{conversation.participantName}</div>
          <div className="chat-thread-role">{conversation.participantRole}</div>
        </div>
      </div>

      <div className="chat-thread-body">
        {isLoading ? (
          <LoadingIndicator />
        ) : (
          <>
            {messages.map((message) => (
              <MessageBubble key={message.id} message={message} />
            ))}
            {isTyping && (
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
            <div ref={bottomRef} />
          </>
        )}
      </div>

      <ChatInput onSend={onSendMessage} onTyping={onTyping} />
    </div>
  );
}