import { useState, useRef, useEffect } from "react";
import { FaCamera, FaPaperPlane, FaRobot, FaUser, FaTrash, FaMicrophone } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

type Message = {
  id: string;
  sender: "user" | "bot";
  text: string;
  imageUrl?: string;
  timestamp: Date;
};

const QUICK_QUESTIONS = {
  en: ["Which fertilizer for wheat?", "How to treat leaf rust?", "Best time to sow rice?", "What is MSP today?"],
  hi: ["गेहूं के लिए कौन सी खाद?", "पत्ती के रतुए का इलाज?", "धान की बुवाई का सही समय?", "आज का MSP क्या है?"],
  mr: ["गव्हासाठी कोणते खत?", "पानांच्या गंजावर उपाय?", "भात पेरणीचा सर्वोत्तम वेळ?", "आजचा MSP काय आहे?"],
};

const WELCOME_MSG = {
  en: "🙏 Namaste! I'm KisanMitra AI — your smart farming assistant. Ask me anything about crops, diseases, fertilizers, market prices, or government schemes!",
  hi: "🙏 नमस्ते! मैं किसानमित्र AI हूं — आपका स्मार्ट कृषि सहायक। फसल, बीमारी, खाद, बाजार भाव या सरकारी योजनाओं के बारे में कुछ भी पूछें!",
  mr: "🙏 नमस्ते! मी किसानमित्र AI आहे — तुमचा स्मार्ट शेती सहाय्यक. पीक, रोग, खत, बाजारभाव किंवा सरकारी योजनांबद्दल काहीही विचारा!",
};

