import { useState } from "react";
import { FaCamera, FaPaperPlane, FaRobot } from "react-icons/fa";

type Message = {
  sender: "user" | "bot";
  text: string;
};

const FarmerChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "🙏 Namaste Kisan bhai! Apni fasal se related sawal poochiye.",
    },
  ]);
  const [input, setInput] = useState("");
  const [language, setLanguage] = useState("hi");
  const [image, setImage] = useState<File | null>(null);

  const handleSend = () => {
    if (!input.trim() && !image) return;

    const userMsg: Message = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    // 🤖 Dummy AI Response (later connect OpenAI)
    const botReply: Message = {
      sender: "bot",
      text:
        language === "hi"
          ? "🌾 Aapki fasal ke liye mitti aur pani bahut important hai. Thoda detail batayein."
          : language === "mr"
          ? "🌱 तुमच्या पिकासाठी पाणी आणि खत खूप महत्त्वाचे आहे."
          : "🌱 For better crop yield, proper irrigation and nutrients are required.",
    };

    setTimeout(() => {
      setMessages((prev) => [...prev, botReply]);
    }, 800);

    setInput("");
    setImage(null);
  };

  return (
    <div className="min-h-screen bg-green-50 p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg flex flex-col h-[85vh]">

        {/* HEADER */}
        <div className="p-4 bg-green-700 text-white rounded-t-xl flex justify-between items-center">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <FaRobot /> Farmer AI Chat
          </h2>

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="text-black rounded px-2 py-1"
          >
            <option value="hi">Hindi</option>
            <option value="en">English</option>
            <option value="mr">Marathi</option>
          </select>
        </div>

        {/* CHAT BODY */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`max-w-[75%] p-3 rounded-lg text-sm ${
                msg.sender === "user"
                  ? "bg-green-600 text-white ml-auto"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* IMAGE PREVIEW */}
        {image && (
          <div className="px-4 pb-2">
            <p className="text-sm text-gray-600">📸 Image selected: {image.name}</p>
          </div>
        )}

        {/* INPUT AREA */}
        <div className="p-4 border-t flex items-center gap-2">
          <label className="cursor-pointer text-green-700 text-xl">
            <FaCamera />
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => setImage(e.target.files?.[0] || null)}
            />
          </label>

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Apna sawal likhiye (crop, disease, fertilizer...)"
            className="flex-1 border rounded px-3 py-2 focus:outline-none"
          />

          <button
            onClick={handleSend}
            className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded flex items-center gap-1"
          >
            <FaPaperPlane /> Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default FarmerChat;
