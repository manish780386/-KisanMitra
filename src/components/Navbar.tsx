import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome, FaTachometerAlt, FaInfoCircle, FaPhone, FaGlobe, FaBars, FaTimes,
} from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);

  const isActive = (path: string) => location.pathname === path;

  const labels = {
    en: { home: "Home", dashboard: "Dashboard", about: "About", contact: "Contact" },
    hi: { home: "होम", dashboard: "डैशबोर्ड", about: "जानकारी", contact: "संपर्क" },
    mr: { home: "मुख्य", dashboard: "डॅशबोर्ड", about: "माहिती", contact: "संपर्क" },
  };

  const t = labels[lang];

  const navLinks = [
    { path: "/", label: t.home, icon: <FaHome /> },
    { path: "/dashboard", label: t.dashboard, icon: <FaTachometerAlt /> },
    { path: "/about", label: t.about, icon: <FaInfoCircle /> },
    { path: "/contact", label: t.contact, icon: <FaPhone /> },
  ];

  return (
    <>
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-green-900/95 backdrop-blur shadow-xl"
          : "bg-gradient-to-r from-green-800 to-green-600 shadow-lg"
      }`}>
        <div className="max-w-7xl mx-auto px-5 py-3.5 flex justify-between items-center">

          {/* LOGO + LANGUAGE */}
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 group">
              <span className="text-3xl group-hover:scale-110 transition-transform inline-block">🌾</span>
              <span className="text-xl font-extrabold text-white tracking-tight" style={{ fontFamily: "'Baloo 2', cursive" }}>
                KisanMitra
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-1.5 bg-white/15 hover:bg-white/25 px-3 py-1.5 rounded-xl transition cursor-pointer border border-white/20">
              <FaGlobe className="text-green-200 text-sm" />
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value as any)}
                className="bg-transparent text-white text-sm outline-none cursor-pointer font-medium"
              >
                <option value="en" className="text-black bg-white">🇬🇧 EN</option>
                <option value="hi" className="text-black bg-white">🇮🇳 हिंदी</option>
                <option value="mr" className="text-black bg-white">🌸 मराठी</option>
              </select>
            </div>
          </div>

          {/* DESKTOP LINKS */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map(({ path, label, icon }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-200 ${
                    isActive(path)
                      ? "bg-white/20 text-yellow-300 shadow-inner"
                      : "text-white/90 hover:bg-white/10 hover:text-white"
                  }`}
                  style={{ fontFamily: "'Hind', sans-serif" }}
                >
                  <span className="text-xs">{icon}</span> {label}
                  {isActive(path) && <span className="w-1 h-1 bg-yellow-300 rounded-full ml-0.5"></span>}
                </Link>
              </li>
            ))}
          </ul>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white p-2 rounded-xl hover:bg-white/10 transition"
          >
            {open ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="bg-green-900/95 border-t border-white/10 px-5 py-4 space-y-2">
            {/* Language selector mobile */}
            <div className="flex items-center gap-2 mb-4 bg-white/10 rounded-xl px-4 py-2.5">
              <FaGlobe className="text-green-300" />
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value as any)}
                className="bg-transparent text-white flex-1 outline-none font-medium"
              >
                <option value="en" className="text-black bg-white">🇬🇧 English</option>
                <option value="hi" className="text-black bg-white">🇮🇳 हिंदी</option>
                <option value="mr" className="text-black bg-white">🌸 मराठी</option>
              </select>
            </div>

            {navLinks.map(({ path, label, icon }) => (
              <Link key={path} to={path}>
                <div className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                  isActive(path)
                    ? "bg-green-600 text-yellow-300 font-bold"
                    : "text-white/90 hover:bg-white/10"
                }`}>
                  {icon} {label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@700;800&family=Hind:wght@500;600&display=swap');
      `}</style>
    </>
  );
};

export default Navbar;