const FarmerChat: React.FC = () => {
  const { lang } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "bot",
      text: WELCOME_MSG[lang],
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const t = {
    en: {
      title: "KisanMitra AI Chat",
      subtitle: "Smart Farming Assistant",
      placeholder: "Ask about crops, diseases, fertilizers...",
      send: "Send",
      clear: "Clear Chat",
      quickQ: "Quick Questions",
      thinking: "Thinking...",
      removeImg: "Remove image",
    },
    hi: {
      title: "किसानमित्र AI चैट",
      subtitle: "स्मार्ट कृषि सहायक",
      placeholder: "फसल, बीमारी, खाद के बारे में पूछें...",
      send: "भेजें",
      clear: "चैट साफ करें",
      quickQ: "त्वरित प्रश्न",
      thinking: "सोच रहा हूं...",
      removeImg: "छवि हटाएं",
    },
    mr: {
      title: "किसानमित्र AI चॅट",
      subtitle: "स्मार्ट शेती सहाय्यक",
      placeholder: "पीक, रोग, खताबद्दल विचारा...",
      send: "पाठवा",
      clear: "चॅट साफ करा",
      quickQ: "त्वरित प्रश्न",
      thinking: "विचार करतो...",
      removeImg: "फोटो काढा",
    },
  };

  const text = t[lang];

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    setMessages([{
      id: "welcome",
      sender: "bot",
      text: WELCOME_MSG[lang],
      timestamp: new Date(),
    }]);
  }, [lang]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSend = async (question?: string) => {
    const messageText = question || input.trim();
    if (!messageText && !image) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: messageText,
      imageUrl: imagePreview || undefined,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setImage(null);
    setImagePreview(null);
    setLoading(true);

    try {
      const systemPrompt = `You are KisanMitra AI, a smart farming assistant for Indian farmers. 
      You specialize in: crop advisory, disease identification, pest management, fertilizer recommendations, 
      irrigation guidance, government schemes (PM-KISAN, PMFBY, KCC), mandi prices, and weather-based farming tips.
      Always respond in ${lang === "hi" ? "Hindi" : lang === "mr" ? "Marathi" : "English"}.
      Keep responses practical, concise, and farmer-friendly. Use simple language.
      When discussing chemicals/pesticides, always mention safety precautions.
      Always end with an encouraging note for the farmer.`;

      const userContent: any[] = [];
      
      if (imagePreview) {
        const base64Data = imagePreview.split(",")[1];
        const mimeType = imagePreview.split(";")[0].split(":")[1];
        userContent.push({
          type: "image",
          source: { type: "base64", media_type: mimeType, data: base64Data }
        });
        userContent.push({ type: "text", text: messageText || "Please identify the disease or issue in this crop image and suggest remedies." });
      } else {
        userContent.push({ type: "text", text: messageText });
      }

      const conversationHistory = messages
        .filter(m => m.id !== "welcome")
        .slice(-6)
        .map(m => ({
          role: m.sender === "user" ? "user" : "assistant",
          content: m.text,
        }));

      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: systemPrompt,
          messages: [
            ...conversationHistory,
            { role: "user", content: userContent }
          ],
        }),
      });

      const data = await response.json();
      const botText = data.content?.[0]?.text || "Sorry, I could not get a response. Please try again.";

      setMessages(prev => [...prev, {
        id: Date.now().toString() + "_bot",
        sender: "bot",
        text: botText,
        timestamp: new Date(),
      }]);
    } catch (error) {
      setMessages(prev => [...prev, {
        id: Date.now().toString() + "_err",
        sender: "bot",
        text: lang === "hi" 
          ? "माफ करें, कनेक्शन में समस्या है। कृपया दोबारा कोशिश करें।" 
          : lang === "mr"
          ? "माफ करा, कनेक्शन समस्या आहे. पुन्हा प्रयत्न करा."
          : "Sorry, connection issue. Please try again.",
        timestamp: new Date(),
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const clearChat = () => {
    setMessages([{
      id: "welcome",
      sender: "bot",
      text: WELCOME_MSG[lang],
      timestamp: new Date(),
    }]);
  };

  const formatTime = (date: Date) =>
    date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 p-4 md:p-6">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700&family=Hind:wght@400;500&display=swap');
        .chat-bubble { animation: popIn 0.2s cubic-bezier(0.34, 1.56, 0.64, 1); }
        @keyframes popIn { from { opacity:0; transform:scale(0.9) translateY(8px); } to { opacity:1; transform:none; } }
        .quick-btn { transition: all 0.15s ease; }
        .quick-btn:hover { transform: translateY(-2px); }
        .typing-dot { animation: bounce 1s infinite; }
        .typing-dot:nth-child(2) { animation-delay: 0.15s; }
        .typing-dot:nth-child(3) { animation-delay: 0.3s; }
        @keyframes bounce { 0%,80%,100% { transform: translateY(0); } 40% { transform: translateY(-6px); } }
      `}</style>

      <div className="max-w-4xl mx-auto">
        {/* HEADER */}
        <div className="bg-gradient-to-r from-green-700 to-emerald-600 rounded-t-2xl p-5 flex items-center justify-between shadow-lg">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center text-2xl">🤖</div>
            <div>
              <h2 className="text-white font-bold text-lg" style={{ fontFamily: "'Baloo 2', cursive" }}>
                {text.title}
              </h2>
              <p className="text-green-200 text-xs flex items-center gap-1">
                <span className="w-2 h-2 bg-green-300 rounded-full inline-block animate-pulse"></span>
                {text.subtitle}
              </p>
            </div>
          </div>
          <button
            onClick={clearChat}
            className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white text-sm px-3 py-2 rounded-xl transition"
          >
            <FaTrash className="text-xs" /> {text.clear}
          </button>
        </div>

        {/* QUICK QUESTIONS */}
        <div className="bg-green-50 border-x border-green-100 px-4 py-3 flex gap-2 flex-wrap">
          <span className="text-xs text-green-600 font-semibold self-center">{text.quickQ}:</span>
          {QUICK_QUESTIONS[lang].map((q, i) => (
            <button
              key={i}
              onClick={() => handleSend(q)}
              className="quick-btn bg-white border border-green-200 text-green-700 text-xs px-3 py-1.5 rounded-full hover:bg-green-600 hover:text-white hover:border-green-600 font-medium shadow-sm"
            >
              {q}
            </button>
          ))}
        </div>

        {/* CHAT BODY */}
        <div className="bg-white border-x border-green-100 h-[calc(100vh-400px)] min-h-[300px] overflow-y-auto p-5 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`chat-bubble flex gap-3 ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}
            >
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-white text-sm flex-shrink-0 ${
                msg.sender === "user" ? "bg-green-600" : "bg-gradient-to-br from-green-700 to-emerald-600"
              }`}>
                {msg.sender === "user" ? <FaUser /> : "🌾"}
              </div>
              <div className={`max-w-[75%] ${msg.sender === "user" ? "items-end" : "items-start"} flex flex-col`}>
                {msg.imageUrl && (
                  <img src={msg.imageUrl} alt="uploaded" className="rounded-xl mb-2 max-h-40 object-cover" />
                )}
                <div className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                  msg.sender === "user"
                    ? "bg-green-600 text-white rounded-tr-sm"
                    : "bg-gray-100 text-gray-800 rounded-tl-sm"
                }`} style={{ fontFamily: "'Hind', sans-serif", whiteSpace: "pre-wrap" }}>
                  {msg.text}
                </div>
                <span className="text-xs text-gray-400 mt-1 px-1">{formatTime(msg.timestamp)}</span>
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex gap-3 items-start">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-green-700 to-emerald-600 flex items-center justify-center">🌾</div>
              <div className="bg-gray-100 px-4 py-3 rounded-2xl rounded-tl-sm flex gap-1 items-center">
                <div className="typing-dot w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="typing-dot w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="typing-dot w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs text-gray-500 ml-2">{text.thinking}</span>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* IMAGE PREVIEW */}
        {imagePreview && (
          <div className="bg-white border-x border-green-100 px-4 py-2 flex items-center gap-3">
            <img src={imagePreview} alt="preview" className="h-14 w-14 rounded-lg object-cover border border-green-200" />
            <div className="flex-1">
              <p className="text-sm text-gray-700 font-medium">📸 {image?.name}</p>
              <p className="text-xs text-gray-400">Image will be analyzed by AI</p>
            </div>
            <button
              onClick={() => { setImage(null); setImagePreview(null); }}
              className="text-red-400 hover:text-red-600 text-sm font-medium"
            >
              ✕ {text.removeImg}
            </button>
          </div>
        )}

        {/* INPUT */}
        <div className="bg-white border border-green-100 rounded-b-2xl p-4 shadow-lg">
          <div className="flex gap-2 items-end">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="text-green-600 hover:text-green-800 p-2.5 rounded-xl hover:bg-green-50 transition flex-shrink-0"
              title="Upload crop photo"
            >
              <FaCamera className="text-lg" />
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />

            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={text.placeholder}
              rows={1}
              className="flex-1 border-2 border-green-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-green-500 resize-none text-gray-700 text-sm"
              style={{ fontFamily: "'Hind', sans-serif" }}
            />

            <button
              onClick={() => handleSend()}
              disabled={loading || (!input.trim() && !image)}
              className="bg-green-700 hover:bg-green-800 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 py-2.5 rounded-xl flex items-center gap-2 transition font-semibold text-sm flex-shrink-0"
            >
              <FaPaperPlane /> {text.send}
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-2 text-center">
            📷 Upload crop photo for disease detection • Press Enter to send
          </p>
        </div>
      </div>
    </div>
  );
};

export default FarmerChat;