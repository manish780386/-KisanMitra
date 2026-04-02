import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

interface Tool {
  id: string;
  nameEn: string;
  nameHi: string;
  nameMr: string;
  category: { en: string; hi: string; mr: string };
  image: string;
  emoji: string;
  descEn: string;
  descHi: string;
  descMr: string;
  features: { en: string[]; hi: string[]; mr: string[] };
  priceRange: string;
  usedFor: { en: string; hi: string; mr: string };
}

const toolsData: Tool[] = [
  {
    id: "tractor",
    nameEn: "Tractor",
    nameHi: "ट्रैक्टर",
    nameMr: "ट्रॅक्टर",
    category: { en: "Heavy Machinery", hi: "भारी मशीनरी", mr: "जड यंत्रे" },
    image: "https://tse4.mm.bing.net/th/id/OIP.WPi0Bq9hdNsP9gc1433H6gHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    emoji: "🚜",
    descEn: "Modern tractors help farmers plow, sow, and transport crops efficiently. Available in diesel and electric variants with GPS navigation.",
    descHi: "आधुनिक ट्रैक्टर किसानों को जुताई, बुवाई और फसल परिवहन में मदद करते हैं। डीजल और इलेक्ट्रिक वेरिएंट में उपलब्ध।",
    descMr: "आधुनिक ट्रॅक्टर शेतकऱ्यांना नांगरणी, पेरणी आणि पीक वाहतुकीत मदत करतात. डिझेल आणि इलेक्ट्रिक प्रकारात उपलब्ध.",
    features: {
      en: ["High fuel efficiency", "Hydraulic system for attachments", "GPS-assisted navigation", "All-weather performance"],
      hi: ["उच्च ईंधन दक्षता", "अटैचमेंट के लिए हाइड्रोलिक सिस्टम", "GPS सहायक नेविगेशन", "सभी मौसम प्रदर्शन"],
      mr: ["उच्च इंधन कार्यक्षमता", "जोडण्यांसाठी हायड्रोलिक सिस्टम", "GPS नेव्हिगेशन", "सर्व हवामानात कार्यक्षम"],
    },
    priceRange: "₹5L – ₹30L",
    usedFor: { en: "Plowing & Transport", hi: "जुताई और परिवहन", mr: "नांगरणी आणि वाहतूक" },
  },
  {
    id: "seeddrill",
    nameEn: "Seed Drill",
    nameHi: "सीड ड्रिल",
    nameMr: "बीज ड्रिल",
    category: { en: "Sowing Equipment", hi: "बुवाई उपकरण", mr: "पेरणी उपकरणे" },
    image: "https://dhimanagroind.com/wp-content/uploads/2018/05/seed-dril.png",
    emoji: "🌱",
    descEn: "A seed drill ensures uniform sowing of seeds at correct depth and spacing, improving germination rates and overall yield.",
    descHi: "सीड ड्रिल सही गहराई और दूरी पर बीजों की समान बुवाई सुनिश्चित करता है, जिससे अंकुरण दर और पैदावार बढ़ती है।",
    descMr: "बीज ड्रिल योग्य खोली आणि अंतरावर बियाण्यांची समान पेरणी करतो, ज्यामुळे उगवण दर आणि उत्पादन वाढते.",
    features: {
      en: ["Adjustable row spacing", "Multi-seed capability", "Easy maintenance", "Reduces seed wastage by 30%"],
      hi: ["समायोज्य पंक्ति अंतर", "मल्टी-सीड क्षमता", "आसान रखरखाव", "30% बीज अपव्यय कम करता है"],
      mr: ["समायोज्य ओळ अंतर", "बहु-बीज क्षमता", "सोपी देखभाल", "30% बियाणे वाया जाणे कमी करते"],
    },
    priceRange: "₹25K – ₹2L",
    usedFor: { en: "Sowing Seeds", hi: "बीज बोना", mr: "बीज पेरणी" },
  },
  {
    id: "sprinkler",
    nameEn: "Sprinkler System",
    nameHi: "स्प्रिंकलर सिस्टम",
    nameMr: "स्प्रिंकलर प्रणाली",
    category: { en: "Irrigation Tool", hi: "सिंचाई उपकरण", mr: "सिंचन साधन" },
    image: "https://images.unsplash.com/photo-1616168558572-69aed7a96677?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNwcmlua2xlcnxlbnwwfHwwfHx8MA%3D%3D",
    emoji: "💧",
    descEn: "Automated sprinkler systems provide uniform water distribution across fields, saving up to 50% water compared to flood irrigation.",
    descHi: "स्वचालित स्प्रिंकलर सिस्टम खेतों में समान पानी वितरण प्रदान करती है, बाढ़ सिंचाई की तुलना में 50% पानी बचाती है।",
    descMr: "स्वयंचलित स्प्रिंकलर प्रणाली शेतांमध्ये समान पाणी वितरण देते, पूर सिंचनाच्या तुलनेत 50% पाणी वाचवते.",
    features: {
      en: ["Saves up to 50% water", "Auto timer control", "Suitable for all crops", "Easy DIY installation"],
      hi: ["50% तक पानी बचाता है", "ऑटो टाइमर कंट्रोल", "सभी फसलों के लिए उपयुक्त", "आसान DIY इंस्टॉलेशन"],
      mr: ["50% पाणी वाचवते", "ऑटो टायमर नियंत्रण", "सर्व पिकांसाठी योग्य", "सोपी DIY स्थापना"],
    },
    priceRange: "₹8K – ₹50K",
    usedFor: { en: "Water Irrigation", hi: "पानी की सिंचाई", mr: "पाणी सिंचन" },
  },
  {
    id: "weeder",
    nameEn: "Power Weeder",
    nameHi: "पावर वीडर",
    nameMr: "पॉवर वीडर",
    category: { en: "Weeding Tool", hi: "निराई उपकरण", mr: "तण काढणी साधन" },
    image: "https://tse2.mm.bing.net/th/id/OIP.Zj2T3B3sOWi1t1reZarnPwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    emoji: "⚙️",
    descEn: "Power weeder removes weeds efficiently between crop rows without damaging plants. Saves 70% labor compared to manual weeding.",
    descHi: "पावर वीडर फसल की पंक्तियों के बीच से खरपतवार को कुशलतापूर्वक हटाता है। मैनुअल निराई की तुलना में 70% श्रम बचाता है।",
    descMr: "पॉवर वीडर पिकाच्या ओळींमधून तण कार्यक्षमतेने काढतो. मॅन्युअल तण काढण्यापेक्षा 70% श्रम वाचवतो.",
    features: {
      en: ["Petrol/electric engine", "Adjustable tine spacing", "Lightweight design", "70% labor saving"],
      hi: ["पेट्रोल/इलेक्ट्रिक इंजन", "समायोज्य टाइन अंतर", "हल्का डिजाइन", "70% श्रम बचत"],
      mr: ["पेट्रोल/इलेक्ट्रिक इंजन", "समायोज्य टाइन अंतर", "हलकी रचना", "70% श्रम बचत"],
    },
    priceRange: "₹15K – ₹80K",
    usedFor: { en: "Weed Removal", hi: "खरपतवार निकालना", mr: "तण काढणे" },
  },
  {
    id: "harvester",
    nameEn: "Combine Harvester",
    nameHi: "कंबाइन हार्वेस्टर",
    nameMr: "कंबाइन हार्वेस्टर",
    category: { en: "Harvesting Equipment", hi: "कटाई उपकरण", mr: "कापणी उपकरणे" },
    image: "https://tse4.mm.bing.net/th/id/OIP.EiA1NywnG-VCkaHwiQ_I4wHaEj?rs=1&pid=ImgDetMain&o=7&rm=3",
    emoji: "🌾",
    descEn: "Combine harvester allows quick and efficient harvesting of wheat, rice, and maize. Reduces post-harvest loss by 15-20%.",
    descHi: "कंबाइन हार्वेस्टर गेहूं, चावल और मक्का की त्वरित कटाई की अनुमति देता है। कटाई के बाद नुकसान 15-20% कम करता है।",
    descMr: "कंबाइन हार्वेस्टर गहू, तांदूळ आणि मक्याची जलद कापणी करतो. कापणी नंतरचे नुकसान 15-20% कमी करतो.",
    features: {
      en: ["Harvests 5 acres/hour", "Multi-crop compatible", "15-20% less post-harvest loss", "GPS yield mapping"],
      hi: ["5 एकड़/घंटा कटाई", "मल्टी-क्रॉप संगत", "15-20% कम नुकसान", "GPS यील्ड मैपिंग"],
      mr: ["5 एकर/तास कापणी", "बहु-पीक सुसंगत", "15-20% कमी नुकसान", "GPS उत्पन्न मॅपिंग"],
    },
    priceRange: "₹20L – ₹60L",
    usedFor: { en: "Crop Harvesting", hi: "फसल कटाई", mr: "पीक कापणी" },
  },
  {
    id: "drip",
    nameEn: "Drip Irrigation",
    nameHi: "ड्रिप सिंचाई",
    nameMr: "ठिबक सिंचन",
    category: { en: "Irrigation Tool", hi: "सिंचाई उपकरण", mr: "सिंचन साधन" },
    image: "https://tse4.mm.bing.net/th/id/OIP.aH2tEOzGdIPMIEVYJJNNZgHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
    emoji: "🚿",
    descEn: "Drip irrigation delivers water directly to plant roots, saving up to 70% water. Best for horticulture, vegetables, and fruit crops.",
    descHi: "ड्रिप सिंचाई सीधे पौधों की जड़ों तक पानी पहुंचाती है, 70% तक पानी बचाती है। बागवानी और सब्जियों के लिए सर्वोत्तम।",
    descMr: "ठिबक सिंचन थेट झाडांच्या मुळांपर्यंत पाणी पोहोचवते, 70% पाणी वाचवते. फळे आणि भाज्यांसाठी उत्कृष्ट.",
    features: {
      en: ["70% water savings", "Reduces weed growth", "Works with fertilizer injection", "Subsidy available under PMKSY"],
      hi: ["70% पानी की बचत", "खरपतवार वृद्धि कम करता है", "उर्वरक इंजेक्शन के साथ काम करता है", "PMKSY के तहत सब्सिडी"],
      mr: ["70% पाणी बचत", "तण वाढ कमी करते", "खत इंजेक्शनसह कार्य करते", "PMKSY अंतर्गत अनुदान"],
    },
    priceRange: "₹20K – ₹1.5L",
    usedFor: { en: "Precision Watering", hi: "सटीक सिंचाई", mr: "अचूक सिंचन" },
  },
];

