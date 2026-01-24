import React from "react";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-green-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-green-700 text-center">
          About Farmer Portal 🌱
        </h1>
        <p className="text-center text-gray-600 mt-2">
          Learn more about our platform and mission to empower farmers.
        </p>

        <div className="mt-8 bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 mb-4">
            Our mission is to provide farmers with the latest weather updates, crop advisory, mandi prices, and government schemes all in one place. We aim to help farmers make informed decisions and improve their yield and income.
          </p>

          <h2 className="text-2xl font-bold text-green-700 mb-4">
            What We Offer
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Live Weather updates for cities across India</li>
            <li>Crop advisory including disease and pest management</li>
            <li>Mandi prices by state, city, and pin code</li>
            <li>Government schemes and benefits for farmers</li>
            <li>Guidance on irrigation, sowing, and harvesting</li>
          </ul>

          <h2 className="text-2xl font-bold text-green-700 mt-6 mb-4">
            Our Team
          </h2>
          <p className="text-gray-700">
            We are a group of agri-tech enthusiasts dedicated to improving farming practices through technology and data-driven solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
