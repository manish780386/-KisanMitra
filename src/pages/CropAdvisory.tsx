import { useState } from "react";
import {
  FaChartLine,
  FaExclamationTriangle,
  FaBug,
} from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

interface Disease {
  name: string;
  severity: "low" | "medium" | "high";
  remedy: string;
}

interface Pest {
  name: string;
  remedy: string;
}

interface Crop {
  name: string;
  season: string;
  sowing: string;
  harvest: string;
  irrigation: string;
  sunlight: string;
  diseases: Disease[];
  pests: Pest[];
  marketTips: string;
}

const cropsData: Record<string, Crop> = {
  wheat: {
    name: "Wheat",
    season: "Rabi",
    sowing: "Nov - Dec",
    harvest: "Mar - Apr",
    irrigation: "Every 7-10 days",
    sunlight: "6-8 hours/day",
    diseases: [
      { name: "Leaf Rust", severity: "medium", remedy: "Use fungicide or resistant variety" },
      { name: "Powdery Mildew", severity: "low", remedy: "Spray neem oil or sulfur" },
    ],
    pests: [
      { name: "Aphids", remedy: "Introduce ladybugs or use insecticidal soap" },
    ],
    marketTips: "Best selling period: April, mandi price ~ ₹2200/quintal",
  },
  rice: {
    name: "Rice",
    season: "Kharif",
    sowing: "Jun - Jul",
    harvest: "Oct - Nov",
    irrigation: "Every 5-7 days",
    sunlight: "5-7 hours/day",
    diseases: [
      { name: "Blast Disease", severity: "high", remedy: "Use resistant varieties" },
    ],
    pests: [
      { name: "Brown Plant Hopper", remedy: "Neem-based pesticide" },
    ],
    marketTips: "Best selling period: Nov, mandi price ~ ₹2500/quintal",
  },
};

const CropAdvisory: React.FC = () => {
  const { lang } = useLanguage();
  const [selectedCrop, setSelectedCrop] = useState("wheat");
  const crop = cropsData[selectedCrop];

  const text = {
    en: {
      title: "Crop Advisory",
      subtitle:
        "Select your crop to get guidance on farming, diseases, pests, irrigation & market tips.",
      seasonal: "Seasonal Tips",
      sowing: "Sowing Period",
      harvest: "Harvest Period",
      irrigation: "Irrigation",
      sunlight: "Sunlight",
      market: "Market Tips",
      disease: "Disease Alerts",
      pest: "Pest Guidance",
      severity: "Severity",
      remedy: "Remedy",
    },
    hi: {
      title: "फसल सलाह",
      subtitle:
        "खेती, रोग, कीट, सिंचाई और बाजार जानकारी के लिए फसल चुनें।",
      seasonal: "मौसमी जानकारी",
      sowing: "बुवाई समय",
      harvest: "कटाई समय",
      irrigation: "सिंचाई",
      sunlight: "धूप",
      market: "बाजार सलाह",
      disease: "रोग चेतावनी",
      pest: "कीट नियंत्रण",
      severity: "गंभीरता",
      remedy: "उपाय",
    },
    mr: {
      title: "पीक सल्ला",
      subtitle:
        "शेती, रोग, कीड, सिंचन आणि बाजार माहितीसाठी पीक निवडा.",
      seasonal: "हंगामी माहिती",
      sowing: "पेरणी कालावधी",
      harvest: "कापणी कालावधी",
      irrigation: "सिंचन",
      sunlight: "सूर्यप्रकाश",
      market: "बाजार सल्ला",
      disease: "रोग सूचना",
      pest: "कीड नियंत्रण",
      severity: "तीव्रता",
      remedy: "उपाय",
    },
  };

  const t = text[lang];

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-green-700 text-center">
          {t.title} 🌱
        </h1>
        <p className="text-center text-gray-600 mt-2">
          {t.subtitle}
        </p>

        <div className="flex justify-center gap-4 mt-6 flex-wrap">
          {Object.keys(cropsData).map((key) => (
            <button
              key={key}
              onClick={() => setSelectedCrop(key)}
              className={`px-4 py-2 rounded font-semibold ${
                selectedCrop === key
                  ? "bg-green-700 text-white"
                  : "bg-white border text-green-700 hover:bg-green-100"
              }`}
            >
              {cropsData[key].name}
            </button>
          ))}
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              🌾 {crop.name} - {t.seasonal}
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>🌱 {t.sowing}: {crop.sowing}</li>
              <li>🌿 {t.harvest}: {crop.harvest}</li>
              <li>💧 {t.irrigation}: {crop.irrigation}</li>
              <li>🌞 {t.sunlight}: {crop.sunlight}</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              <FaChartLine className="inline mr-2" /> {t.market}
            </h2>
            <p className="text-gray-700">{crop.marketTips}</p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            <FaExclamationTriangle className="inline mr-2" /> {t.disease}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {crop.diseases.map((d, i) => (
              <div key={i} className="bg-white p-4 rounded-xl shadow">
                <p className="font-semibold">{d.name}</p>
                <p>{t.severity}: {d.severity}</p>
                <p className="text-gray-600">
                  {t.remedy}: {d.remedy}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            <FaBug className="inline mr-2" /> {t.pest}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {crop.pests.map((p, i) => (
              <div key={i} className="bg-white p-4 rounded-xl shadow">
                <p className="font-semibold">{p.name}</p>
                <p className="text-gray-600">
                  {t.remedy}: {p.remedy}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default CropAdvisory;
