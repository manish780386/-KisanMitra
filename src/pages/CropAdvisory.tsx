import { useState } from "react";
import {
  FaSeedling,
  FaLeaf,
  FaTint,
  FaSun,
  FaExclamationTriangle,
  FaBug,
  FaChartLine,
} from "react-icons/fa";

// Crop, Disease, and Pest Types
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

// Crops Data
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
      { name: "Armyworm", remedy: "Manual removal or neem spray" },
    ],
    marketTips: "Best selling period: April, current mandi price approx ₹2200/quintal",
  },
  rice: {
    name: "Rice",
    season: "Kharif",
    sowing: "Jun - Jul",
    harvest: "Oct - Nov",
    irrigation: "Every 5-7 days",
    sunlight: "5-7 hours/day",
    diseases: [
      { name: "Blast Disease", severity: "high", remedy: "Use resistant varieties and proper spacing" },
    ],
    pests: [
      { name: "Brown Plant Hopper", remedy: "Apply neem-based pesticides" },
    ],
    marketTips: "Best selling period: Nov, current mandi price approx ₹2500/quintal",
  },
  maize: {
    name: "Maize",
    season: "Kharif",
    sowing: "Jun - Jul",
    harvest: "Sep - Oct",
    irrigation: "Every 7 days",
    sunlight: "6-8 hours/day",
    diseases: [
      { name: "Downy Mildew", severity: "medium", remedy: "Use resistant seeds & proper spacing" },
    ],
    pests: [
      { name: "Stem Borer", remedy: "Use pheromone traps and biopesticides" },
    ],
    marketTips: "Best selling period: Oct, current mandi price approx ₹1800/quintal",
  },
  soybean: {
    name: "Soybean",
    season: "Kharif",
    sowing: "Jun - Jul",
    harvest: "Sep - Oct",
    irrigation: "Every 6-7 days",
    sunlight: "5-7 hours/day",
    diseases: [
      { name: "Charcoal Rot", severity: "medium", remedy: "Avoid water stress, crop rotation" },
    ],
    pests: [
      { name: "Pod Borer", remedy: "Use pheromone traps and neem-based sprays" },
    ],
    marketTips: "Best selling period: Oct-Nov, current mandi price approx ₹3500/quintal",
  },
  mustard: {
    name: "Mustard",
    season: "Rabi",
    sowing: "Oct - Nov",
    harvest: "Feb - Mar",
    irrigation: "Every 10 days",
    sunlight: "6 hours/day",
    diseases: [
      { name: "White Rust", severity: "medium", remedy: "Spray fungicide and remove affected leaves" },
    ],
    pests: [
      { name: "Aphids", remedy: "Neem oil spray or ladybugs" },
    ],
    marketTips: "Best selling period: Mar-Apr, current mandi price approx ₹4000/quintal",
  },
};

const CropAdvisory: React.FC = () => {
  const [selectedCrop, setSelectedCrop] = useState<string>("wheat");
  const crop = cropsData[selectedCrop];

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <h1 className="text-4xl font-bold text-green-700 text-center">
          Crop Advisory 🌱
        </h1>
        <p className="text-center text-gray-600 mt-2">
          Select your crop to get complete guidance on farming, diseases, pests, irrigation & market tips.
        </p>

        {/* Crop Selector */}
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

        {/* Crop Info */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {/* Seasonal Info */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              🌾 {crop.name} - Seasonal Tips
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>🌱 Sowing Period: {crop.sowing}</li>
              <li>🌿 Harvest Period: {crop.harvest}</li>
              <li>💧 Irrigation: {crop.irrigation}</li>
              <li>🌞 Sunlight: {crop.sunlight}</li>
            </ul>
          </div>

          {/* Market Info */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              <FaChartLine className="inline mr-2" /> Market Tips
            </h2>
            <p className="text-gray-700">{crop.marketTips}</p>
          </div>
        </div>

        {/* Disease Alerts */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            <FaExclamationTriangle className="inline mr-2" /> Disease Alerts
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {crop.diseases.map((disease, i) => (
              <div key={i} className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
                <p className="font-semibold">{disease.name}</p>
                <p>Severity: {disease.severity}</p>
                <p className="text-gray-600">Remedy: {disease.remedy}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pest Alerts */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            <FaBug className="inline mr-2" /> Pest Guidance
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {crop.pests.map((pest, i) => (
              <div key={i} className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
                <p className="font-semibold">{pest.name}</p>
                <p className="text-gray-600">Remedy: {pest.remedy}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default CropAdvisory;
