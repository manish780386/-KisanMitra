import React from "react";
import { useLanguage } from "../context/LanguageContext";

const About: React.FC = () => {
  const { lang } = useLanguage();

  const content = {
    en: {
      title: "About Farmer Portal 🌱",
      subtitle: "Learn more about our platform and mission to empower farmers.",
      missionTitle: "Our Mission",
      missionText:
        "Our mission is to provide farmers with the latest weather updates, crop advisory, mandi prices, and government schemes all in one place. We aim to help farmers make informed decisions and improve their yield and income.",
      offerTitle: "What We Offer",
      offers: [
        "Live Weather updates for cities across India",
        "Crop advisory including disease and pest management",
        "Mandi prices by state, city, and pin code",
        "Government schemes and benefits for farmers",
        "Guidance on irrigation, sowing, and harvesting",
      ],
      teamTitle: "Our Team",
      teamText:
        "We are a group of agri-tech enthusiasts dedicated to improving farming practices through technology and data-driven solutions.",
    },

    hi: {
      title: "किसान पोर्टल के बारे में 🌱",
      subtitle: "हमारे प्लेटफॉर्म और किसानों को सशक्त बनाने के मिशन को जानें।",
      missionTitle: "हमारा मिशन",
      missionText:
        "हमारा मिशन किसानों को मौसम अपडेट, फसल सलाह, मंडी भाव और सरकारी योजनाएं एक ही जगह उपलब्ध कराना है ताकि वे सही निर्णय ले सकें और अपनी उपज व आय बढ़ा सकें।",
      offerTitle: "हम क्या प्रदान करते हैं",
      offers: [
        "भारत के शहरों के लिए लाइव मौसम अपडेट",
        "बीमारी और कीट प्रबंधन सहित फसल सलाह",
        "राज्य, शहर और पिन कोड के अनुसार मंडी भाव",
        "किसानों के लिए सरकारी योजनाएं और लाभ",
        "सिंचाई, बुवाई और कटाई पर मार्गदर्शन",
      ],
      teamTitle: "हमारी टीम",
      teamText:
        "हम एग्री-टेक उत्साही लोगों की एक टीम हैं जो तकनीक के माध्यम से खेती को बेहतर बनाने के लिए समर्पित हैं।",
    },

    mr: {
      title: "शेतकरी पोर्टल बद्दल 🌱",
      subtitle: "आमच्या प्लॅटफॉर्म आणि शेतकऱ्यांना सक्षम करण्याच्या मिशनबद्दल जाणून घ्या.",
      missionTitle: "आमचे ध्येय",
      missionText:
        "शेतकऱ्यांना हवामान अपडेट्स, पीक सल्ला, बाजारभाव आणि सरकारी योजना एकाच ठिकाणी देणे हे आमचे ध्येय आहे, जेणेकरून ते योग्य निर्णय घेऊ शकतील.",
      offerTitle: "आम्ही काय देतो",
      offers: [
        "भारतभरातील शहरांसाठी लाईव्ह हवामान अपडेट्स",
        "रोग व कीड व्यवस्थापनासह पीक सल्ला",
        "राज्य, शहर आणि पिनकोडनुसार बाजारभाव",
        "शेतकऱ्यांसाठी सरकारी योजना व फायदे",
        "सिंचन, पेरणी आणि कापणीसाठी मार्गदर्शन",
      ],
      teamTitle: "आमची टीम",
      teamText:
        "आम्ही कृषी-तंत्रज्ञान प्रेमींची टीम असून तंत्रज्ञानाच्या मदतीने शेती सुधारण्यासाठी काम करतो.",
    },
  };

  const t = content[lang];

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-green-700 text-center">
          {t.title}
        </h1>
        <p className="text-center text-gray-600 mt-2">
          {t.subtitle}
        </p>

        <div className="mt-8 bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            {t.missionTitle}
          </h2>
          <p className="text-gray-700 mb-4">
            {t.missionText}
          </p>

          <h2 className="text-2xl font-bold text-green-700 mb-4">
            {t.offerTitle}
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {t.offers.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-green-700 mt-6 mb-4">
            {t.teamTitle}
          </h2>
          <p className="text-gray-700">
            {t.teamText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
