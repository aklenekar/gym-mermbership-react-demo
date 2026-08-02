// src/components/chat/ConversationList.jsx
import { useRef } from "react";
import NewConversationModal from "./NewConversationModal";
import "./ChatPage.css";

export default function ConversationList({
  conversations,
  activeConversationId,
  onSelect,
  onConversationStarted,
}) {
  const dialogRef = useRef(null);
  const openModal = () => dialogRef.current.showModal();
  const closeModal = () => dialogRef.current.close();

  return (
    <div className="conversation-list">
      <dialog ref={dialogRef}>
        <NewConversationModal
          closeModal={closeModal}
          onConversationStarted={onConversationStarted}
        />
      </dialog>

      <div className="conversation-list-header">
        <h3>Conversations</h3>
        <button className="btn-new-message" onClick={openModal}>+ New</button>
      </div>

      <div className="conversation-list-body">
        {conversations.length === 0 && (
          <p className="conversation-empty-text">No conversations yet. Start one!</p>
        )}
        {conversations.map((conversation) => (
          <button
            key={conversation.id}
            className={`conversation-item ${conversation.id === activeConversationId ? "active" : ""}`}
            onClick={() => onSelect(conversation)}
          >
            <div className="conversation-avatar">
              {conversation.participantAvatar || conversation.participantName?.charAt(0)}
            </div>
            <div className="conversation-info">
              <div className="conversation-top-row">
                <span className="conversation-name">{conversation.participantName}</span>
                <span className="conversation-time">{formatTime(conversation.lastMessageAt)}</span>
              </div>
              <div className="conversation-bottom-row">
                <span className="conversation-preview">
                  {conversation.lastMessagePreview || "Start a conversation"}
                </span>
                {conversation.unreadCount > 0 && (
                  <span className="conversation-unread-badge">{conversation.unreadCount}</span>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function formatTime(dateString) {
  if (!dateString) return "";
  const date = new Date(dateString);
  const now = new Date();
  const isToday = date.toDateString() === now.toDateString();
  return isToday
    ? date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    : date.toLocaleDateString([], { month: "short", day: "numeric" });
}