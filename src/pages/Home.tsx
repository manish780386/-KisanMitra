import {
  FaCloudSun,
  FaSeedling,
  FaDollarSign,
  FaClipboardList,
  FaUsers,
  FaMobileAlt,
} from "react-icons/fa";

const Home = () => {
  return (
    <div className="px-6 md:px-20 py-12 bg-gray-50">

      {/* HERO SECTION */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 leading-tight">
          Smart Farming for <span className="text-green-800">Indian Farmers</span> 🌾
        </h1>

        <p className="mt-5 text-gray-600 text-lg max-w-3xl mx-auto">
          KisanMitra is a digital companion for farmers — helping you grow
          better crops, earn more profits and take smarter farming decisions
          using technology.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-green-700 text-white px-6 py-3 rounded-lg shadow hover:bg-green-800 transition">
            Get Started
          </button>
          <button className="border border-green-700 text-green-700 px-6 py-3 rounded-lg hover:bg-green-100 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="mt-20 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT FEATURES */}
        <div className="bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-bold text-green-700 mb-6">
            What We Offer 🌱
          </h2>

          <ul className="space-y-5 text-gray-700 font-medium">
            <li className="flex items-center gap-3">
              <FaCloudSun className="text-green-700 text-xl" />
              Live & accurate weather forecast with alerts
            </li>

            <li className="flex items-center gap-3">
              <FaSeedling className="text-green-700 text-xl" />
              Crop guidance, fertilizer & disease solutions
            </li>

            <li className="flex items-center gap-3">
              <FaDollarSign className="text-green-700 text-xl" />
              Daily mandi prices to sell at the right time
            </li>

            <li className="flex items-center gap-3">
              <FaClipboardList className="text-green-700 text-xl" />
              Government schemes & subsidy information
            </li>
          </ul>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-3xl font-bold text-green-700">
            Why Farmers Trust KisanMitra 🤝
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Farming is not easy — weather uncertainty, crop diseases,
            and market price fluctuations affect farmers daily.
            <br /><br />
            KisanMitra solves these problems by providing
            <strong> simple, reliable and real-time information </strong>
            in one easy-to-use platform.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="flex items-center gap-3 bg-green-50 p-3 rounded">
              <FaUsers className="text-green-700" />
              Trusted by Farmers
            </div>

            <div className="flex items-center gap-3 bg-green-50 p-3 rounded">
              <FaMobileAlt className="text-green-700" />
              Easy Mobile Friendly App
            </div>
          </div>
        </div>

      </section>

      {/* CTA SECTION */}
      <section className="mt-24 bg-green-700 text-white rounded-xl p-10 text-center">
        <h2 className="text-3xl font-bold">
          Start Your Smart Farming Journey Today 🌾
        </h2>

        <p className="mt-3 text-green-100 max-w-2xl mx-auto">
          Join thousands of farmers who are already using KisanMitra
          to increase productivity and income.
        </p>

        <button className="mt-6 bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-100 transition">
          Join Now
        </button>
      </section>

    </div>
  );
};

export default Home;
