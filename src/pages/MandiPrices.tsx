import { useState } from "react";
import axios from "axios";
import { FaRupeeSign, FaMapMarkerAlt, FaSearch } from "react-icons/fa";

// Mandi Price type
interface MandiPrice {
  commodity: string;
  variety: string;
  arrival_date: string;
  min_price: number;
  max_price: number;
  modal_price: number;
  state: string;
  district: string;
}

// State -> Districts mapping (example, add more states/districts)
const stateDistricts: Record<string, string[]> = {
  "Madhya Pradesh": ["Indore", "Bhopal", "Gwalior", "Jabalpur","Betul","Harda"],
  "Maharashtra": ["Pune", "Mumbai", "Nagpur", "Nashik"],
  "Rajasthan": ["Jaipur", "Udaipur", "Jodhpur"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Agra"],
};

const MANDI_API_URL = "https://api.example.com/mandi-prices"; // replace with real API

const MandiPrices: React.FC = () => {
  const [stateName, setStateName] = useState<string>("");
  const [cityName, setCityName] = useState<string>("");
  const [pinCode, setPinCode] = useState<string>("");
  const [prices, setPrices] = useState<MandiPrice[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const fetchMandiPrices = async () => {
    if (!stateName || !cityName) {
      setError("Please select both state and city!");
      return;
    }

    if (pinCode && !/^\d{6}$/.test(pinCode)) {
      setError("Pin code must be 6 digits!");
      return;
    }

    setLoading(true);
    setError("");
    setPrices([]);

    try {
      const res = await axios.get(MANDI_API_URL, {
        params: {
          state: stateName,
          city: cityName,
          pin: pinCode,
        },
      });

      if (res.data && res.data.length > 0) {
        setPrices(res.data);
      } else {
        setError("No prices found for this location.");
      }
    } catch (err) {
      setError("Failed to fetch mandi prices. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-green-700 text-center">
          Mandi Prices 💰
        </h1>
        <p className="text-center text-gray-600 mt-2">
          Get the latest mandi prices by state, city, and pin code.
        </p>

        {/* Select State, City & Pin */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <select
            value={stateName}
            onChange={(e) => {
              setStateName(e.target.value);
              setCityName(""); // reset city when state changes
            }}
            className="border p-3 rounded w-48"
          >
            <option value="">Select State</option>
            {Object.keys(stateDistricts).map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>

          <select
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            className="border p-3 rounded w-48"
            disabled={!stateName}
          >
            <option value="">Select City</option>
            {stateName &&
              stateDistricts[stateName].map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
          </select>

          <input
            type="text"
            placeholder="Pin Code (6 digits)"
            value={pinCode}
            onChange={(e) => setPinCode(e.target.value)}
            className="border p-3 rounded w-48"
            maxLength={6}
          />

          <button
            onClick={fetchMandiPrices}
            className="bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800 flex items-center gap-2"
          >
            <FaSearch /> Search
          </button>
        </div>

        {/* Loading */}
        {loading && (
          <p className="text-center mt-6 text-gray-600">Loading prices...</p>
        )}

        {/* Error */}
        {error && (
          <p className="text-center mt-6 text-red-600 font-semibold">{error}</p>
        )}

        {/* Prices Table */}
        {prices.length > 0 && (
          <div className="mt-10 overflow-x-auto">
            <table className="min-w-full bg-white rounded-xl shadow">
              <thead>
                <tr className="bg-green-700 text-white text-left">
                  <th className="px-4 py-3">Commodity</th>
                  <th className="px-4 py-3">Variety</th>
                  <th className="px-4 py-3">Arrival Date</th>
                  <th className="px-4 py-3">Min Price</th>
                  <th className="px-4 py-3">Max Price</th>
                  <th className="px-4 py-3">Modal Price</th>
                  <th className="px-4 py-3">Location</th>
                </tr>
              </thead>
              <tbody>
                {prices.map((item, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-green-50" : "bg-white"}
                  >
                    <td className="px-4 py-3">{item.commodity}</td>
                    <td className="px-4 py-3">{item.variety}</td>
                    <td className="px-4 py-3">{item.arrival_date}</td>
                    <td className="px-4 py-3">
                      <FaRupeeSign className="inline" /> {item.min_price}
                    </td>
                    <td className="px-4 py-3">
                      <FaRupeeSign className="inline" /> {item.max_price}
                    </td>
                    <td className="px-4 py-3">
                      <FaRupeeSign className="inline" /> {item.modal_price}
                    </td>
                    <td className="px-4 py-3">
                      <FaMapMarkerAlt className="inline mr-1" />
                      {item.district}, {item.state}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default MandiPrices;
