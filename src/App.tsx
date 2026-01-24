import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Weather from "./pages/Weather";
import CropAdvisory from "./pages/CropAdvisory";
import MandiPrices from "./pages/MandiPrices";
import GovtScheme from "./pages/GovtScheme";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FarmTools from "./pages/FarmTools";
import FarmerChat from "./pages/FarmerChat";

import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/cropadvisory" element={<CropAdvisory />} />
          <Route path="/mandiprice" element={<MandiPrices />} />
          <Route path="/scheme" element={<GovtScheme />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tools" element={<FarmTools />} />
          <Route path="/chat" element={<FarmerChat />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
