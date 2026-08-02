// src/components/chat/ChatPage.jsx
import { useEffect, useRef, useState, useCallback } from "react";
import PageHeader from "../pageHeader/PageHeader";
import "./ChatPage.css";
import ConversationList from "./ConversationList";
import ChatThread from "./ChatThread";
import EmptyConversationState from "./EmptyConversationState";
import LoadingIndicator from "../ui/LoadingIndicator";
import { chatService } from "../../services/Services";
import webSocketService from "../../services/WebSocketService";
import { getAuthToken } from "../../util/auth";
import { useLocation } from "react-router-dom";

export default function Chat() {
  const [conversations, setConversations] = useState([]);
  const [activeConversation, setActiveConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [typingUserId, setTypingUserId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const typingTimeoutRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const token = getAuthToken();
    webSocketService.connect(token);
    return () => webSocketService.disconnect();
  }, []);

  useEffect(() => {
    fetchConversations();
  }, []);

  useEffect(() => {
    const targetId = location.state?.conversationId;
    if (!targetId || conversations.length === 0) return;

    const target = conversations.find((c) => c.id === targetId);
    if (target) selectConversation(target);
  }, [conversations, location.state]);

  function fetchConversations() {
    setIsLoading(true);
    chatService
      .fetchConversations()
      .then((data) => setConversations(data.conversations))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }

  const handleIncomingMessage = useCallback(
    (message) => {
      setMessages((prev) => {
        if (
          !activeConversation ||
          message.conversationId !== activeConversation.id
        ) {
          return prev;
        }
        return [...prev, message];
      });

      setConversations((prev) =>
        prev
          .map((c) =>
            c.id === message.conversationId
              ? {
                  ...c,
                  lastMessagePreview: message.content,
                  lastMessageAt: message.sentAt,
                  unreadCount:
                    activeConversation?.id === message.conversationId
                      ? 0
                      : c.unreadCount + 1,
                }
              : c,
          )
          .sort(
            (a, b) => new Date(b.lastMessageAt) - new Date(a.lastMessageAt),
          ),
      );
    },
    [activeConversation],
  );

  function selectConversation(conversation) {
    setActiveConversation(conversation);
    setMessages([]);
    setIsLoading(true);

    chatService
      .fetchMessageHistory(conversation.id)
      .then((data) => setMessages(data.messages))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));

    chatService
      .markAsRead(conversation.id)
      .catch((error) => console.error(error));

    setConversations((prev) =>
      prev.map((c) =>
        c.id === conversation.id ? { ...c, unreadCount: 0 } : c,
      ),
    );

    webSocketService.subscribeToConversation(
      conversation.id,
      handleIncomingMessage,
    );
    webSocketService.subscribeToTyping(conversation.id, (senderId) => {
      setTypingUserId(senderId);
      clearTimeout(typingTimeoutRef.current);
      typingTimeoutRef.current = setTimeout(() => setTypingUserId(null), 3000);
    });
  }

  function sendMessage(content) {
    if (!activeConversation || !content.trim()) return;

    webSocketService.sendMessage({
      conversationId: activeConversation.id,
      content: content.trim(),
    });
  }

  function sendTyping() {
    if (!activeConversation) return;
    webSocketService.sendTyping(activeConversation.id);
  }

  function handleConversationStarted(conversation) {
    setConversations((prev) => {
      const exists = prev.find((c) => c.id === conversation.id);
      return exists ? prev : [conversation, ...prev];
    });
    selectConversation(conversation);
  }

  return (
    <>
      <PageHeader
        title="MESSAGES"
        subTitle="Chat with your trainers and members"
      />
      <section className="chat-page-section">
        <div className="container">
          <div className="chat-layout">
            <ConversationList
              conversations={conversations}
              activeConversationId={activeConversation?.id}
              onSelect={selectConversation}
              onConversationStarted={handleConversationStarted}
            />
            {activeConversation ? (
              <ChatThread
                conversation={activeConversation}
                messages={messages}
                isLoading={isLoading}
                isTyping={typingUserId === activeConversation.participantId}
                onSendMessage={sendMessage}
                onTyping={sendTyping}
              />
            ) : (
              <EmptyConversationState />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
