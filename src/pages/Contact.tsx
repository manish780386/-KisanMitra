import React, { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const Contact: React.FC = () => {
  const { lang } = useLanguage();

  const text = {
    en: {
      title: "Contact Us 📬",
      subtitle: "Have questions or feedback? Reach out to us!",
      touch: "Get in Touch",
      location: "Farmer Portal HQ, India",
      formTitle: "Send Us a Message",
      success: "Your message has been sent successfully!",
      name: "Your Name",
      email: "Your Email",
      message: "Your Message",
      button: "Send Message",
    },
    hi: {
      title: "संपर्क करें 📬",
      subtitle: "कोई सवाल या सुझाव है? हमसे संपर्क करें!",
      touch: "संपर्क जानकारी",
      location: "किसान पोर्टल मुख्यालय, भारत",
      formTitle: "संदेश भेजें",
      success: "आपका संदेश सफलतापूर्वक भेज दिया गया है!",
      name: "आपका नाम",
      email: "आपका ईमेल",
      message: "आपका संदेश",
      button: "भेजें",
    },
    mr: {
      title: "संपर्क करा 📬",
      subtitle: "प्रश्न किंवा सूचना आहेत? आमच्याशी संपर्क साधा!",
      touch: "संपर्क माहिती",
      location: "शेतकरी पोर्टल मुख्यालय, भारत",
      formTitle: "संदेश पाठवा",
      success: "तुमचा संदेश यशस्वीरित्या पाठवला गेला आहे!",
      name: "तुमचे नाव",
      email: "तुमचा ईमेल",
      message: "तुमचा संदेश",
      button: "पाठवा",
    },
  };

  const t = text[lang];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-green-700 text-center">
          {t.title}
        </h1>
        <p className="text-center text-gray-600 mt-2">
          {t.subtitle}
        </p>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              {t.touch}
            </h2>
            <p className="text-gray-700 mb-2">
              <FaMapMarkerAlt className="inline mr-2" /> {t.location}
            </p>
            <p className="text-gray-700">
              <FaEnvelope className="inline mr-2" /> manishdange17@gmail.com
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              {t.formTitle}
            </h2>

            {success && (
              <p className="text-green-700 font-semibold mb-4">
                {t.success}
              </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder={t.name}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border p-3 rounded"
                required
              />
              <input
                type="email"
                placeholder={t.email}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border p-3 rounded"
                required
              />
              <textarea
                placeholder={t.message}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border p-3 rounded"
                rows={4}
                required
              />
              <button
                type="submit"
                className="bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800"
              >
                {t.button}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
