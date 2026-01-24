import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Navbar from "./components/Navbar.tsx";
import Weather from "./pages/Weather.tsx";
import CropAdvisory from "./pages/CropAdvisory.tsx";
import MandiPrices from "./pages/MandiPrices.tsx"
import GovtScheme from "./pages/GovtScheme.tsx"
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import FarmTools from "./pages/FarmTools.tsx"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/cropadvisory" element={<CropAdvisory />} />
        <Route path="/mandiprice" element={<MandiPrices />} />
        <Route path="/scheme" element={<GovtScheme />}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/tools" element={<FarmTools/>} />
</Routes>
    </BrowserRouter>
  );
}

export default App;
