import { FaFacebookF, FaInstagram, FaEnvelope, FaLeaf } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const Footer: React.FC = () => {
  const { lang } = useLanguage(); // ✅ LANGUAGE CONTEXT

  // Language Texts
  const t = {
    en: {
      quickLinks: "Quick Links",
      dashboard: "Dashboard",
      weather: "Weather",
      crop: "Crop Advisory",
      mandi: "Mandi Prices",
      scheme: "Govt Schemes",
      connect: "Connect With Us",
      developer: "Developer: Manish D@nge",
      email: "Email",
      rights: "All rights reserved",
    },
    hi: {
      quickLinks: "त्वरित लिंक",
      dashboard: "डैशबोर्ड",
      weather: "मौसम",
      crop: "फसल सलाह",
      mandi: "मंडी कीमतें",
      scheme: "सरकारी योजनाएं",
      connect: "हमसे जुड़ें",
      developer: "डेवलपर: Manish D@nge",
      email: "ईमेल",
      rights: "सर्वाधिकार सुरक्षित",
    },
    mr: {
      quickLinks: "त्वरित लिंक",
      dashboard: "डॅशबोर्ड",
      weather: "हवामान",
      crop: "पिक सल्ला",
      mandi: "मंडी दर",
      scheme: "सरकारी योजना",
      connect: "आमच्याशी संपर्क करा",
      developer: "डेव्हलपर: Manish D@nge",
      email: "ईमेल",
      rights: "सर्व हक्क राखीव",
    },
  };

  const text = t[lang];

  return (
    <footer className="bg-gradient-to-r from-green-800 to-green-700 text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            🌾 KisanMitra
          </h2>
          <p className="text-sm text-green-100 mt-3">
            Empowering farmers with technology, weather updates, crop advisory,
            mandi prices & government schemes.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <FaLeaf /> {text.quickLinks}
          </h3>
          <ul className="space-y-2 text-green-100">
            <Link to="/dashboard"><li className="hover:text-white cursor-pointer">{text.dashboard}</li></Link>
            <Link to="/weather"><li className="hover:text-white cursor-pointer">{text.weather}</li></Link>
            <Link to="/cropadvisory"><li className="hover:text-white cursor-pointer">{text.crop}</li></Link>
            <Link to="/mandiprice"><li className="hover:text-white cursor-pointer">{text.mandi}</li></Link>
            <Link to="/scheme"><li className="hover:text-white cursor-pointer">{text.scheme}</li></Link>
          </ul>
        </div>

        {/* SOCIAL + CONTACT */}
        <div>
          <h3 className="text-lg font-semibold mb-3">{text.connect}</h3>

          <div className="flex gap-4 mb-4">
            <a
              href="https://facebook.com"
              target="_blank"
              className="bg-white text-green-700 p-3 rounded-full hover:bg-green-100 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/manish_dange_07/"
              target="_blank"
              className="bg-white text-green-700 p-3 rounded-full hover:bg-green-100 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="mailto:manishdange17@gmail.com"
              className="bg-white text-green-700 p-3 rounded-full hover:bg-green-100 transition"
            >
              <FaEnvelope />
            </a>
          </div>

          <p className="text-sm text-green-100">{text.developer}</p>

          <p className="text-sm text-green-100">
            📧 {text.email}: <span className="underline">manishdange17@gmail.com</span>
          </p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="text-center text-sm bg-green-900 py-3 text-green-200">
        © {new Date().getFullYear()} KisanMitra. {text.rights}.
      </div>
    </footer>
  );
};

export default Footer;
