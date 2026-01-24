import {
  FaCloudSun,
  FaSeedling,
  FaRupeeSign,
  FaComments,
  FaClipboardList,
  FaTractor,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { lang } = useLanguage(); // ✅ LANGUAGE CONTEXT

  // Language Texts
  const t = {
    en: {
      title: "Farmer Dashboard 🌾",
      subtitle: "Welcome to KisanMitra — all farming tools at one place.",
      weather: "Weather Update",
      weatherDesc: "Live weather forecast & alerts.",
      crop: "Crop Advisory",
      cropDesc: "Crop tips, disease alerts & guidance.",
      mandi: "Mandi Prices",
      mandiDesc: "Daily mandi price updates.",
      scheme: "Govt Schemes",
      schemeDesc: "Latest government farming schemes.",
      tools: "Farm Tools",
      toolsDesc: "Equipment & modern farming tools.",
      chat: "Farmer Chat",
      chatDesc: "Talk to experts & other farmers.",
    },
    hi: {
      title: "किसान डैशबोर्ड 🌾",
      subtitle: "KisanMitra में आपका स्वागत है — सभी कृषि उपकरण एक जगह।",
      weather: "मौसम अपडेट",
      weatherDesc: "लाइव मौसम पूर्वानुमान और अलर्ट।",
      crop: "फसल सलाह",
      cropDesc: "फसल के सुझाव, रोग चेतावनी और मार्गदर्शन।",
      mandi: "मंडी कीमतें",
      mandiDesc: "दैनिक मंडी मूल्य अपडेट।",
      scheme: "सरकारी योजनाएं",
      schemeDesc: "नवीनतम सरकारी कृषि योजनाएं।",
      tools: "कृषि उपकरण",
      toolsDesc: "उपकरण और आधुनिक कृषि उपकरण।",
      chat: "किसान चैट",
      chatDesc: "विशेषज्ञों और अन्य किसानों से बात करें।",
    },
    mr: {
      title: "शेतकरी डॅशबोर्ड 🌾",
      subtitle: "KisanMitra मध्ये आपले स्वागत आहे — सर्व शेतकरी साधने एका ठिकाणी।",
      weather: "हवामान अपडेट",
      weatherDesc: "थेट हवामान अंदाज आणि अलर्ट.",
      crop: "पिक सल्ला",
      cropDesc: "पिक टिप्स, रोग चेतावणी आणि मार्गदर्शन.",
      mandi: "मंडी दर",
      mandiDesc: "दररोज मंडी दर अपडेट.",
      scheme: "सरकारी योजना",
      schemeDesc: "अलीकडील सरकारी शेतकरी योजना.",
      tools: "शेतकरी साधने",
      toolsDesc: "साधने आणि आधुनिक शेतकरी उपकरणे.",
      chat: "शेतकरी चैट",
      chatDesc: "तज्ज्ञ आणि इतर शेतकऱ्यांशी बोला.",
    },
  };

  const text = t[lang];

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      
      {/* HEADER */}
      <h1 className="text-3xl font-bold text-green-700">{text.title}</h1>
      <p className="mt-2 text-gray-600">{text.subtitle}</p>

      {/* FEATURE CARDS */}
      <div className="grid md:grid-cols-3 gap-6 mt-8">

        <div
          onClick={() => navigate("/weather")}
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
        >
          <FaCloudSun className="text-3xl text-green-600 mb-3" />
          <h3 className="text-xl font-semibold">{text.weather}</h3>
          <p className="text-gray-600 mt-1">{text.weatherDesc}</p>
        </div>

        <div
          onClick={() => navigate("/cropadvisory")}
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
        >
          <FaSeedling className="text-3xl text-green-600 mb-3" />
          <h3 className="text-xl font-semibold">{text.crop}</h3>
          <p className="text-gray-600 mt-1">{text.cropDesc}</p>
        </div>

        <div
          onClick={() => navigate("/mandiprice")}
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
        >
          <FaRupeeSign className="text-3xl text-green-600 mb-3" />
          <h3 className="text-xl font-semibold">{text.mandi}</h3>
          <p className="text-gray-600 mt-1">{text.mandiDesc}</p>
        </div>

        <div
          onClick={() => navigate("/scheme")}
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
        >
          <FaClipboardList className="text-3xl text-green-600 mb-3" />
          <h3 className="text-xl font-semibold">{text.scheme}</h3>
          <p className="text-gray-600 mt-1">{text.schemeDesc}</p>
        </div>

        <div
          onClick={() => navigate("/tools")}
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
        >
          <FaTractor className="text-3xl text-green-600 mb-3" />
          <h3 className="text-xl font-semibold">{text.tools}</h3>
          <p className="text-gray-600 mt-1">{text.toolsDesc}</p>
        </div>

        <div
          onClick={() => navigate("/chat")}
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
        >
          <FaComments className="text-3xl text-green-600 mb-3" />
          <h3 className="text-xl font-semibold">{text.chat}</h3>
          <p className="text-gray-600 mt-1">{text.chatDesc}</p>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
