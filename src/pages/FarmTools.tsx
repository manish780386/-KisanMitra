import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

interface Tool {
  name: string;
  category: string;
  image: string;
  description: string;
  features: string[];
}

const toolsData: Tool[] = [
  {
    name: "Tractor",
    category: "Heavy Machinery",
    image: "https://www.bing.com/th/id/OIP.Dn1cpsiYr6aseczptIDQfQHaE8?w=232&h=211&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.5&pid=3.1&rm=2",
    description:
      "Modern tractors help farmers plow, sow, and transport crops efficiently. Available in diesel and electric variants.",
    features: [
      "High fuel efficiency",
      "Hydraulic system for attachments",
      "GPS-assisted navigation",
      "All-weather performance",
    ],
  },
  {
    name: "Seed Drill",
    category: "Sowing Equipment",
    image: "https://www.bing.com/th/id/OIP.mIxxSwuf0TOGbVl2_EImygHaE8?w=245&h=211&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.5&pid=3.1&rm=2",
    description:
      "A seed drill ensures uniform sowing of seeds at correct depth and spacing, improving germination and yield.",
    features: [
      "Adjustable row spacing",
      "Multi-seed capability",
      "Easy maintenance",
      "Reduces seed wastage",
    ],
  },
  {
    name: "Sprinkler System",
    category: "Irrigation Tool",
    image: "https://th.bing.com/th/id/OIP.FeO5HMY8nOBgAsyTxCiGgwHaHa?w=250&h=250&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.5&pid=3.1&rm=2",
    description:
      "Automated sprinkler systems provide uniform water distribution, saving water and improving crop health.",
    features: [
      "Water-saving technology",
      "Automatic timers",
      "Suitable for all crops",
      "Easy installation",
    ],
  },
  {
    name: "Handheld Weeder",
    category: "Weeding Tool",
    image: "https://www.bing.com/th/id/OIP.9JLo4PFKC2wyvAGozbJZTQHaHa?w=182&h=211&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.5&pid=3.1&rm=2",
    description:
      "Manual weeding tool for small farms or home gardens. Reduces labor and removes weeds efficiently.",
    features: [
      "Lightweight and portable",
      "Ergonomic handle",
      "Rust-resistant steel",
      "Perfect for small fields",
    ],
  },
  {
    name: "Harvester",
    category: "Harvesting Equipment",
    image: "https://www.bing.com/th/id/OIP.qylJqh6xHd0blw3ighIyDQHaEK?w=228&h=211&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.5&pid=3.1&rm=2",
    description:
      "Combine harvester allows quick harvesting of crops like wheat, rice, and maize with minimal manual labor.",
    features: [
      "High-speed harvesting",
      "Multi-crop compatibility",
      "Reduces post-harvest loss",
      "Easy attachment setup",
    ],
  },
];

const FarmTools: React.FC = () => {
  const { language } = useLanguage();
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-green-700 text-center">
          {language === "en"
            ? "Farm Tools & Equipment 🛠️"
            : "कृषि उपकरण और मशीनें 🛠️"}
        </h1>

        <p className="text-center text-gray-600 mt-2">
          {language === "en"
            ? "Explore modern farming tools and equipment to enhance productivity."
            : "उत्पादकता बढ़ाने के लिए आधुनिक कृषि उपकरणों की जानकारी।"}
        </p>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolsData.map((tool) => (
            <div
              key={tool.name}
              className="bg-white p-4 rounded-xl shadow hover:shadow-lg cursor-pointer transition"
              onClick={() => setSelectedTool(tool)}
            >
              <img
                src={tool.image}
                alt={tool.name}
                className="h-32 mx-auto mb-4 object-contain"
              />
              <h2 className="text-xl font-semibold text-green-700 text-center">
                {tool.name}
              </h2>
              <p className="text-gray-600 text-center mt-2">
                {tool.category}
              </p>
            </div>
          ))}
        </div>

        {selectedTool && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-lg max-w-2xl w-full p-6 relative">
              <button
                onClick={() => setSelectedTool(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 font-bold text-lg"
              >
                ×
              </button>

              <img
                src={selectedTool.image}
                alt={selectedTool.name}
                className="h-40 mx-auto object-contain"
              />

              <h2 className="text-2xl font-bold text-green-700 text-center mt-4">
                {selectedTool.name}
              </h2>

              <p className="text-gray-600 mt-2 text-center">
                {selectedTool.description}
              </p>

              <h3 className="text-xl font-semibold text-green-700 mt-4">
                {language === "en" ? "Features:" : "विशेषताएँ:"}
              </h3>

              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                {selectedTool.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FarmTools;
