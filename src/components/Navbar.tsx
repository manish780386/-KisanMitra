import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaTachometerAlt,
  FaInfoCircle,
  FaPhone,
  FaGlobe,
} from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname === path
      ? "text-yellow-300 border-b-2 border-yellow-300"
      : "hover:text-yellow-200";

  const labels = {
    en: { home: "Home", dashboard: "Dashboard", about: "About", contact: "Contact" },
    hi: { home: "होम", dashboard: "डैशबोर्ड", about: "जानकारी", contact: "संपर्क" },
    mr: { home: "मुख्य", dashboard: "डॅशबोर्ड", about: "माहिती", contact: "संपर्क" },
  };

  const t = labels[lang];

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-green-800 to-green-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-extrabold text-white flex items-center gap-2">
            🌾 <span>KisanMitra</span>
          </h1>

          <div className="hidden md:flex items-center gap-1 bg-green-700 px-2 py-1 rounded">
            <FaGlobe className="text-white" />
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as any)}
              className="bg-transparent text-white outline-none"
            >
              <option value="en" className="text-black">EN</option>
              <option value="hi" className="text-black">हिंदी</option>
              <option value="mr" className="text-black">मराठी</option>
            </select>
          </div>
        </div>

        <ul className="hidden md:flex items-center space-x-8 text-white font-semibold">
          <li className={`flex items-center gap-2 ${isActive("/")}`}>
            <FaHome /> <Link to="/">{t.home}</Link>
          </li>
          <li className={`flex items-center gap-2 ${isActive("/dashboard")}`}>
            <FaTachometerAlt /> <Link to="/dashboard">{t.dashboard}</Link>
          </li>
          <li className={`flex items-center gap-2 ${isActive("/about")}`}>
            <FaInfoCircle /> <Link to="/about">{t.about}</Link>
          </li>
          <li className={`flex items-center gap-2 ${isActive("/contact")}`}>
            <FaPhone /> <Link to="/contact">{t.contact}</Link>
          </li>
        </ul>

        <button onClick={() => setOpen(!open)} className="md:hidden text-3xl text-white">
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-green-700">
          <div className="flex justify-center py-3">
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as any)}
              className="px-3 py-2 rounded bg-white text-green-700 font-semibold"
            >
              <option value="en">English</option>
              <option value="hi">हिंदी</option>
              <option value="mr">मराठी</option>
            </select>
          </div>

          <ul className="flex flex-col items-center space-y-4 py-4 text-white">
            <li><Link to="/" onClick={() => setOpen(false)}>{t.home}</Link></li>
            <li><Link to="/dashboard" onClick={() => setOpen(false)}>{t.dashboard}</Link></li>
            <li><Link to="/about" onClick={() => setOpen(false)}>{t.about}</Link></li>
            <li><Link to="/contact" onClick={() => setOpen(false)}>{t.contact}</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
