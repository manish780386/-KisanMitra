import { useState } from "react";
import {  FaMapMarkerAlt, FaSearch, FaArrowUp, FaArrowDown } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

interface MandiPrice {
  commodity: string;
  variety: string;
  arrival_date: string;
  min_price: number;
  max_price: number;
  modal_price: number;
  state: string;
  district: string;
  trend: "up" | "down" | "stable";
}

const stateDistricts: Record<string, string[]> = {
  "Madhya Pradesh": ["Indore", "Bhopal", "Gwalior", "Jabalpur", "Betul", "Harda", "Sidhi", "Sagar", "Rewa"],
  "Maharashtra": ["Pune", "Mumbai", "Nagpur", "Nashik", "Aurangabad", "Solapur"],
  "Rajasthan": ["Jaipur", "Udaipur", "Jodhpur", "Kota", "Bikaner"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Agra", "Varanasi", "Meerut"],
  "Punjab": ["Ludhiana", "Amritsar", "Jalandhar", "Patiala"],
  "Haryana": ["Ambala", "Hisar", "Rohtak", "Karnal"],
};

// Mock data generator for demo
const generateMockPrices = (state: string, district: string): MandiPrice[] => {
  const crops = [
    { commodity: "Wheat", variety: "Sharbati" },
    { commodity: "Soybean", variety: "JS-335" },
    { commodity: "Maize", variety: "Hybrid" },
    { commodity: "Mustard", variety: "RH-749" },
    { commodity: "Rice", variety: "Basmati" },
    { commodity: "Cotton", variety: "BT Cotton" },
    { commodity: "Tomato", variety: "Local" },
    { commodity: "Onion", variety: "Red" },
  ];

  const basePrice: Record<string, number> = {
    Wheat: 2275, Soybean: 4892, Maize: 2090, Mustard: 5650,
    Rice: 2300, Cotton: 6620, Tomato: 1200, Onion: 800,
  };

  const today = new Date().toLocaleDateString("en-IN");
  return crops.map(({ commodity, variety }) => {
    const base = basePrice[commodity] || 2000;
    const variation = Math.round((Math.random() - 0.5) * base * 0.1);
    const modal = base + variation;
    const trend = variation > 50 ? "up" : variation < -50 ? "down" : "stable";
    return {
      commodity,
      variety,
      arrival_date: today,
      min_price: Math.round(modal * 0.92),
      max_price: Math.round(modal * 1.08),
      modal_price: modal,
      state,
      district,
      trend,
    };
  });
};

const MandiPrices: React.FC = () => {
  const { lang } = useLanguage();
  const [stateName, setStateName] = useState<string>("");
  const [cityName, setCityName] = useState<string>("");
  const [prices, setPrices] = useState<MandiPrice[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [searched, setSearched] = useState(false);

  const t = {
    en: {
      title: "Mandi Prices",
      subtitle: "Get today's mandi prices by state and city.",
      selectState: "Select State",
      selectCity: "Select City",
      search: "Get Prices",
      loading: "Fetching prices...",
      noResults: "No prices found for this location.",
      commodity: "Commodity",
      variety: "Variety",
      date: "Date",
      minPrice: "Min ₹",
      maxPrice: "Max ₹",
      modalPrice: "Modal ₹",
      location: "Location",
      trend: "Trend",
      note: "* Prices are indicative. Verify at local mandi.",
    },
    hi: {
      title: "मंडी कीमतें",
      subtitle: "राज्य और शहर के अनुसार आज के मंडी भाव देखें।",
      selectState: "राज्य चुनें",
      selectCity: "शहर चुनें",
      search: "भाव देखें",
      loading: "भाव लोड हो रहे हैं...",
      noResults: "इस स्थान के लिए कोई भाव नहीं मिले।",
      commodity: "फसल",
      variety: "किस्म",
      date: "तारीख",
      minPrice: "न्यूनतम ₹",
      maxPrice: "अधिकतम ₹",
      modalPrice: "मोडल ₹",
      location: "स्थान",
      trend: "रुझान",
      note: "* कीमतें सांकेतिक हैं। स्थानीय मंडी में सत्यापित करें।",
    },
    mr: {
      title: "मंडी दर",
      subtitle: "राज्य आणि शहरानुसार आजचे मंडी दर पहा.",
      selectState: "राज्य निवडा",
      selectCity: "शहर निवडा",
      search: "दर पहा",
      loading: "दर लोड होत आहेत...",
      noResults: "या ठिकाणासाठी कोणतेही दर सापडले नाहीत.",
      commodity: "पीक",
      variety: "जात",
      date: "तारीख",
      minPrice: "किमान ₹",
      maxPrice: "कमाल ₹",
      modalPrice: "मोडल ₹",
      location: "ठिकाण",
      trend: "कल",
      note: "* दर सूचक आहेत. स्थानिक मंडीत पडताळा.",
    },
  };

  const text = t[lang];

  const fetchMandiPrices = async () => {
    if (!stateName || !cityName) {
      setError(lang === "hi" ? "कृपया राज्य और शहर दोनों चुनें!" : lang === "mr" ? "कृपया राज्य आणि शहर दोन्ही निवडा!" : "Please select both state and city!");
      return;
    }
    setLoading(true);
    setError("");
    setPrices([]);
    setSearched(false);

    // Simulate API call with mock data
    await new Promise(resolve => setTimeout(resolve, 1200));
    const mockData = generateMockPrices(stateName, cityName);
    setPrices(mockData);
    setSearched(true);
    setLoading(false);
  };

  const trendIcon = (trend: string) => {
    if (trend === "up") return <FaArrowUp className="text-green-600 inline" />;
    if (trend === "down") return <FaArrowDown className="text-red-500 inline" />;
    return <span className="text-gray-400 inline">—</span>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50 p-6">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Hind:wght@400;500;600&display=swap');
        .price-row { transition: background 0.15s ease; }
        .price-row:hover { background: #f0fdf4 !important; }
      `}</style>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            💰 Live Market Prices
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800" style={{ fontFamily: "'Baloo 2', cursive" }}>
            {text.title}
          </h1>
          <p className="text-gray-500 mt-2" style={{ fontFamily: "'Hind', sans-serif" }}>{text.subtitle}</p>
        </div>

        {/* SELECTORS */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
          <div className="flex flex-wrap gap-4 justify-center items-end">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-600">{text.selectState}</label>
              <select
                value={stateName}
                onChange={(e) => { setStateName(e.target.value); setCityName(""); }}
                className="border-2 border-gray-200 rounded-xl px-4 py-3 w-52 focus:outline-none focus:border-green-500 text-gray-700"
              >
                <option value="">{text.selectState}</option>
                {Object.keys(stateDistricts).map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-600">{text.selectCity}</label>
              <select
                value={cityName}
                onChange={(e) => setCityName(e.target.value)}
                disabled={!stateName}
                className="border-2 border-gray-200 rounded-xl px-4 py-3 w-52 focus:outline-none focus:border-green-500 disabled:opacity-50 text-gray-700"
              >
                <option value="">{text.selectCity}</option>
                {stateName && stateDistricts[stateName].map(d => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>

            <button
              onClick={fetchMandiPrices}
              className="bg-green-700 text-white px-7 py-3 rounded-xl hover:bg-green-800 flex items-center gap-2 font-bold shadow-md transition"
            >
              <FaSearch /> {text.search}
            </button>
          </div>

          {error && <p className="text-center mt-4 text-red-600 font-semibold">{error}</p>}
        </div>

        {loading && (
          <div className="text-center py-16">
            <div className="text-5xl mb-4 animate-bounce">🌾</div>
            <p className="text-gray-500 font-medium">{text.loading}</p>
          </div>
        )}

        {searched && prices.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2" style={{ fontFamily: "'Baloo 2', cursive" }}>
                <FaMapMarkerAlt className="text-green-600" /> {cityName}, {stateName}
              </h2>
              <span className="bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full">
                {prices.length} commodities
              </span>
            </div>

            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="bg-gradient-to-r from-green-700 to-emerald-600 text-white">
                      {[text.commodity, text.variety, text.date, text.minPrice, text.maxPrice, text.modalPrice, text.trend].map(h => (
                        <th key={h} className="px-4 py-3.5 text-left font-semibold">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {prices.map((item, i) => (
                      <tr key={i} className={`price-row ${i % 2 === 0 ? "bg-white" : "bg-green-50/50"}`}>
                        <td className="px-4 py-3 font-bold text-gray-800">{item.commodity}</td>
                        <td className="px-4 py-3 text-gray-600">{item.variety}</td>
                        <td className="px-4 py-3 text-gray-500 text-xs">{item.arrival_date}</td>
                        <td className="px-4 py-3 text-gray-700">₹{item.min_price.toLocaleString("en-IN")}</td>
                        <td className="px-4 py-3 text-gray-700">₹{item.max_price.toLocaleString("en-IN")}</td>
                        <td className="px-4 py-3 font-bold text-green-700 text-base">₹{item.modal_price.toLocaleString("en-IN")}</td>
                        <td className="px-4 py-3">{trendIcon(item.trend)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-center text-gray-400 text-xs mt-3">{text.note}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MandiPrices;