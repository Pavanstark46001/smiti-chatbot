import React, { useState, useEffect, useRef } from "react";
import "./ConstructionChatbot.css";

export default function ConstructionChatbot() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text:
        "👷‍♂️ Welcome to Smiti Construction.\n\n" +
        "We are a Bangalore-based construction company offering:\n" +
        "• Complete House Construction\n" +
        "• Renovation Works\n" +
        "• Interior Design\n\n" +
        "Please select a service to continue."
    }
  ]);

  const [step, setStep] = useState("SELECT_SERVICE");
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const addMessage = (sender, text) => {
    setMessages(prev => [...prev, { sender, text }]);
  };

  /* =========================
     SERVICE SELECTION
     ========================= */
  const selectService = (service) => {
    addMessage("user", service);

    if (service === "Complete House Construction") {
      addMessage("bot", "📐 What is your plot size (sq ft)?");
      setStep("CONST_PLOT");
    }

    if (service === "Renovation") {
      addMessage("bot", "🔨 Is it Full renovation or Partial renovation?");
      setStep("RENO_TYPE");
    }

    if (service === "Interior Design") {
      addMessage("bot", "🛋️ Which interiors are you looking for?");
      setStep("INT_ROOM");
    }
  };

  /* =========================
     TEXT INPUT HANDLER
     ========================= */
  const handleInput = (value) => {
    addMessage("user", value);

    // Construction flow
    if (step === "CONST_PLOT") {
      addMessage("bot", "📍 Which location is your plot in?");
      setStep("CONST_LOCATION");
      return;
    }

    if (step === "CONST_LOCATION") {
      addMessage("bot", "💰 What is your approximate budget range?");
      setStep("CONST_BUDGET");
      return;
    }

    if (step === "CONST_BUDGET") {
      addMessage(
        "bot",
        "🏗️ Construction Process:\n" +
        "• Planning & Design\n" +
        "• Foundation\n" +
        "• Structure & Brickwork\n" +
        "• Electrical & Plumbing\n" +
        "• Interior & Finishing"
      );
      askContactMode();
      return;
    }

    // Renovation flow
    if (step === "RENO_TYPE") {
      addMessage("bot", "🏠 How old is the existing house?");
      setStep("RENO_AGE");
      return;
    }

    if (step === "RENO_AGE") {
      addMessage(
        "bot",
        "🔧 Renovation Stages:\n" +
        "• Site inspection\n" +
        "• Civil changes\n" +
        "• Electrical & Plumbing\n" +
        "• Finishing\n\n" +
        "⏱️ Typical timeline: 30–90 days"
      );
      askContactMode();
      return;
    }

    // Interior flow
    if (step === "INT_ROOM") {
      addMessage("bot", "💰 What is your budget range?");
      setStep("INT_BUDGET");
      return;
    }

    if (step === "INT_BUDGET") {
      addMessage(
        "bot",
        "🪑 Interior Services:\n" +
        "• Modular Kitchen\n" +
        "• Wardrobes\n" +
        "• False Ceiling\n" +
        "• Lighting & Painting"
      );
      askContactMode();
      return;
    }

    // Contact details
    if (step === "CONTACT_PHONE") {
      addMessage(
        "bot",
        "✅ Thank you. Our technical team will contact you via phone shortly.\n\n" +
        "We appreciate your interest in Smiti Construction."
      );
      setStep("DONE");
      return;
    }

    if (step === "CONTACT_WHATSAPP") {
      addMessage(
        "bot",
        "✅ Thank you. Our technical team will reach you on WhatsApp shortly.\n\n" +
        "We appreciate your interest in Smiti Construction."
      );
      setStep("DONE");
      return;
    }

    if (step === "CONTACT_EMAIL") {
      addMessage(
        "bot",
        "✅ Thank you. Our technical team will contact you via email shortly.\n\n" +
        "We appreciate your interest in Smiti Construction."
      );
      setStep("DONE");
    }
  };

  /* =========================
     CONTACT MODE
     ========================= */
  const askContactMode = () => {
    addMessage(
      "bot",
      "📞 Our technical team will contact you shortly.\n" +
      "Please choose your preferred contact method."
    );
    setStep("CONTACT_MODE");
  };

  const selectContactMode = (mode) => {
    addMessage("user", mode);

    if (mode === "Phone Call") {
      addMessage("bot", "📞 Please enter your phone number.");
      setStep("CONTACT_PHONE");
    }

    if (mode === "WhatsApp") {
      addMessage("bot", "💬 Please enter your WhatsApp number.");
      setStep("CONTACT_WHATSAPP");
    }

    if (mode === "Email") {
      addMessage("bot", "📧 Please enter your email address.");
      setStep("CONTACT_EMAIL");
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">Smiti Construction Assistant</div>

      <div className="chatbot-body">
        {messages.map((m, i) => (
          <div key={i} className={`chat-row ${m.sender}`}>
            <div className={`chat-bubble ${m.sender}`}>{m.text}</div>
          </div>
        ))}

        {step === "SELECT_SERVICE" && (
          <div className="options">
            <button onClick={() => selectService("Complete House Construction")}>
              Complete House Construction
            </button>
            <button onClick={() => selectService("Renovation")}>
              Renovation
            </button>
            <button onClick={() => selectService("Interior Design")}>
              Interior Design
            </button>
          </div>
        )}

        {step === "CONTACT_MODE" && (
          <div className="options">
            <button onClick={() => selectContactMode("Phone Call")}>📞 Phone Call</button>
            <button onClick={() => selectContactMode("WhatsApp")}>💬 WhatsApp</button>
            <button onClick={() => selectContactMode("Email")}>📧 Email</button>
          </div>
        )}

        <div ref={chatEndRef}></div>
      </div>

      {step !== "SELECT_SERVICE" &&
       step !== "CONTACT_MODE" &&
       step !== "DONE" && (
        <ChatInput onSend={handleInput} />
      )}
    </div>
  );
}

/* =========================
   INPUT COMPONENT
   ========================= */
function ChatInput({ onSend }) {
  const [value, setValue] = useState("");

  const send = () => {
    if (!value.trim()) return;
    onSend(value);
    setValue("");
  };

  return (
    <div className="chat-input">
      <input
        placeholder="Type here..."
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyDown={e => e.key === "Enter" && send()}
      />
      <button onClick={send}>Send</button>
    </div>
  );
}
