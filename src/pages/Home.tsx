import {
  FaCloudSun,
  FaSeedling,
  FaDollarSign,
  FaClipboardList,
  FaUsers,
  FaMobileAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const Home = () => {
  const { lang } = useLanguage();

  const content = {
    en: {
      title: "Smart Farming for",
      subtitle: "Indian Farmers",
      desc:
        "KisanMitra is a digital companion for farmers — helping you grow better crops, earn more profits and take smarter farming decisions using technology.",
      getStarted: "Get Started",
      learnMore: "Learn More",
      offerTitle: "What We Offer",
      features: [
        "Live & accurate weather forecast with alerts",
        "Crop guidance, fertilizer & disease solutions",
        "Daily mandi prices to sell at the right time",
        "Government schemes & subsidy information",
      ],
      trustTitle: "Why Farmers Trust KisanMitra",
      trustDesc:
        "Farming is not easy — weather uncertainty, crop diseases, and market price fluctuations affect farmers daily.",
      trustDesc2:
        "KisanMitra solves these problems by providing simple, reliable and real-time information in one easy-to-use platform.",
      trusted: "Trusted by Farmers",
      mobile: "Easy Mobile Friendly App",
      ctaTitle: "Start Your Farmer Community",
      ctaDesc:
        "Join thousands of farmers who are already using KisanMitra to increase productivity and community.",
      join: "Join Now",
    },

    hi: {
      title: "स्मार्ट खेती",
      subtitle: "भारतीय किसानों के लिए",
      desc:
        "किसानमित्र किसानों का डिजिटल साथी है — बेहतर फसल, अधिक मुनाफा और सही फैसले लेने में मदद करता है।",
      getStarted: "शुरू करें",
      learnMore: "और जानें",
      offerTitle: "हम क्या प्रदान करते हैं",
      features: [
        "सटीक मौसम जानकारी और अलर्ट",
        "फसल, खाद और रोग से जुड़ी सलाह",
        "दैनिक मंडी भाव",
        "सरकारी योजनाएं और सब्सिडी",
      ],
      trustTitle: "किसान किसानमित्र पर भरोसा क्यों करते हैं",
      trustDesc:
        "खेती आसान नहीं है — मौसम, बीमारी और बाजार भाव किसानों को रोज प्रभावित करते हैं।",
      trustDesc2:
        "किसानमित्र सरल और भरोसेमंद जानकारी एक ही प्लेटफॉर्म पर देता है।",
      trusted: "किसानों का भरोसा",
      mobile: "आसान मोबाइल ऐप",
      ctaTitle: "अपना किसान समुदाय शुरू करें",
      ctaDesc:
        "हजारों किसानों से जुड़ें जो किसानमित्र का उपयोग कर रहे हैं।",
      join: "अभी जुड़ें",
    },

    mr: {
      title: "स्मार्ट शेती",
      subtitle: "भारतीय शेतकऱ्यांसाठी",
      desc:
        "किसानमित्र हा शेतकऱ्यांचा डिजिटल मित्र आहे — चांगले पीक, जास्त नफा आणि योग्य निर्णयांसाठी.",
      getStarted: "सुरू करा",
      learnMore: "अधिक जाणून घ्या",
      offerTitle: "आम्ही काय देतो",
      features: [
        "अचूक हवामान अंदाज",
        "पीक, खत व रोग सल्ला",
        "दैनिक मंडी दर",
        "सरकारी योजना माहिती",
      ],
      trustTitle: "शेतकरी किसानमित्रवर विश्वास का ठेवतात",
      trustDesc:
        "शेती सोपी नाही — हवामान, रोग आणि बाजार दरांचा परिणाम होतो.",
      trustDesc2:
        "किसानमित्र एकाच ठिकाणी सोपी व विश्वासार्ह माहिती देतो.",
      trusted: "शेतकऱ्यांचा विश्वास",
      mobile: "मोबाईल फ्रेंडली अ‍ॅप",
      ctaTitle: "तुमचा शेतकरी समुदाय सुरू करा",
      ctaDesc:
        "हजारो शेतकऱ्यांसोबत आजच सामील व्हा.",
      join: "सामील व्हा",
    },
  };

  const t = content[lang];

  return (
    <div className="px-6 md:px-20 py-12 bg-gray-50">

      {/* HERO */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-700">
          {t.title} <span className="text-green-800">{t.subtitle}</span> 🌾
        </h1>

        <p className="mt-5 text-gray-600 text-lg max-w-3xl mx-auto">
          {t.desc}
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <Link to="/dashboard">
            <button className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800">
              {t.getStarted}
            </button>
          </Link>

          <Link to="/about">
            <button className="border border-green-700 text-green-700 px-6 py-3 rounded-lg hover:bg-green-100">
              {t.learnMore}
            </button>
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mt-20 grid md:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-bold text-green-700 mb-6">
            {t.offerTitle} 🌱
          </h2>

          <ul className="space-y-4 text-gray-700">
            <li className="flex gap-3"><FaCloudSun /> {t.features[0]}</li>
            <li className="flex gap-3"><FaSeedling /> {t.features[1]}</li>
            <li className="flex gap-3"><FaDollarSign /> {t.features[2]}</li>
            <li className="flex gap-3"><FaClipboardList /> {t.features[3]}</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-green-700">
            {t.trustTitle} 🤝
          </h2>

          <p className="mt-4 text-gray-600">
            {t.trustDesc}
            <br /><br />
            <strong>{t.trustDesc2}</strong>
          </p>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="flex gap-2 bg-green-50 p-3 rounded">
              <FaUsers /> {t.trusted}
            </div>
            <div className="flex gap-2 bg-green-50 p-3 rounded">
              <FaMobileAlt /> {t.mobile}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 bg-green-700 text-white p-10 rounded-xl text-center">
        <h2 className="text-3xl font-bold">{t.ctaTitle}</h2>
        <p className="mt-3 text-green-100">{t.ctaDesc}</p>

        <button className="mt-6 bg-white text-green-700 px-8 py-3 rounded-lg">
          {t.join}
        </button>
      </section>
    </div>
  );
};

export default Home;
