// src/services/WebSocketService.js
import { Client } from "@stomp/stompjs";
import { API_BASE_URL } from "../util/constants";

class WebSocketService {
  client = null;
  subscriptions = new Map();

  connect(token) {
    const wsUrl = API_BASE_URL.replace(/^http/, "ws").replace("/api", "") + "/ws-chat";
    this.client = new Client({
      brokerURL: wsUrl,
      connectHeaders: { Authorization: `Bearer ${token}` },
      reconnectDelay: 5000,
    });
    this.client.activate();
  }

  disconnect() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
    this.subscriptions.clear();
    this.client?.deactivate();
  }

  subscribeToConversation(conversationId, onMessage) {
    const key = `conv-${conversationId}`;
    this.subscriptions.get(key)?.unsubscribe();

    const subscribe = () => {
      const sub = this.client.subscribe(
        `/topic/conversation/${conversationId}`,
        (frame) => {
          onMessage(JSON.parse(frame.body));
        },
      );
      this.subscriptions.set(key, sub);
    };

    this.client.connected ? subscribe() : (this.client.onConnect = subscribe);
  }

  subscribeToTyping(conversationId, onTyping) {
    const key = `typing-${conversationId}`;
    this.subscriptions.get(key)?.unsubscribe();

    const subscribe = () => {
      const sub = this.client.subscribe(
        `/topic/conversation/${conversationId}/typing`,
        (frame) => {
          onTyping(JSON.parse(frame.body).senderId);
        },
      );
      this.subscriptions.set(key, sub);
    };

    this.client.connected ? subscribe() : (this.client.onConnect = subscribe);
  }

  sendMessage(payload) {
    this.client.publish({
      destination: "/app/chat.send",
      body: JSON.stringify(payload),
    });
  }

  sendTyping(conversationId) {
    this.client.publish({
      destination: "/app/chat.typing",
      body: JSON.stringify({ conversationId }),
    });
  }
}

export default new WebSocketService();
