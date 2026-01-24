import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaTachometerAlt, FaInfoCircle, FaPhone } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path
      ? "text-yellow-300 border-b-2 border-yellow-300"
      : "hover:text-yellow-200";

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-green-800 to-green-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <h1 className="text-2xl font-extrabold tracking-wide text-white flex items-center gap-2">
          🌾 <span>KisanMitra</span>
        </h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center space-x-8 text-white font-semibold">
          <li className={`flex items-center gap-2 ${isActive("/")}`}>
            <FaHome />
            <Link to="/">Home</Link>
          </li>
          <li className={`flex items-center gap-2 ${isActive("/dashboard")}`}>
            <FaTachometerAlt />
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className={`flex items-center gap-2 ${isActive("/about")}`}>
            <FaInfoCircle />
            <Link to="/about">About</Link>
          </li>
          <li className={`flex items-center gap-2 ${isActive("/contact")}`}>
            <FaPhone />
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-white focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden transition-all duration-300 ${
          open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-green-700`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4 text-white font-semibold">
          <li className="flex items-center gap-2">
            <FaHome />
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          </li>
          <li className="flex items-center gap-2">
            <FaTachometerAlt />
            <Link to="/dashboard" onClick={() => setOpen(false)}>Dashboard</Link>
          </li>
          <li className="flex items-center gap-2">
            <FaInfoCircle />
            <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          </li>
          <li className="flex items-center gap-2">
            <FaPhone />
            <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
