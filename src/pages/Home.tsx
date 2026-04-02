import {
  
  FaUsers, FaMobileAlt, FaArrowRight, FaStar, FaLeaf,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const Home = () => {
  const { lang } = useLanguage();

  const content = {
    en: {
      badge: "🇮🇳 Made for Indian Farmers",
      title: "Smart Farming for",
      subtitle: "Every Indian Farmer",
      desc: "KisanMitra is your all-in-one digital farming companion — get live weather, crop advisory, mandi prices, government schemes, and AI-powered assistance in one place.",
      getStarted: "Go to Dashboard",
      learnMore: "Learn More",
      offerTitle: "What We Offer",
      features: [
        { icon: "🌦️", title: "Live Weather", desc: "Accurate forecasts & rain alerts for your city" },
        { icon: "🌱", title: "Crop Advisory", desc: "Disease alerts, fertilizer & pest control guidance" },
        { icon: "💰", title: "Mandi Prices", desc: "Daily market prices across India" },
        { icon: "🏛️", title: "Govt Schemes", desc: "PM-KISAN, PMFBY, KCC & more subsidies" },
      ],
      trustTitle: "Why Farmers Trust KisanMitra",
      trustDesc: "Farming is not easy — weather uncertainty, crop diseases, and price fluctuations are daily challenges.",
      trustDesc2: "KisanMitra puts the right information in your hands — simple, reliable, and always up to date.",
      stats: [
        { value: "10K+", label: "Farmers" },
        { value: "5", label: "Languages" },
        { value: "500+", label: "Districts" },
        { value: "24/7", label: "AI Support" },
      ],
      trusted: "Trusted by Farmers",
      mobile: "Mobile Friendly",
      ctaTitle: "Join the KisanMitra Community",
      ctaDesc: "Join thousands of farmers already using KisanMitra to grow smarter and earn better.",
      join: "Get Started Free",
      testimonialTitle: "What Farmers Say",
      testimonials: [
        { name: "Ramesh Patel", loc: "Indore, MP", text: "KisanMitra ne meri soybean fasal ki bimari pahle hi pakad li. Bahut helpful app hai!" },
        { name: "Sunita Devi", loc: "Nashik, MH", text: "Mandi prices dekh ke sahi time pe becha. ₹200/quintal zyada mila is baar!" },
        { name: "Harbhajan Singh", loc: "Ludhiana, PB", text: "Weather alert se pehle hi pani bandh kar diya. Fasal bach gayi. Shukriya!" },
      ],
    },

    hi: {
      badge: "🇮🇳 भारतीय किसानों के लिए",
      title: "स्मार्ट खेती",
      subtitle: "हर भारतीय किसान के लिए",
      desc: "किसानमित्र आपका ऑल-इन-वन डिजिटल कृषि साथी है — एक ही जगह पर लाइव मौसम, फसल सलाह, मंडी भाव, सरकारी योजनाएं और AI सहायता पाएं।",
      getStarted: "डैशबोर्ड पर जाएं",
      learnMore: "और जानें",
      offerTitle: "हम क्या प्रदान करते हैं",
      features: [
        { icon: "🌦️", title: "लाइव मौसम", desc: "आपके शहर के लिए सटीक पूर्वानुमान और बारिश अलर्ट" },
        { icon: "🌱", title: "फसल सलाह", desc: "रोग अलर्ट, खाद और कीट नियंत्रण मार्गदर्शन" },
        { icon: "💰", title: "मंडी कीमतें", desc: "पूरे भारत में दैनिक बाजार कीमतें" },
        { icon: "🏛️", title: "सरकारी योजनाएं", desc: "PM-KISAN, PMFBY, KCC और अधिक सब्सिडी" },
      ],
      trustTitle: "किसान किसानमित्र पर भरोसा क्यों करते हैं",
      trustDesc: "खेती आसान नहीं है — मौसम की अनिश्चितता, फसल रोग और कीमतों का उतार-चढ़ाव रोजाना की चुनौतियां हैं।",
      trustDesc2: "किसानमित्र सही जानकारी आपके हाथ में देता है — सरल, भरोसेमंद और हमेशा अपडेट।",
      stats: [
        { value: "10K+", label: "किसान" },
        { value: "5", label: "भाषाएं" },
        { value: "500+", label: "जिले" },
        { value: "24/7", label: "AI सहायता" },
      ],
      trusted: "किसानों का भरोसा",
      mobile: "मोबाइल फ्रेंडली",
      ctaTitle: "किसानमित्र समुदाय से जुड़ें",
      ctaDesc: "हजारों किसानों से जुड़ें जो स्मार्ट तरीके से खेती करके बेहतर कमा रहे हैं।",
      join: "मुफ्त शुरू करें",
      testimonialTitle: "किसान क्या कहते हैं",
      testimonials: [
        { name: "रमेश पटेल", loc: "इंदौर, MP", text: "किसानमित्र ने मेरी सोयाबीन फसल की बीमारी पहले ही पकड़ ली। बहुत helpful app है!" },
        { name: "सुनीता देवी", loc: "नासिक, MH", text: "मंडी भाव देख के सही समय पर बेचा। इस बार ₹200/क्विंटल ज़्यादा मिला!" },
        { name: "हरभजन सिंह", loc: "लुधियाना, PB", text: "मौसम अलर्ट से पहले ही पानी बंद कर दिया। फसल बच गई। शुक्रिया!" },
      ],
    },

    mr: {
      badge: "🇮🇳 भारतीय शेतकऱ्यांसाठी",
      title: "स्मार्ट शेती",
      subtitle: "प्रत्येक भारतीय शेतकऱ्यासाठी",
      desc: "किसानमित्र हे तुमचे सर्व-समावेशक डिजिटल शेती साथीदार आहे — एकाच ठिकाणी थेट हवामान, पीक सल्ला, मंडी दर, सरकारी योजना आणि AI सहाय्य मिळवा.",
      getStarted: "डॅशबोर्डवर जा",
      learnMore: "अधिक जाणून घ्या",
      offerTitle: "आम्ही काय देतो",
      features: [
        { icon: "🌦️", title: "थेट हवामान", desc: "तुमच्या शहरासाठी अचूक अंदाज आणि पाऊस सूचना" },
        { icon: "🌱", title: "पीक सल्ला", desc: "रोग सूचना, खत आणि कीड नियंत्रण मार्गदर्शन" },
        { icon: "💰", title: "मंडी दर", desc: "भारतभर दैनंदिन बाजार दर" },
        { icon: "🏛️", title: "सरकारी योजना", desc: "PM-KISAN, PMFBY, KCC आणि अधिक अनुदाने" },
      ],
      trustTitle: "शेतकरी किसानमित्रवर विश्वास का ठेवतात",
      trustDesc: "शेती सोपी नाही — हवामानाची अनिश्चितता, पीक रोग आणि भाव चढ-उतार रोजच्या आव्हाना आहेत.",
      trustDesc2: "किसानमित्र योग्य माहिती तुमच्या हातात देतो — सोपी, विश्वासार्ह आणि नेहमी अद्ययावत.",
      stats: [
        { value: "10K+", label: "शेतकरी" },
        { value: "5", label: "भाषा" },
        { value: "500+", label: "जिल्हे" },
        { value: "24/7", label: "AI सहाय्य" },
      ],
      trusted: "शेतकऱ्यांचा विश्वास",
      mobile: "मोबाईल फ्रेंडली",
      ctaTitle: "किसानमित्र समुदायात सामील व्हा",
      ctaDesc: "हजारो शेतकऱ्यांसोबत सामील व्हा जे हुशारीने शेती करून चांगली कमाई करत आहेत.",
      join: "मोफत सुरू करा",
      testimonialTitle: "शेतकरी काय म्हणतात",
      testimonials: [
        { name: "रमेश पाटील", loc: "इंदूर, MP", text: "किसानमित्रने माझ्या सोयाबीन पिकाचा रोग आधीच ओळखला. खूप उपयुक्त app आहे!" },
        { name: "सुनीता देवी", loc: "नाशिक, MH", text: "मंडी दर पाहून योग्य वेळी विकले. यावेळी ₹200/क्विंटल जास्त मिळाले!" },
        { name: "हरभजन सिंग", loc: "लुधियाना, PB", text: "हवामान सूचनेमुळे आधीच पाणी बंद केले. पीक वाचले. धन्यवाद!" },
      ],
    },
  };

  const t = content[lang];

  return (
    <div className="bg-gray-50 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Hind:wght@300;400;500;600&display=swap');
        .hero-bg { background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 40%, #bbf7d0 100%); }
        .hero-blob { position: absolute; border-radius: 50%; filter: blur(60px); opacity: 0.4; }
        .feature-card { transition: all 0.3s cubic-bezier(0.4,0,0.2,1); }
        .feature-card:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(16,185,129,0.15); }
        .stat-card { animation: countUp 0.6s ease both; }
        @keyframes countUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:none; } }
        .testimonial-card { transition: all 0.2s ease; }
        .testimonial-card:hover { transform: translateY(-3px); }
        .hero-title { background: linear-gradient(135deg, #15803d, #059669, #047857); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .pulse-dot { animation: pulse 2s infinite; }
        @keyframes pulse { 0%,100% { opacity:1; } 50% { opacity:0.5; } }
        .cta-section { background: linear-gradient(135deg, #166534 0%, #15803d 50%, #059669 100%); }
      `}</style>

      {/* ===== HERO ===== */}
      <section className="hero-bg relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Decorative blobs */}
        <div className="hero-blob w-96 h-96 bg-green-300 top-10 -left-20" style={{ position: 'absolute' }}></div>
        <div className="hero-blob w-64 h-64 bg-emerald-400 bottom-20 right-10" style={{ position: 'absolute' }}></div>
        <div className="hero-blob w-48 h-48 bg-teal-300 top-1/2 right-1/3" style={{ position: 'absolute' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-20 grid md:grid-cols-2 gap-12 items-center w-full">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white border border-green-200 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-sm">
              <span className="pulse-dot w-2 h-2 bg-green-500 rounded-full inline-block"></span>
              {t.badge}
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4" style={{ fontFamily: "'Baloo 2', cursive" }}>
              <span className="hero-title">{t.title}</span>
              <br />
              <span className="text-gray-800">{t.subtitle}</span>
              <span className="ml-3">🌾</span>
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg" style={{ fontFamily: "'Hind', sans-serif" }}>
              {t.desc}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/dashboard">
                <button className="flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-7 py-3.5 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-200 text-sm">
                  {t.getStarted} <FaArrowRight />
                </button>
              </Link>
              <Link to="/about">
                <button className="flex items-center gap-2 border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white px-7 py-3.5 rounded-2xl font-bold transition-all duration-200 text-sm">
                  {t.learnMore}
                </button>
              </Link>
            </div>

            {/* Mini Stats */}
            <div className="grid grid-cols-4 gap-3 mt-10">
              {t.stats.map((s, i) => (
                <div key={i} className="stat-card text-center bg-white/70 backdrop-blur rounded-2xl py-3 px-2 border border-green-100 shadow-sm" style={{ animationDelay: `${i * 0.1}s` }}>
                  <p className="text-xl font-extrabold text-green-700" style={{ fontFamily: "'Baloo 2', cursive" }}>{s.value}</p>
                  <p className="text-xs text-gray-500 mt-0.5" style={{ fontFamily: "'Hind', sans-serif" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT - Floating Dashboard Preview */}
          <div className="hidden md:block">
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-6 border border-green-100">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-3 h-3 bg-red-400 rounded-full"></span>
                  <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                  <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                  <span className="ml-2 text-xs text-gray-400 font-medium">KisanMitra Dashboard</span>
                </div>

                <div className="bg-gradient-to-br from-green-700 to-emerald-600 rounded-2xl p-4 text-white mb-4">
                  <p className="text-xs text-green-200">Today's Weather — Indore</p>
                  <p className="text-3xl font-bold mt-1">32°C ☀️</p>
                  <p className="text-sm text-green-200 mt-1">No Rain Expected</p>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[
                    { emoji: "🌾", label: "Wheat MSP", value: "₹2,275/qtl" },
                    { emoji: "🫘", label: "Soybean", value: "₹4,892/qtl" },
                    { emoji: "🌽", label: "Maize", value: "₹2,090/qtl" },
                    { emoji: "🌻", label: "Mustard", value: "₹5,650/qtl" },
                  ].map((item, i) => (
                    <div key={i} className="bg-green-50 rounded-xl p-3 border border-green-100">
                      <p className="text-lg">{item.emoji}</p>
                      <p className="text-xs text-gray-500">{item.label}</p>
                      <p className="text-sm font-bold text-green-700">{item.value}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 flex gap-2 items-start">
                  <span className="text-xl">⚠️</span>
                  <div>
                    <p className="text-xs font-bold text-yellow-800">Disease Alert</p>
                    <p className="text-xs text-yellow-700">Leaf Rust risk HIGH in your area. Apply Mancozeb now.</p>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-white border border-green-200 rounded-2xl px-3 py-2 shadow-lg text-sm font-bold text-green-700">
                🤖 AI Powered
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white border border-green-200 rounded-2xl px-3 py-2 shadow-lg text-sm font-bold text-green-700">
                🌐 3 Languages
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <FaLeaf /> Features
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800" style={{ fontFamily: "'Baloo 2', cursive" }}>
            {t.offerTitle} 🌱
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.features.map((f, i) => (
            <div key={i} className="feature-card bg-white rounded-2xl p-6 shadow-md border border-green-50 text-center">
              <div className="text-5xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2" style={{ fontFamily: "'Baloo 2', cursive" }}>{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: "'Hind', sans-serif" }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== TRUST SECTION ===== */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-6 md:px-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4" style={{ fontFamily: "'Baloo 2', cursive" }}>
              {t.trustTitle} 🤝
            </h2>
            <p className="text-gray-600 mb-3 leading-relaxed" style={{ fontFamily: "'Hind', sans-serif" }}>{t.trustDesc}</p>
            <p className="text-gray-700 font-semibold leading-relaxed" style={{ fontFamily: "'Hind', sans-serif" }}>{t.trustDesc2}</p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center gap-3 bg-white rounded-2xl p-4 shadow-sm border border-green-100">
                <FaUsers className="text-2xl text-green-600" />
                <span className="font-semibold text-gray-700" style={{ fontFamily: "'Hind', sans-serif" }}>{t.trusted}</span>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-2xl p-4 shadow-sm border border-green-100">
                <FaMobileAlt className="text-2xl text-green-600" />
                <span className="font-semibold text-gray-700" style={{ fontFamily: "'Hind', sans-serif" }}>{t.mobile}</span>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div>
            <h3 className="text-xl font-bold text-gray-700 mb-5" style={{ fontFamily: "'Baloo 2', cursive" }}>
              {t.testimonialTitle}
            </h3>
            <div className="space-y-4">
              {t.testimonials.map((item, i) => (
                <div key={i} className="testimonial-card bg-white rounded-2xl p-4 shadow-sm border border-green-100">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white font-bold flex-shrink-0">
                      {item.name[0]}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-bold text-gray-800 text-sm">{item.name}</p>
                        <div className="flex text-yellow-400 text-xs gap-0.5">
                          {[...Array(5)].map((_, j) => <FaStar key={j} />)}
                        </div>
                      </div>
                      <p className="text-xs text-green-600 mb-1.5">{item.loc}</p>
                      <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: "'Hind', sans-serif" }}>"{item.text}"</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta-section py-20 px-6 text-center relative overflow-hidden">
        <div className="hero-blob w-64 h-64 bg-white/10 -top-10 -left-10" style={{ position: 'absolute' }}></div>
        <div className="hero-blob w-48 h-48 bg-white/10 bottom-0 right-0" style={{ position: 'absolute' }}></div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="text-5xl mb-4">🌾</div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3" style={{ fontFamily: "'Baloo 2', cursive" }}>
            {t.ctaTitle}
          </h2>
          <p className="text-green-100 text-lg mb-8" style={{ fontFamily: "'Hind', sans-serif" }}>{t.ctaDesc}</p>

          <Link to="/dashboard">
            <button className="bg-white text-green-700 hover:bg-green-50 font-bold px-10 py-4 rounded-2xl text-lg shadow-xl hover:shadow-2xl transition-all duration-200 flex items-center gap-2 mx-auto">
              {t.join} <FaArrowRight />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;