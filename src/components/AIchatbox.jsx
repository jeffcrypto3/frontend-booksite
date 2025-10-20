import React, { useState } from "react";
import "../styles/aiChatButton.css";

const AIChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([
    { sender: "ai", text: "👋 Hi there! I’m your AI assistant." },
    { sender: "ai", text: "Ask me about our books, mission, or how to get involved." },
  ]);
  const [loading, setLoading] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = async () => {
    if (!message.trim()) return;

    const newChat = [...chat, { sender: "user", text: message }];
    setChat(newChat);
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5050/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      const aiReply = data.reply || "Sorry, I didn’t get that.";

      setChat([...newChat, { sender: "ai", text: aiReply }]);
    } catch (error) {
      console.error(error);
      setChat([...newChat, { sender: "ai", text: "⚠️ Something went wrong. Please try again." }]);
    }

    setLoading(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        className="ai-chat-btn"
        onClick={toggleChat}
        title="Got a question? Chat with our AI to learn more about our books, projects, or how to get involved."
      >
        💬 AI Chat Assistant
      </button>

      {/* Popup Chat Window */}
      {isOpen && (
        <div className="chat-popup">
          <div className="chat-header">
            <h4>Azimi Koko AI Assistant</h4>
            <button className="close-btn" onClick={toggleChat}>
              ✖
            </button>
          </div>

          <div className="chat-body">
            {chat.map((msg, i) => (
              <p key={i} className={msg.sender === "user" ? "user-msg" : "ai-msg"}>
                {msg.text}
              </p>
            ))}

            {loading && <p className="ai-msg">Typing...</p>}
          </div>

          <div className="chat-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatButton;
