// src/components/chat/EmptyConversationState.jsx
export default function EmptyConversationState() {
  return (
    <div className="empty-conversation-state">
      <span className="empty-conversation-icon">💬</span>
      <h3>Select a conversation</h3>
      <p>Choose a conversation from the list to start chatting.</p>
    </div>
  );
}