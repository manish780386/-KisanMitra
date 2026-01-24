import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can integrate API to send message
    setSuccess(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-green-700 text-center">
          Contact Us 📬
        </h1>
        <p className="text-center text-gray-600 mt-2">
          Have questions or feedback? Reach out to us!
        </p>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {/* Contact Info */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-700 mb-2">
              <FaMapMarkerAlt className="inline mr-2" /> Farmer Portal HQ, India
            </p>
            <p className="text-gray-700 mb-2">
              <FaPhone className="inline mr-2" /> +91 9876543210
            </p>
            <p className="text-gray-700">
              <FaEnvelope className="inline mr-2" /> support@farmerportal.com
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              Send Us a Message
            </h2>
            {success && (
              <p className="text-green-700 font-semibold mb-4">
                Your message has been sent successfully!
              </p>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border p-3 rounded"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border p-3 rounded"
                required
              />
              <textarea
                placeholder="Your Message"
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
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
