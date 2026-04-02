import React from "react";
import { FaLeaf, FaRocket, FaHeart, FaCode, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const About: React.FC = () => {
  const { lang } = useLanguage();

  const content = {
    en: {
      badge: "Our Story",
      title: "About KisanMitra",
      subtitle: "Built with ❤️ for Indian farmers who deserve the best technology.",
      missionTitle: "Our Mission",
      missionText: "To bridge the technology gap in Indian agriculture — giving every farmer access to live weather, smart crop advice, fair market prices, and government benefits, all in one simple app.",
      visionTitle: "Our Vision",
      visionText: "A future where every Indian farmer is digitally empowered, earns fair prices, wastes nothing, and grows sustainably using data-driven decisions.",
      offerTitle: "What We Offer",
      offers: [
        { icon: "🌦️", title: "Live Weather", desc: "Accurate forecasts & farming alerts for 500+ cities" },
        { icon: "🌱", title: "Crop Advisory", desc: "Disease, pest, fertilizer & irrigation guidance" },
        { icon: "💰", title: "Mandi Prices", desc: "Real-time market prices across India" },
        { icon: "🏛️", title: "Govt Schemes", desc: "PM-KISAN, PMFBY, KCC & latest subsidies" },
        { icon: "🛠️", title: "Farm Tools", desc: "Equipment guide with prices & features" },
        { icon: "🤖", title: "AI Assistant", desc: "24/7 crop questions answered by AI" },
      ],
      statsTitle: "KisanMitra in Numbers",
      stats: [
        { value: "10,000+", label: "Farmers Helped" },
        { value: "500+", label: "Districts Covered" },
        { value: "5", label: "Crops Supported" },
        { value: "3", label: "Languages" },
      ],
      teamTitle: "Meet the Developer",
      teamText: "KisanMitra was built by a passionate agri-tech developer dedicated to using modern technology to solve real farming challenges faced by millions of Indian farmers.",
      devName: "Manish Dange",
      devRole: "Full Stack Developer & Agri-Tech Enthusiast",
      devBio: "Passionate about building technology that creates real impact. KisanMitra is a mission-driven project to empower Indian farmers with digital tools.",
      techTitle: "Built With",
      techs: ["React + TypeScript", "Tailwind CSS", "OpenWeather API", "Claude AI", "React Router"],
    },
    hi: {
      badge: "हमारी कहानी",
      title: "किसानमित्र के बारे में",
      subtitle: "भारतीय किसानों के लिए ❤️ से बनाया गया।",
      missionTitle: "हमारा मिशन",
      missionText: "भारतीय कृषि में तकनीकी अंतर को पाटना — हर किसान को लाइव मौसम, स्मार्ट फसल सलाह, उचित बाजार कीमतें और सरकारी लाभ एक सरल ऐप में देना।",
      visionTitle: "हमारी दृष्टि",
      visionText: "एक ऐसा भविष्य जहाँ हर भारतीय किसान डिजिटल रूप से सशक्त हो, उचित कीमत पाए, कुछ भी बर्बाद न हो और डेटा-आधारित फैसलों से टिकाऊ खेती करे।",
      offerTitle: "हम क्या प्रदान करते हैं",
      offers: [
        { icon: "🌦️", title: "लाइव मौसम", desc: "500+ शहरों के लिए सटीक पूर्वानुमान और कृषि अलर्ट" },
        { icon: "🌱", title: "फसल सलाह", desc: "रोग, कीट, खाद और सिंचाई मार्गदर्शन" },
        { icon: "💰", title: "मंडी कीमतें", desc: "पूरे भारत में रीयल-टाइम बाजार कीमतें" },
        { icon: "🏛️", title: "सरकारी योजनाएं", desc: "PM-KISAN, PMFBY, KCC और नवीनतम सब्सिडी" },
        { icon: "🛠️", title: "कृषि उपकरण", desc: "कीमत और विशेषताओं के साथ उपकरण गाइड" },
        { icon: "🤖", title: "AI सहायक", desc: "24/7 AI द्वारा फसल प्रश्नों के उत्तर" },
      ],
      statsTitle: "किसानमित्र संख्याओं में",
      stats: [
        { value: "10,000+", label: "किसानों की मदद" },
        { value: "500+", label: "जिले कवर" },
        { value: "5", label: "फसलें सपोर्टेड" },
        { value: "3", label: "भाषाएं" },
      ],
      teamTitle: "डेवलपर से मिलें",
      teamText: "किसानमित्र एक जुनूनी एग्री-टेक डेवलपर द्वारा बनाया गया है जो आधुनिक तकनीक से लाखों भारतीय किसानों की समस्याएं सुलझाने के लिए समर्पित है।",
      devName: "Manish Dange",
      devRole: "फुल स्टैक डेवलपर और एग्री-टेक उत्साही",
      devBio: "ऐसी तकनीक बनाने का जुनून जो असल प्रभाव डाले। किसानमित्र एक मिशन-संचालित प्रोजेक्ट है।",
      techTitle: "तकनीक",
      techs: ["React + TypeScript", "Tailwind CSS", "OpenWeather API", "Claude AI", "React Router"],
    },
    mr: {
      badge: "आमची कथा",
      title: "किसानमित्र बद्दल",
      subtitle: "भारतीय शेतकऱ्यांसाठी ❤️ ने बनवले.",
      missionTitle: "आमचे ध्येय",
      missionText: "भारतीय शेतीतील तंत्रज्ञानाची दरी भरणे — प्रत्येक शेतकऱ्याला थेट हवामान, स्मार्ट पीक सल्ला, योग्य बाजारभाव आणि सरकारी फायदे एका सोप्या अॅपमध्ये देणे.",
      visionTitle: "आमची दृष्टी",
      visionText: "असे भविष्य जिथे प्रत्येक भारतीय शेतकरी डिजिटलरित्या सक्षम असेल, योग्य भाव मिळवेल आणि डेटा-आधारित निर्णयांनी शाश्वत शेती करेल.",
      offerTitle: "आम्ही काय देतो",
      offers: [
        { icon: "🌦️", title: "थेट हवामान", desc: "500+ शहरांसाठी अचूक अंदाज आणि शेती सूचना" },
        { icon: "🌱", title: "पीक सल्ला", desc: "रोग, कीड, खत आणि सिंचन मार्गदर्शन" },
        { icon: "💰", title: "मंडी दर", desc: "भारतभर रिअल-टाइम बाजार दर" },
        { icon: "🏛️", title: "सरकारी योजना", desc: "PM-KISAN, PMFBY, KCC आणि नवीनतम अनुदाने" },
        { icon: "🛠️", title: "शेती उपकरणे", desc: "किंमत आणि वैशिष्ट्यांसह उपकरण मार्गदर्शिका" },
        { icon: "🤖", title: "AI सहाय्यक", desc: "24/7 AI द्वारे पीक प्रश्नांची उत्तरे" },
      ],
      statsTitle: "किसानमित्र आकड्यांमध्ये",
      stats: [
        { value: "10,000+", label: "शेतकऱ्यांना मदत" },
        { value: "500+", label: "जिल्हे कव्हर" },
        { value: "5", label: "पिके समर्थित" },
        { value: "3", label: "भाषा" },
      ],
      teamTitle: "डेव्हलपरला भेटा",
      teamText: "किसानमित्र एका उत्साही agri-tech डेव्हलपरने बनवले आहे जो आधुनिक तंत्रज्ञान वापरून लाखो भारतीय शेतकऱ्यांच्या समस्या सोडवण्यास समर्पित आहे.",
      devName: "Manish Dange",
      devRole: "फुल स्टॅक डेव्हलपर आणि Agri-Tech उत्साही",
      devBio: "खरा प्रभाव निर्माण करणारे तंत्रज्ञान बनवण्याची आवड. किसानमित्र हे ध्येय-चालित प्रकल्प आहे.",
      techTitle: "तंत्रज्ञान",
      techs: ["React + TypeScript", "Tailwind CSS", "OpenWeather API", "Claude AI", "React Router"],
    },
  };

  const t = content[lang];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Hind:wght@400;500;600&display=swap');
        .offer-card { transition: all 0.25s ease; }
        .offer-card:hover { transform: translateY(-5px); box-shadow: 0 12px 30px rgba(16,185,129,0.12); }
        .stat-item { animation: slideUp 0.5s ease both; }
        @keyframes slideUp { from { opacity:0; transform:translateY(15px); } to { opacity:1; transform:none; } }
      `}</style>

      {/* HERO */}
      <div className="bg-gradient-to-r from-green-700 to-emerald-600 text-white py-16 px-6 text-center">
        <span className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-5">
          <FaLeaf /> {t.badge}
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3" style={{ fontFamily: "'Baloo 2', cursive" }}>
          {t.title} 🌱
        </h1>
        <p className="text-green-100 text-lg max-w-xl mx-auto" style={{ fontFamily: "'Hind', sans-serif" }}>
          {t.subtitle}
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* MISSION + VISION */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-md border border-green-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 bg-green-100 rounded-xl flex items-center justify-center">
                <FaRocket className="text-green-600 text-xl" />
              </div>
              <h2 className="text-xl font-bold text-gray-800" style={{ fontFamily: "'Baloo 2', cursive" }}>{t.missionTitle}</h2>
            </div>
            <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "'Hind', sans-serif" }}>{t.missionText}</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md border border-green-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 bg-emerald-100 rounded-xl flex items-center justify-center">
                <FaHeart className="text-emerald-600 text-xl" />
              </div>
              <h2 className="text-xl font-bold text-gray-800" style={{ fontFamily: "'Baloo 2', cursive" }}>{t.visionTitle}</h2>
            </div>
            <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "'Hind', sans-serif" }}>{t.visionText}</p>
          </div>
        </div>

        {/* STATS */}
        <div className="bg-gradient-to-r from-green-700 to-emerald-600 rounded-2xl p-8 mb-12 shadow-xl">
          <h2 className="text-center text-white font-bold text-xl mb-7" style={{ fontFamily: "'Baloo 2', cursive" }}>
            {t.statsTitle}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {t.stats.map((s, i) => (
              <div key={i} className="stat-item text-center" style={{ animationDelay: `${i * 0.1}s` }}>
                <p className="text-3xl md:text-4xl font-extrabold text-white" style={{ fontFamily: "'Baloo 2', cursive" }}>{s.value}</p>
                <p className="text-green-200 text-sm mt-1" style={{ fontFamily: "'Hind', sans-serif" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* OFFERS */}
        <div className="mb-12">
          <h2 className="text-2xl font-extrabold text-gray-800 mb-6 text-center" style={{ fontFamily: "'Baloo 2', cursive" }}>
            {t.offerTitle}
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {t.offers.map((o, i) => (
              <div key={i} className="offer-card bg-white rounded-2xl p-5 shadow-md border border-green-100">
                <div className="text-4xl mb-3">{o.icon}</div>
                <h3 className="font-bold text-gray-800 mb-1" style={{ fontFamily: "'Baloo 2', cursive" }}>{o.title}</h3>
                <p className="text-gray-500 text-sm" style={{ fontFamily: "'Hind', sans-serif" }}>{o.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* DEVELOPER */}
        <div className="bg-white rounded-2xl shadow-md p-7 border border-green-100">
          <h2 className="text-xl font-extrabold text-gray-800 mb-6 text-center" style={{ fontFamily: "'Baloo 2', cursive" }}>
            {t.teamTitle}
          </h2>

          <div className="flex flex-col md:flex-row gap-6 items-center">
            {/* Avatar */}
            <div className="w-28 h-28 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center text-white text-5xl flex-shrink-0 shadow-lg">
              M
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-extrabold text-gray-800" style={{ fontFamily: "'Baloo 2', cursive" }}>
                {t.devName}
              </h3>
              <p className="text-green-600 font-semibold mb-3">{t.devRole}</p>
              <p className="text-gray-600 leading-relaxed mb-4" style={{ fontFamily: "'Hind', sans-serif" }}>{t.devBio}</p>

              {/* Social links */}
              <div className="flex gap-3 justify-center md:justify-start">
                <a href="https://github.com" target="_blank" className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-gray-700 transition">
                  <FaGithub /> GitHub
                </a>
                <a href="https://www.instagram.com/manish_dange_07/" target="_blank" className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:opacity-90 transition">
                  <FaInstagram /> Instagram
                </a>
                <a href="mailto:manishdange17@gmail.com" className="flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-green-800 transition">
                  <FaEnvelope /> Email
                </a>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mt-6 pt-6 border-t border-gray-100">
            <p className="text-sm font-bold text-gray-600 mb-3 flex items-center gap-2">
              <FaCode className="text-green-600" /> {t.techTitle}:
            </p>
            <div className="flex flex-wrap gap-2">
              {t.techs.map((tech, i) => (
                <span key={i} className="bg-green-50 border border-green-200 text-green-700 text-xs font-bold px-3 py-1.5 rounded-xl">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;