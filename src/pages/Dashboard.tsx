import {
  FaCloudSun,
  FaSeedling,
  FaRupeeSign,
  FaComments,
  FaClipboardList,
  FaTractor,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate(); // ✅ hook component ke andar

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      
      {/* HEADER */}
      <h1 className="text-3xl font-bold text-green-700">
        Farmer Dashboard 🌾
      </h1>
      <p className="mt-2 text-gray-600">
        Welcome to KisanMitra — all farming tools at one place.
      </p>

      {/* FEATURE CARDS */}
      <div className="grid md:grid-cols-3 gap-6 mt-8">

        <div
          onClick={() => navigate("/weather")}
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
        >
          <FaCloudSun className="text-3xl text-green-600 mb-3" />
          <h3 className="text-xl font-semibold">Weather Update</h3>
          <p className="text-gray-600 mt-1">
            Live weather forecast & alerts.
          </p>
        </div>

        <div onClick={() => navigate("/cropadvisory")}
         className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <FaSeedling className="text-3xl text-green-600 mb-3" />
          <h3 className="text-xl font-semibold">Crop Advisory</h3>
          <p className="text-gray-600 mt-1">
            Crop tips, disease alerts & guidance.
          </p>
        </div>

        <div onClick={() => navigate("/mandiprice")} 
        className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <FaRupeeSign className="text-3xl text-green-600 mb-3" />
          <h3 className="text-xl font-semibold">Mandi Prices</h3>
          <p className="text-gray-600 mt-1">
            Daily mandi price updates.
          </p>
        </div>

        <div onClick={() => navigate("/scheme")} 
        className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <FaClipboardList className="text-3xl text-green-600 mb-3" />
          <h3 className="text-xl font-semibold">Govt Schemes</h3>
          <p className="text-gray-600 mt-1">
            Latest government farming schemes.
          </p>
        </div>

        <div onClick={() => navigate("/tools")}  
        className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <FaTractor className="text-3xl text-green-600 mb-3" />
          <h3 className="text-xl font-semibold">Farm Tools</h3>
          <p className="text-gray-600 mt-1">
            Equipment & modern farming tools.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <FaComments className="text-3xl text-green-600 mb-3" />
          <h3 className="text-xl font-semibold">Farmer Chat</h3>
          <p className="text-gray-600 mt-1">
            Talk to experts & other farmers.
          </p>
        </div>
      </div>

      {/* CHAT BOARD */}
      <div className="mt-12 bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-bold text-green-700 mb-4">
          💬 Farmer Chat Board
        </h2>

        <div className="h-48 border rounded p-3 overflow-y-auto bg-gray-50 text-sm">
          <p className="text-gray-700">
            👨‍🌾 Ramesh: Wheat crop ke liye best fertilizer kaunsa hai?
          </p>
          <p className="text-gray-700 mt-2">
            👩‍🌾 Sita: Barish ke baad spraying safe hai?
          </p>
        </div>

        <div className="flex mt-4 gap-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button className="bg-green-700 text-white px-4 rounded hover:bg-green-800">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
