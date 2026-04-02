import { useState } from "react";
import { FaChartLine, FaExclamationTriangle, FaBug, FaSeedling, FaTint, FaSun } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

interface Disease {
  name: { en: string; hi: string; mr: string };
  severity: "low" | "medium" | "high";
  remedy: { en: string; hi: string; mr: string };
}

interface Pest {
  name: { en: string; hi: string; mr: string };
  remedy: { en: string; hi: string; mr: string };
}

interface Crop {
  emoji: string;
  name: { en: string; hi: string; mr: string };
  season: { en: string; hi: string; mr: string };
  sowing: string;
  harvest: string;
  irrigation: { en: string; hi: string; mr: string };
  sunlight: string;
  diseases: Disease[];
  pests: Pest[];
  marketTips: { en: string; hi: string; mr: string };
  soilType: { en: string; hi: string; mr: string };
  fertilizer: { en: string; hi: string; mr: string };
}

const cropsData: Record<string, Crop> = {
  wheat: {
    emoji: "🌾",
    name: { en: "Wheat", hi: "गेहूं", mr: "गहू" },
    season: { en: "Rabi (Winter)", hi: "रबी (सर्दी)", mr: "रब्बी (हिवाळा)" },
    sowing: "Nov - Dec",
    harvest: "Mar - Apr",
    irrigation: { en: "Every 7-10 days", hi: "हर 7-10 दिन", mr: "दर 7-10 दिवस" },
    sunlight: "6-8 hrs/day",
    soilType: { en: "Loamy / Clay Loam", hi: "दोमट / क्ले दोमट", mr: "चिकणमाती / चिकण दोमट" },
    fertilizer: { en: "NPK 120:60:40 kg/ha", hi: "NPK 120:60:40 kg/ha", mr: "NPK 120:60:40 kg/ha" },
    diseases: [
      {
        name: { en: "Leaf Rust", hi: "पत्ती का रतुआ", mr: "पानांचा गंज" },
        severity: "medium",
        remedy: { en: "Apply Mancozeb 75% WP @ 2g/L water", hi: "मैन्कोज़ेब 75% WP @ 2g/L पानी लगाएं", mr: "Mancozeb 75% WP @ 2g/L पाणी फवारा" }
      },
      {
        name: { en: "Powdery Mildew", hi: "पाउडरी मिल्ड्यू", mr: "भुरी" },
        severity: "low",
        remedy: { en: "Spray neem oil or sulfur dust", hi: "नीम तेल या सल्फर पाउडर का छिड़काव", mr: "कडुलिंब तेल किंवा सल्फर फवारा" }
      },
      {
        name: { en: "Karnal Bunt", hi: "करनाल बंट", mr: "करनाल बंट" },
        severity: "high",
        remedy: { en: "Seed treatment with Thiram 75% DS @ 2.5g/kg", hi: "थिरम 75% DS @ 2.5g/kg से बीज उपचार", mr: "Thiram 75% DS @ 2.5g/kg बीज प्रक्रिया" }
      },
    ],
    pests: [
      { name: { en: "Aphids", hi: "माहू", mr: "माव" }, remedy: { en: "Spray Dimethoate 30 EC @ 1ml/L", hi: "डाइमेथोएट 30 EC @ 1ml/L का छिड़काव", mr: "Dimethoate 30 EC @ 1ml/L फवारा" } },
      { name: { en: "Termites", hi: "दीमक", mr: "वाळवी" }, remedy: { en: "Chlorpyrifos 20 EC soil drench", hi: "क्लोरपाइरीफॉस 20 EC मिट्टी में डालें", mr: "Chlorpyrifos 20 EC मातीत मिसळा" } },
    ],
    marketTips: {
      en: "Best selling period: April-May. MSP 2024: ₹2,275/quintal. Store in dry godown for better price.",
      hi: "बेस्ट सेलिंग पीरियड: अप्रैल-मई। MSP 2024: ₹2,275/क्विंटल। बेहतर कीमत के लिए सूखे गोदाम में स्टोर करें।",
      mr: "सर्वोत्तम विक्री कालावधी: एप्रिल-मे. MSP 2024: ₹2,275/क्विंटल. चांगल्या भावासाठी कोरड्या गोदामात साठवा.",
    },
  },
  rice: {
    emoji: "🍚",
    name: { en: "Rice", hi: "धान", mr: "भात" },
    season: { en: "Kharif (Monsoon)", hi: "खरीफ (मानसून)", mr: "खरीप (पावसाळा)" },
    sowing: "Jun - Jul",
    harvest: "Oct - Nov",
    irrigation: { en: "Maintain 5cm water level", hi: "5cm पानी का स्तर बनाए रखें", mr: "5cm पाण्याची पातळी ठेवा" },
    sunlight: "5-7 hrs/day",
    soilType: { en: "Clay / Silty Clay", hi: "क्ले / सिल्टी क्ले", mr: "चिकणमाती" },
    fertilizer: { en: "NPK 120:60:60 kg/ha", hi: "NPK 120:60:60 kg/ha", mr: "NPK 120:60:60 kg/ha" },
    diseases: [
      {
        name: { en: "Blast Disease", hi: "ब्लास्ट रोग", mr: "ब्लास्ट रोग" },
        severity: "high",
        remedy: { en: "Spray Tricyclazole 75% WP @ 0.6g/L", hi: "ट्राइसाइक्लाज़ोल 75% WP @ 0.6g/L का छिड़काव", mr: "Tricyclazole 75% WP @ 0.6g/L फवारा" }
      },
      {
        name: { en: "Sheath Blight", hi: "शीथ ब्लाइट", mr: "आवरण करपा" },
        severity: "medium",
        remedy: { en: "Apply Hexaconazole 5 EC @ 2ml/L", hi: "हेक्साकोनाज़ोल 5 EC @ 2ml/L लगाएं", mr: "Hexaconazole 5 EC @ 2ml/L फवारा" }
      },
    ],
    pests: [
      { name: { en: "Brown Plant Hopper", hi: "भूरा माहू", mr: "तपकिरी तुडतुडा" }, remedy: { en: "Buprofezin 25 SC @ 1.5ml/L", hi: "बुप्रोफेज़िन 25 SC @ 1.5ml/L", mr: "Buprofezin 25 SC @ 1.5ml/L" } },
      { name: { en: "Stem Borer", hi: "तना बेधक", mr: "खोड किडा" }, remedy: { en: "Apply Carbofuran 3G granules in water", hi: "पानी में कार्बोफ्यूरान 3G दाने डालें", mr: "Carbofuran 3G दाणे पाण्यात टाका" } },
    ],
    marketTips: {
      en: "Best selling period: Dec-Jan. MSP 2024: ₹2,300/quintal. Parboiled rice fetches 10-15% premium.",
      hi: "बेस्ट सेलिंग पीरियड: दिसंबर-जनवरी। MSP 2024: ₹2,300/क्विंटल। उबले चावल को 10-15% प्रीमियम मिलता है।",
      mr: "सर्वोत्तम विक्री: डिसेंबर-जानेवारी. MSP 2024: ₹2,300/क्विंटल. उकडलेल्या तांदळाला 10-15% जास्त भाव.",
    },
  },
  maize: {
    emoji: "🌽",
    name: { en: "Maize", hi: "मक्का", mr: "मका" },
    season: { en: "Kharif / Rabi", hi: "खरीफ / रबी", mr: "खरीप / रब्बी" },
    sowing: "Jun-Jul / Oct-Nov",
    harvest: "Sep-Oct / Feb-Mar",
    irrigation: { en: "Every 8-10 days", hi: "हर 8-10 दिन", mr: "दर 8-10 दिवस" },
    sunlight: "8 hrs/day",
    soilType: { en: "Well-drained Loam", hi: "अच्छी जल निकासी वाली दोमट", mr: "चांगली निचरा होणारी दोमट माती" },
    fertilizer: { en: "NPK 150:75:75 kg/ha", hi: "NPK 150:75:75 kg/ha", mr: "NPK 150:75:75 kg/ha" },
    diseases: [
      {
        name: { en: "Downy Mildew", hi: "डाउनी मिल्ड्यू", mr: "केवडा रोग" },
        severity: "high",
        remedy: { en: "Metalaxyl 8% + Mancozeb 64% WP @ 2g/L", hi: "मेटालैक्सिल + मैन्कोज़ेब @ 2g/L", mr: "Metalaxyl + Mancozeb @ 2g/L फवारा" }
      },
    ],
    pests: [
      { name: { en: "Fall Armyworm", hi: "फॉल आर्मीवर्म", mr: "फॉल आर्मीवर्म" }, remedy: { en: "Emamectin benzoate 5 SG @ 0.4g/L", hi: "इमामेक्टिन बेंजोएट @ 0.4g/L", mr: "Emamectin benzoate @ 0.4g/L फवारा" } },
    ],
    marketTips: {
      en: "MSP 2024: ₹2,090/quintal. Poultry feed demand drives prices in Oct-Nov.",
      hi: "MSP 2024: ₹2,090/क्विंटल। अक्टूबर-नवंबर में पोल्ट्री फीड की मांग कीमतें बढ़ाती है।",
      mr: "MSP 2024: ₹2,090/क्विंटल. ऑक्टोबर-नोव्हेंबरमध्ये कुक्कुट खाद्याची मागणी भाव वाढवते.",
    },
  },
  soybean: {
    emoji: "🫘",
    name: { en: "Soybean", hi: "सोयाबीन", mr: "सोयाबीन" },
    season: { en: "Kharif (Monsoon)", hi: "खरीफ (मानसून)", mr: "खरीप (पावसाळा)" },
    sowing: "Jun - Jul",
    harvest: "Sep - Oct",
    irrigation: { en: "Once at flowering stage", hi: "फूलने की अवस्था में एक बार", mr: "फुलोरा अवस्थेत एकदा" },
    sunlight: "6-8 hrs/day",
    soilType: { en: "Well-drained Black/Red Soil", hi: "काली/लाल मिट्टी", mr: "काळी/लाल माती" },
    fertilizer: { en: "Rhizobium seed treatment + NPK 20:80:40", hi: "राइजोबियम बीज उपचार + NPK 20:80:40", mr: "Rhizobium बीज प्रक्रिया + NPK 20:80:40" },
    diseases: [
      {
        name: { en: "Yellow Mosaic Virus", hi: "पीला मोज़ेक वायरस", mr: "पिवळा मोझॅक विषाणू" },
        severity: "high",
        remedy: { en: "Control whitefly vector with Imidacloprid 17.8 SL @ 0.5ml/L", hi: "इमिडाक्लोप्रिड से सफेद मक्खी नियंत्रण", mr: "Imidacloprid @ 0.5ml/L फवारून पांढरी माशी नियंत्रण" }
      },
    ],
    pests: [
      { name: { en: "Tobacco Caterpillar", hi: "तम्बाकू इल्ली", mr: "तंबाखू अळी" }, remedy: { en: "Spinosad 45 SC @ 0.3ml/L or NSKE 5%", hi: "स्पिनोसैड @ 0.3ml/L या NSKE 5%", mr: "Spinosad @ 0.3ml/L किंवा NSKE 5%" } },
    ],
    marketTips: {
      en: "MSP 2024: ₹4,892/quintal. MP is top producer. Oct-Nov best selling period.",
      hi: "MSP 2024: ₹4,892/क्विंटल। MP सबसे बड़ा उत्पादक। अक्टूबर-नवंबर सबसे अच्छा बेचने का समय।",
      mr: "MSP 2024: ₹4,892/क्विंटल. MP आघाडीचे उत्पादक राज्य. ऑक्टोबर-नोव्हेंबर सर्वोत्तम विक्री वेळ.",
    },
  },
  mustard: {
    emoji: "🌻",
    name: { en: "Mustard", hi: "सरसों", mr: "मोहरी" },
    season: { en: "Rabi (Winter)", hi: "रबी (सर्दी)", mr: "रब्बी (हिवाळा)" },
    sowing: "Oct - Nov",
    harvest: "Feb - Mar",
    irrigation: { en: "3-4 times total", hi: "कुल 3-4 बार", mr: "एकूण 3-4 वेळा" },
    sunlight: "6 hrs/day",
    soilType: { en: "Sandy Loam / Loam", hi: "बलुई दोमट", mr: "वालुकामय दोमट" },
    fertilizer: { en: "NPK 80:40:40 kg/ha + Sulphur 20 kg", hi: "NPK 80:40:40 kg/ha + सल्फर 20 kg", mr: "NPK 80:40:40 kg/ha + गंधक 20 kg" },
    diseases: [
      {
        name: { en: "White Rust", hi: "सफेद रतुआ", mr: "पांढरा गंज" },
        severity: "medium",
        remedy: { en: "Metalaxyl + Mancozeb @ 2g/L at first sign", hi: "पहले संकेत पर मेटालैक्सिल + मैन्कोज़ेब @ 2g/L", mr: "पहिल्या लक्षणावर Metalaxyl + Mancozeb @ 2g/L" }
      },
    ],
    pests: [
      { name: { en: "Mustard Aphid", hi: "सरसों का माहू", mr: "मोहरीचा माव" }, remedy: { en: "Dimethoate 30 EC @ 1.5ml/L when 10-15% plants are infested", hi: "10-15% पौधों में संक्रमण पर डाइमेथोएट 1.5ml/L", mr: "10-15% झाडे प्रभावित होताच Dimethoate 1.5ml/L" } },
    ],
    marketTips: {
      en: "MSP 2024: ₹5,650/quintal. Oil mills pay premium for high erucic acid variety.",
      hi: "MSP 2024: ₹5,650/क्विंटल। तेल मिलें उच्च एरूसिक एसिड वेरायटी के लिए प्रीमियम देती हैं।",
      mr: "MSP 2024: ₹5,650/क्विंटल. तेल गिरण्या उच्च Erucic acid वाणासाठी जास्त भाव देतात.",
    },
  },
};

