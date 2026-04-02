import {
  FaCloudSun, FaSeedling, FaRupeeSign, FaClipboardList, FaComments, FaTractor,
  FaArrowRight, FaChartLine, FaLeaf,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { lang } = useLanguage();

  const t = {
    en: {
      greeting: "Good Day, Kisan! 🙏",
      title: "Farmer Dashboard",
      subtitle: "All your farming tools in one place — weather, crops, market & more.",
      weather: "Weather Forecast",
      weatherDesc: "Live weather, rain alerts & sunrise/sunset.",
      weatherEmoji: "🌦️",
      crop: "Crop Advisory",
      cropDesc: "Sowing tips, disease alerts & fertilizer guide.",
      cropEmoji: "🌱",
      mandi: "Mandi Prices",
      mandiDesc: "Today's mandi prices by state & district.",
      mandiEmoji: "💰",
      scheme: "Govt Schemes",
      schemeDesc: "PM-KISAN, PMFBY, KCC & latest schemes.",
      schemeEmoji: "🏛️",
      tools: "Farm Tools",
      toolsDesc: "Equipment guide with prices & features.",
      toolsEmoji: "🚜",
      chat: "AI Assistant",
      chatDesc: "Ask crop questions, get instant expert advice.",
      chatEmoji: "🤖",
      explore: "Explore",
      tip: "Today's Tip",
      tipText: "Soil health is the foundation of a great harvest. Test your soil every 2-3 years for best results.",
      stats: "Quick Stats",
    },
    hi: {
      greeting: "नमस्ते, किसान! 🙏",
      title: "किसान डैशबोर्ड",
      subtitle: "आपके सभी कृषि उपकरण एक जगह — मौसम, फसल, बाजार और अधिक।",
      weather: "मौसम पूर्वानुमान",
      weatherDesc: "लाइव मौसम, बारिश अलर्ट और सूर्योदय/सूर्यास्त।",
      weatherEmoji: "🌦️",
      crop: "फसल सलाह",
      cropDesc: "बुवाई टिप्स, रोग अलर्ट और खाद गाइड।",
      cropEmoji: "🌱",
      mandi: "मंडी कीमतें",
      mandiDesc: "राज्य और जिले के अनुसार आज के मंडी भाव।",
      mandiEmoji: "💰",
      scheme: "सरकारी योजनाएं",
      schemeDesc: "PM-KISAN, PMFBY, KCC और नवीनतम योजनाएं।",
      schemeEmoji: "🏛️",
      tools: "कृषि उपकरण",
      toolsDesc: "कीमत और विशेषताओं के साथ उपकरण गाइड।",
      toolsEmoji: "🚜",
      chat: "AI सहायक",
      chatDesc: "फसल के सवाल पूछें, तुरंत विशेषज्ञ सलाह पाएं।",
      chatEmoji: "🤖",
      explore: "देखें",
      tip: "आज की सलाह",
      tipText: "मिट्टी का स्वास्थ्य अच्छी फसल की नींव है। बेहतर परिणामों के लिए हर 2-3 साल में मिट्टी जांच कराएं।",
      stats: "त्वरित आंकड़े",
    },
    mr: {
      greeting: "नमस्ते, शेतकरी! 🙏",
      title: "शेतकरी डॅशबोर्ड",
      subtitle: "तुमची सर्व शेती साधने एकाच ठिकाणी — हवामान, पीक, बाजार आणि बरेच काही.",
      weather: "हवामान अंदाज",
      weatherDesc: "थेट हवामान, पाऊस सूचना आणि सूर्योदय/सूर्यास्त.",
      weatherEmoji: "🌦️",
      crop: "पीक सल्ला",
      cropDesc: "पेरणी टिप्स, रोग सूचना आणि खत मार्गदर्शन.",
      cropEmoji: "🌱",
      mandi: "मंडी दर",
      mandiDesc: "राज्य आणि जिल्ह्यानुसार आजचे मंडी दर.",
      mandiEmoji: "💰",
      scheme: "शासकीय योजना",
      schemeDesc: "PM-KISAN, PMFBY, KCC आणि नवीनतम योजना.",
      schemeEmoji: "🏛️",
      tools: "शेती उपकरणे",
      toolsDesc: "किंमत आणि वैशिष्ट्यांसह उपकरण मार्गदर्शिका.",
      toolsEmoji: "🚜",
      chat: "AI सहाय्यक",
      chatDesc: "पिकाचे प्रश्न विचारा, त्वरित तज्ञ सल्ला मिळवा.",
      chatEmoji: "🤖",
      explore: "पहा",
      tip: "आजचा सल्ला",
      tipText: "मातीचे आरोग्य चांगल्या पिकाचा पाया आहे. उत्तम परिणामांसाठी दर 2-3 वर्षांनी माती परीक्षण करा.",
      stats: "त्वरित आकडेवारी",
    },
  };

  const text = t[lang];

  const cards = [
    { key: "weather", path: "/weather", color: "from-blue-500 to-cyan-500", bg: "bg-blue-50", border: "border-blue-100", icon: <FaCloudSun className="text-2xl" />, emoji: text.weatherEmoji, title: text.weather, desc: text.weatherDesc },
    { key: "crop", path: "/cropadvisory", color: "from-green-500 to-emerald-500", bg: "bg-green-50", border: "border-green-100", icon: <FaSeedling className="text-2xl" />, emoji: text.cropEmoji, title: text.crop, desc: text.cropDesc },
    { key: "mandi", path: "/mandiprice", color: "from-yellow-500 to-orange-500", bg: "bg-yellow-50", border: "border-yellow-100", icon: <FaRupeeSign className="text-2xl" />, emoji: text.mandiEmoji, title: text.mandi, desc: text.mandiDesc },
    { key: "scheme", path: "/scheme", color: "from-purple-500 to-violet-500", bg: "bg-purple-50", border: "border-purple-100", icon: <FaClipboardList className="text-2xl" />, emoji: text.schemeEmoji, title: text.scheme, desc: text.schemeDesc },
    { key: "tools", path: "/tools", color: "from-red-500 to-rose-500", bg: "bg-red-50", border: "border-red-100", icon: <FaTractor className="text-2xl" />, emoji: text.toolsEmoji, title: text.tools, desc: text.toolsDesc },
    { key: "chat", path: "/chat", color: "from-teal-500 to-green-500", bg: "bg-teal-50", border: "border-teal-100", icon: <FaComments className="text-2xl" />, emoji: text.chatEmoji, title: text.chat, desc: text.chatDesc },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50 to-emerald-50 p-5 md:p-8">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Hind:wght@400;500;600&display=swap');
        .feature-card { transition: all 0.3s cubic-bezier(0.4,0,0.2,1); }
        .feature-card:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
        .feature-card:hover .card-arrow { transform: translateX(4px); }
        .card-arrow { transition: transform 0.2s ease; }
        @keyframes slideIn { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:none; } }
        .card-anim { animation: slideIn 0.4s ease both; }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="mb-8">
          <p className="text-green-600 font-semibold text-sm mb-1">{text.greeting}</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800" style={{ fontFamily: "'Baloo 2', cursive" }}>
            {text.title} 🌾
          </h1>
          <p className="text-gray-500 mt-1" style={{ fontFamily: "'Hind', sans-serif" }}>{text.subtitle}</p>
        </div>

        {/* TODAY'S TIP */}
        <div className="bg-gradient-to-r from-green-700 to-emerald-600 rounded-2xl p-5 mb-8 flex items-start gap-4 shadow-md">
          <div className="text-4xl flex-shrink-0">💡</div>
          <div>
            <p className="text-green-200 text-xs font-semibold uppercase tracking-wider">{text.tip}</p>
            <p className="text-white font-medium mt-1 leading-relaxed" style={{ fontFamily: "'Hind', sans-serif" }}>
              {text.tipText}
            </p>
          </div>
        </div>

        {/* FEATURE CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card, index) => (
            <div
              key={card.key}
              onClick={() => navigate(card.path)}
              className={`card-anim feature-card ${card.bg} border-2 ${card.border} rounded-2xl p-5 cursor-pointer relative overflow-hidden`}
              style={{ animationDelay: `${index * 0.07}s` }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} text-white flex items-center justify-center shadow-md`}>
                  {card.icon}
                </div>
                <span className="text-3xl opacity-80">{card.emoji}</span>
              </div>

              <h3 className="text-lg font-bold text-gray-800 mb-1.5" style={{ fontFamily: "'Baloo 2', cursive" }}>
                {card.title}
              </h3>
              <p className="text-gray-500 text-sm mb-4 leading-relaxed" style={{ fontFamily: "'Hind', sans-serif" }}>
                {card.desc}
              </p>

              <div className={`flex items-center gap-1 text-sm font-bold bg-gradient-to-r ${card.color} bg-clip-text text-transparent`}>
                {text.explore} <FaArrowRight className="card-arrow text-green-600" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;