import { FaFacebookF, FaInstagram, FaEnvelope, FaLeaf, FaGithub, FaHeart, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const Footer: React.FC = () => {
  const { lang } = useLanguage();

  const t = {
    en: {
      tagline: "Empowering farmers with technology — weather, crops, mandi prices & government schemes.",
      quickLinks: "Quick Links",
      links: [
        { label: "Dashboard", path: "/dashboard" },
        { label: "Weather Forecast", path: "/weather" },
        { label: "Crop Advisory", path: "/cropadvisory" },
        { label: "Mandi Prices", path: "/mandiprice" },
        { label: "Govt Schemes", path: "/scheme" },
        { label: "Farm Tools", path: "/tools" },
        { label: "AI Chat", path: "/chat" },
      ],
      connect: "Connect With Us",
      developer: "Manish Dange",
      devLabel: "Developer",
      email: "manishdange17@gmail.com",
      phone: "+91 98765 43210",
      rights: "All rights reserved",
      madeWith: "Made with",
      forFarmers: "for Indian Farmers",
    },
    hi: {
      tagline: "तकनीक से किसानों को सशक्त बनाएं — मौसम, फसल, मंडी भाव और सरकारी योजनाएं।",
      quickLinks: "त्वरित लिंक",
      links: [
        { label: "डैशबोर्ड", path: "/dashboard" },
        { label: "मौसम पूर्वानुमान", path: "/weather" },
        { label: "फसल सलाह", path: "/cropadvisory" },
        { label: "मंडी कीमतें", path: "/mandiprice" },
        { label: "सरकारी योजनाएं", path: "/scheme" },
        { label: "कृषि उपकरण", path: "/tools" },
        { label: "AI चैट", path: "/chat" },
      ],
      connect: "हमसे जुड़ें",
      developer: "Manish Dange",
      devLabel: "डेवलपर",
      email: "manishdange17@gmail.com",
      phone: "+91 98765 43210",
      rights: "सर्वाधिकार सुरक्षित",
      madeWith: "❤️ से बनाया",
      forFarmers: "भारतीय किसानों के लिए",
    },
    mr: {
      tagline: "तंत्रज्ञानाने शेतकऱ्यांना सक्षम करा — हवामान, पीक, मंडी दर आणि सरकारी योजना.",
      quickLinks: "त्वरित लिंक",
      links: [
        { label: "डॅशबोर्ड", path: "/dashboard" },
        { label: "हवामान अंदाज", path: "/weather" },
        { label: "पीक सल्ला", path: "/cropadvisory" },
        { label: "मंडी दर", path: "/mandiprice" },
        { label: "सरकारी योजना", path: "/scheme" },
        { label: "शेती उपकरणे", path: "/tools" },
        { label: "AI चॅट", path: "/chat" },
      ],
      connect: "आमच्याशी संपर्क करा",
      developer: "Manish Dange",
      devLabel: "डेव्हलपर",
      email: "manishdange17@gmail.com",
      phone: "+91 98765 43210",
      rights: "सर्व हक्क राखीव",
      madeWith: "❤️ ने बनवले",
      forFarmers: "भारतीय शेतकऱ्यांसाठी",
    },
  };

  const text = t[lang];

  return (
    <footer className="bg-gray-900 text-white mt-12">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700&family=Hind:wght@400;500&display=swap');
        .footer-link { transition: all 0.15s ease; }
        .footer-link:hover { color: #4ade80; padding-left: 4px; }
        .social-btn { transition: all 0.2s ease; }
        .social-btn:hover { transform: translateY(-3px); }
      `}</style>

      {/* TOP BANNER */}
      <div className="bg-gradient-to-r from-green-700 to-emerald-600 py-5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white font-bold text-lg" style={{ fontFamily: "'Baloo 2', cursive" }}>
            🌾 KisanMitra — India's Smart Farming Platform
          </p>
          <Link to="/dashboard">
            <button className="bg-white text-green-700 font-bold px-6 py-2.5 rounded-xl hover:bg-green-50 transition text-sm shadow-md">
              {lang === "hi" ? "डैशबोर्ड खोलें" : lang === "mr" ? "डॅशबोर्ड उघडा" : "Open Dashboard"} →
            </button>
          </Link>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* BRAND */}
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4 group">
            <span className="text-3xl">🌾</span>
            <span className="text-2xl font-extrabold text-white" style={{ fontFamily: "'Baloo 2', cursive" }}>KisanMitra</span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed mb-5" style={{ fontFamily: "'Hind', sans-serif" }}>
            {text.tagline}
          </p>

          {/* Social */}
          <h4 className="text-sm font-bold text-gray-300 mb-3">{text.connect}</h4>
          <div className="flex gap-3">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"
              className="social-btn w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center hover:bg-blue-500">
              <FaFacebookF className="text-sm" />
            </a>
            <a href="https://www.instagram.com/manish_dange_07/" target="_blank" rel="noreferrer"
              className="social-btn w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center hover:opacity-90">
              <FaInstagram className="text-sm" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer"
              className="social-btn w-10 h-10 bg-gray-700 rounded-xl flex items-center justify-center hover:bg-gray-600">
              <FaGithub className="text-sm" />
            </a>
            <a href="mailto:manishdange17@gmail.com"
              className="social-btn w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center hover:bg-green-500">
              <FaEnvelope className="text-sm" />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2" style={{ fontFamily: "'Baloo 2', cursive" }}>
            <FaLeaf className="text-green-400" /> {text.quickLinks}
          </h3>
          <ul className="space-y-2.5">
            {text.links.map((link, i) => (
              <li key={i}>
                <Link to={link.path} className="footer-link text-gray-400 text-sm flex items-center gap-1.5" style={{ fontFamily: "'Hind', sans-serif" }}>
                  <span className="text-green-500 text-xs">›</span> {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-base font-bold text-white mb-4" style={{ fontFamily: "'Baloo 2', cursive" }}>
            {text.devLabel}
          </h3>

          <div className="bg-gray-800 rounded-2xl p-5 mb-4 border border-gray-700">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white font-extrabold text-xl">M</div>
              <div>
                <p className="font-bold text-white" style={{ fontFamily: "'Baloo 2', cursive" }}>{text.developer}</p>
                <p className="text-green-400 text-xs">{text.devLabel}</p>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <a href="mailto:manishdange17@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition">
                <FaEnvelope className="text-green-500 flex-shrink-0" />
                <span className="text-xs truncate">{text.email}</span>
              </a>
              <div className="flex items-center gap-2 text-gray-400">
                <FaPhone className="text-green-500 flex-shrink-0" />
                <span className="text-xs">{text.phone}</span>
              </div>
            </div>
          </div>

          {/* Version badge */}
          <div className="bg-gray-800 rounded-xl p-3 border border-gray-700 text-center">
            <p className="text-xs text-gray-500">Version 2.0</p>
            <p className="text-xs text-green-400 font-bold mt-0.5">🚀 AI Powered • 3 Languages</p>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800 py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} KisanMitra. {text.rights}.</p>
          <p className="flex items-center gap-1">
            {text.madeWith} <FaHeart className="text-red-400 mx-1" /> {text.forFarmers}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;