const severityConfig = {
  low: { color: "bg-yellow-100 text-yellow-700 border-yellow-200", label: { en: "Low", hi: "कम", mr: "कमी" } },
  medium: { color: "bg-orange-100 text-orange-700 border-orange-200", label: { en: "Medium", hi: "मध्यम", mr: "मध्यम" } },
  high: { color: "bg-red-100 text-red-700 border-red-200", label: { en: "High", hi: "अधिक", mr: "जास्त" } },
};

const CropAdvisory: React.FC = () => {
  const { lang } = useLanguage();
  const [selectedCrop, setSelectedCrop] = useState("wheat");
  const crop = cropsData[selectedCrop];

  const t = {
    en: {
      title: "Crop Advisory",
      subtitle: "Select a crop for complete farming guidance — from sowing to market.",
      seasonal: "Seasonal Info",
      sowing: "Sowing Period",
      harvest: "Harvest Period",
      irrigation: "Irrigation",
      sunlight: "Sunlight",
      market: "Market Tips",
      disease: "Disease Alerts",
      pest: "Pest Control",
      severity: "Risk Level",
      remedy: "Remedy",
      soil: "Soil Type",
      fertilizer: "Fertilizer Guide",
    },
    hi: {
      title: "फसल सलाह",
      subtitle: "बुवाई से बाजार तक की पूरी खेती जानकारी के लिए फसल चुनें।",
      seasonal: "मौसमी जानकारी",
      sowing: "बुवाई समय",
      harvest: "कटाई समय",
      irrigation: "सिंचाई",
      sunlight: "धूप",
      market: "बाजार सलाह",
      disease: "रोग चेतावनी",
      pest: "कीट नियंत्रण",
      severity: "जोखिम स्तर",
      remedy: "उपाय",
      soil: "मिट्टी का प्रकार",
      fertilizer: "खाद गाइड",
    },
    mr: {
      title: "पीक सल्ला",
      subtitle: "पेरणीपासून बाजारापर्यंत संपूर्ण शेती माहितीसाठी पीक निवडा.",
      seasonal: "हंगामी माहिती",
      sowing: "पेरणी कालावधी",
      harvest: "कापणी कालावधी",
      irrigation: "सिंचन",
      sunlight: "सूर्यप्रकाश",
      market: "बाजार सल्ला",
      disease: "रोग सूचना",
      pest: "कीड नियंत्रण",
      severity: "धोका पातळी",
      remedy: "उपाय",
      soil: "मातीचा प्रकार",
      fertilizer: "खत मार्गदर्शन",
    },
  };

  const text = t[lang];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 p-6">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Hind:wght@400;500;600&display=swap');
        .crop-btn { transition: all 0.2s cubic-bezier(0.4,0,0.2,1); }
        .crop-btn:hover { transform: translateY(-2px); }
        .info-card { animation: fadeUp 0.3s ease; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:none; } }
      `}</style>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🌱 Advisory System
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800" style={{ fontFamily: "'Baloo 2', cursive" }}>
            {text.title}
          </h1>
          <p className="text-gray-500 mt-2 max-w-xl mx-auto" style={{ fontFamily: "'Hind', sans-serif" }}>{text.subtitle}</p>
        </div>

        {/* CROP SELECTOR */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {Object.entries(cropsData).map(([key, c]) => (
            <button
              key={key}
              onClick={() => setSelectedCrop(key)}
              className={`crop-btn flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-sm border-2 ${
                selectedCrop === key
                  ? "bg-green-700 text-white border-green-700 shadow-lg scale-105"
                  : "bg-white text-gray-700 border-gray-200 hover:border-green-400"
              }`}
              style={{ fontFamily: "'Hind', sans-serif" }}
            >
              <span className="text-xl">{c.emoji}</span>
              {c.name[lang]}
            </button>
          ))}
        </div>

        <div key={selectedCrop} className="info-card space-y-6">
          {/* TOP ROW */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Seasonal Card */}
            <div className="md:col-span-2 bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-xl font-bold text-green-700 mb-4 flex items-center gap-2" style={{ fontFamily: "'Baloo 2', cursive" }}>
                <FaSeedling /> {crop.emoji} {crop.name[lang]} — {text.seasonal}
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: "🌱", label: text.sowing, value: crop.sowing },
                  { icon: "✂️", label: text.harvest, value: crop.harvest },
                  { icon: "💧", label: text.irrigation, value: crop.irrigation[lang] },
                  { icon: "☀️", label: text.sunlight, value: crop.sunlight },
                  { icon: "🌍", label: text.soil, value: crop.soilType[lang] },
                  { icon: "🧪", label: text.fertilizer, value: crop.fertilizer[lang] },
                ].map((item, i) => (
                  <div key={i} className="bg-green-50 rounded-xl p-3 flex items-start gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">{item.label}</p>
                      <p className="text-gray-800 font-semibold text-sm">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Market Card */}
            <div className="bg-gradient-to-br from-green-700 to-emerald-600 text-white rounded-2xl shadow-md p-6">
              <h2 className="text-xl font-bold mb-3 flex items-center gap-2" style={{ fontFamily: "'Baloo 2', cursive" }}>
                <FaChartLine /> {text.market}
              </h2>
              <p className="text-green-100 leading-relaxed text-sm" style={{ fontFamily: "'Hind', sans-serif" }}>
                {crop.marketTips[lang]}
              </p>
              <div className="mt-4 bg-white/20 rounded-xl p-3 text-center">
                <p className="text-xs text-green-200">Season</p>
                <p className="font-bold text-lg">{crop.season[lang]}</p>
              </div>
            </div>
          </div>

          {/* DISEASES */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-bold text-red-600 mb-4 flex items-center gap-2" style={{ fontFamily: "'Baloo 2', cursive" }}>
              <FaExclamationTriangle /> {text.disease}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {crop.diseases.map((d, i) => (
                <div key={i} className="border-2 border-red-100 rounded-xl p-4 hover:border-red-200 transition">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-bold text-gray-800">{d.name[lang]}</p>
                    <span className={`text-xs font-bold px-2 py-1 rounded-full border ${severityConfig[d.severity].color}`}>
                      {severityConfig[d.severity].label[lang]}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    <span className="font-semibold text-green-700">✅ {text.remedy}: </span>
                    {d.remedy[lang]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* PESTS */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-bold text-orange-600 mb-4 flex items-center gap-2" style={{ fontFamily: "'Baloo 2', cursive" }}>
              <FaBug /> {text.pest}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {crop.pests.map((p, i) => (
                <div key={i} className="border-2 border-orange-100 rounded-xl p-4 hover:border-orange-200 transition flex gap-4">
                  <span className="text-3xl">🦟</span>
                  <div>
                    <p className="font-bold text-gray-800 mb-1">{p.name[lang]}</p>
                    <p className="text-gray-600 text-sm">
                      <span className="font-semibold text-green-700">✅ {text.remedy}: </span>
                      {p.remedy[lang]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropAdvisory;