import { useNavigate } from "react-router-dom";
import { chatService } from "../../services/Services";

export default function StartChatButton({ trainerId, className = "action-btn" }) {
  const navigate = useNavigate();

  async function handleClick() {
    try {
      const conversation = await chatService.startConversation(trainerId);
      navigate("/messages", { state: { conversationId: conversation.id } });
    } catch (error) {
      console.error("Failed to start conversation:", error);
    }
  }

  return (
    <button className={className} onClick={handleClick}>
      <span className="action-icon">💬</span>
      <span className="action-text">Message Trainer</span>
    </button>
  );
}