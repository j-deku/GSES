import { useContext, useState, useEffect, useRef } from "react";
import "./Bot.css";
import { Comment } from "@mui/icons-material";
import { FaPaperPlane, FaRobot } from "react-icons/fa";
import axios from "axios";
import { StoreContext } from "../../context/StoreContext";

const Bot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false); // To indicate bot typing
  const { url } = useContext(StoreContext);
  const messagesEndRef = useRef(null);

  // Toggle chat visibility
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Scroll to the latest message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Handle sending a message
  const sendMessage = async () => {
    if (input.trim()) {
      const userMessage = { sender: "user", text: input };
      setMessages((prev) => [...prev, userMessage]);
      setInput("");

      // Simulate bot typing
      setIsTyping(true);
      setMessages((prev) => [...prev, { sender: "bot", text: "Typing..." }]);

      try {
        const response = await axios.post(`${url}/api/chat/bot`, {
          history: [...messages, userMessage],
          message: input,
        });

        // Replace "Typing..." with bot's response
        setMessages((prev) => [
          ...prev.slice(0, -1),
          { sender: "bot", text: response.data.reply },
        ]);
      } catch (error) {
        // Replace "Typing..." with error message
        setMessages((prev) => [
          ...prev.slice(0, -1),
          {
            sender: "bot",
            text: "An error occurred. Please try again later.",
          },
        ]);
        console.error("Error:", error.message);
      } finally {
        setIsTyping(false);
      }
    }
  };

  // Automatically scroll to the bottom when messages update
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="chatbot-container">
      <button className="chatbot-button" onClick={toggleChat}>
        <Comment style={{ color: "#fff", width: "40px", height: "40px" }} />
      </button>

      {isOpen && (
        <div className="chatbot-dialog">
          {/* Chat Header */}
          <div className="chatbot-header">
            <FaRobot style={{ width: "40px", height: "40px", color: "#ccc" }} />
            <button className="close-button" onClick={toggleChat}>
              &times;
            </button>
          </div>

          {/* Chat Messages */}
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chatbot-message ${
                  msg.sender === "user" ? "user-message" : "bot-message"
                }`}
              >
                {msg.sender === "bot" ? `Bot: ${msg.text}` : `You: ${msg.text}`}
              </div>
            ))}
            <div ref={messagesEndRef}></div>
          </div>

          {/* Chat Input */}
          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>
              <FaPaperPlane
                style={{
                  color: "#333",
                  width: "40px",
                  height: "20px",
                  margin: "10px",
                }}
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bot;