const FarmTools: React.FC = () => {
  const { lang } = useLanguage();
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const t = {
    en: {
      title: "Farm Tools & Equipment",
      subtitle: "Explore modern farming tools to boost productivity and reduce labor costs.",
      searchPlaceholder: "Search tools...",
      all: "All Tools",
      features: "Key Features",
      priceRange: "Price Range",
      usedFor: "Used For",
      close: "Close",
      categories: "Filter by Category",
      noResults: "No tools found. Try a different search.",
    },
    hi: {
      title: "कृषि उपकरण और मशीनें",
      subtitle: "उत्पादकता बढ़ाने और श्रम लागत कम करने के लिए आधुनिक कृषि उपकरण।",
      searchPlaceholder: "उपकरण खोजें...",
      all: "सभी उपकरण",
      features: "मुख्य विशेषताएँ",
      priceRange: "मूल्य सीमा",
      usedFor: "किसके लिए",
      close: "बंद करें",
      categories: "श्रेणी द्वारा फ़िल्टर",
      noResults: "कोई उपकरण नहीं मिला। अलग खोज आज़माएं।",
    },
    mr: {
      title: "शेती उपकरणे आणि यंत्रे",
      subtitle: "उत्पादकता वाढवण्यासाठी आणि श्रम खर्च कमी करण्यासाठी आधुनिक शेती उपकरणे.",
      searchPlaceholder: "साधन शोधा...",
      all: "सर्व साधने",
      features: "मुख्य वैशिष्ट्ये",
      priceRange: "किंमत श्रेणी",
      usedFor: "वापर",
      close: "बंद करा",
      categories: "श्रेणीनुसार फिल्टर",
      noResults: "कोणतेही साधन सापडले नाही. वेगळा शोध वापरा.",
    },
  };

  const text = t[lang];

  const getName = (tool: Tool) => lang === "hi" ? tool.nameHi : lang === "mr" ? tool.nameMr : tool.nameEn;
  const getCategory = (tool: Tool) => tool.category[lang];
  const getDesc = (tool: Tool) => lang === "hi" ? tool.descHi : lang === "mr" ? tool.descMr : tool.descEn;
  const getFeatures = (tool: Tool) => tool.features[lang];

  const categories = ["all", ...Array.from(new Set(toolsData.map(t => t.category.en)))];

  const filteredTools = toolsData.filter(tool => {
    const name = getName(tool).toLowerCase();
    const cat = getCategory(tool).toLowerCase();
    const matchesSearch = name.includes(searchTerm.toLowerCase()) || cat.includes(searchTerm.toLowerCase());
    const matchesCat = activeCategory === "all" || tool.category.en === activeCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-6">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;600;700;800&family=Hind:wght@300;400;500;600&display=swap');
        .tool-card { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
        .tool-card:hover { transform: translateY(-6px); }
        .tool-img { transition: transform 0.4s ease; }
        .tool-card:hover .tool-img { transform: scale(1.05); }
        .badge { backdrop-filter: blur(8px); }
        .modal-overlay { animation: fadeIn 0.2s ease; }
        .modal-content { animation: slideUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(40px) scale(0.95); } to { opacity: 1; transform: translateY(0) scale(1); } }
        .filter-btn { transition: all 0.2s ease; }
        .search-input:focus { box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.2); }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🛠️ Equipment Guide
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-3" style={{ fontFamily: "'Baloo 2', cursive" }}>
            {text.title}
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto" style={{ fontFamily: "'Hind', sans-serif" }}>
            {text.subtitle}
          </p>
        </div>

        {/* SEARCH + FILTER */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={text.searchPlaceholder}
            className="search-input border-2 border-green-200 rounded-xl px-5 py-3 w-full md:w-80 focus:outline-none focus:border-green-500 bg-white text-gray-700"
            style={{ fontFamily: "'Hind', sans-serif" }}
          />
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`filter-btn px-4 py-2 rounded-xl text-sm font-semibold border-2 ${
                  activeCategory === cat
                    ? "bg-green-600 text-white border-green-600"
                    : "bg-white text-green-700 border-green-200 hover:border-green-400"
                }`}
              >
                {cat === "all" ? text.all : cat}
              </button>
            ))}
          </div>
        </div>

        {/* TOOLS GRID */}
        {filteredTools.length === 0 ? (
          <div className="text-center py-20 text-gray-400 text-lg">{text.noResults}</div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool) => (
              <div
                key={tool.id}
                className="tool-card bg-white rounded-2xl shadow-md hover:shadow-2xl cursor-pointer overflow-hidden border border-green-50"
                onClick={() => setSelectedTool(tool)}
              >
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-green-100 to-emerald-100">
                  <img
                    src={tool.image}
                    alt={getName(tool)}
                    className="tool-img w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://placehold.co/400x300/d1fae5/065f46?text=${tool.emoji}`;
                    }}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="badge bg-white/80 text-green-700 text-xs font-bold px-3 py-1 rounded-full border border-green-200">
                      {getCategory(tool)}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 text-3xl">{tool.emoji}</div>
                </div>

                <div className="p-5">
                  <h2 className="text-xl font-bold text-gray-800 mb-1" style={{ fontFamily: "'Baloo 2', cursive" }}>
                    {getName(tool)}
                  </h2>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2" style={{ fontFamily: "'Hind', sans-serif" }}>
                    {getDesc(tool)}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="bg-emerald-50 text-emerald-700 text-sm font-bold px-3 py-1 rounded-lg">
                      {tool.priceRange}
                    </span>
                    <span className="text-green-600 text-sm font-semibold flex items-center gap-1">
                      {tool.usedFor[lang]} →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* MODAL */}
      {selectedTool && (
        <div
          className="modal-overlay fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={(e) => e.target === e.currentTarget && setSelectedTool(null)}
        >
          <div className="modal-content bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden">
            <div className="relative h-56 bg-gradient-to-br from-green-100 to-emerald-200">
              <img
                src={selectedTool.image}
                alt={getName(selectedTool)}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://placehold.co/600x300/d1fae5/065f46?text=${selectedTool.emoji}`;
                }}
              />
              <button
                onClick={() => setSelectedTool(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-700 font-bold w-9 h-9 rounded-full flex items-center justify-center text-lg shadow-md transition"
              >
                ×
              </button>
              <div className="absolute bottom-4 left-4">
                <span className="bg-white/90 text-green-700 text-sm font-bold px-3 py-1 rounded-full">
                  {getCategory(selectedTool)}
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h2 className="text-2xl font-extrabold text-gray-800" style={{ fontFamily: "'Baloo 2', cursive" }}>
                  {selectedTool.emoji} {getName(selectedTool)}
                </h2>
                <span className="bg-green-100 text-green-700 font-bold text-sm px-3 py-1 rounded-xl whitespace-nowrap ml-3">
                  {selectedTool.priceRange}
                </span>
              </div>

              <p className="text-gray-600 mb-4" style={{ fontFamily: "'Hind', sans-serif" }}>
                {getDesc(selectedTool)}
              </p>

              <div className="bg-green-50 rounded-2xl p-4">
                <h3 className="font-bold text-green-700 mb-3 flex items-center gap-2">
                  ✅ {text.features}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {getFeatures(selectedTool).map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-700 text-sm bg-white rounded-lg px-3 py-2 shadow-sm">
                      <span className="text-green-500">•</span> {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3 text-sm text-gray-600 bg-blue-50 rounded-xl px-4 py-3">
                <span>🎯</span>
                <span><strong>{text.usedFor}:</strong> {selectedTool.usedFor[lang]}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FarmTools;