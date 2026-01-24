import { useEffect, useState } from "react";
import axios from "axios";
import {
  FaTemperatureLow,
  FaTemperatureHigh,
  FaTint,
  FaWind,
  FaTachometerAlt,
  FaSun,
  FaMoon,
  FaEye,
  FaCloudRain,
  FaCloudSun,
} from "react-icons/fa";

const API_KEY = "6839755239889a7df964a3b96da2e237";

interface WeatherData {
  name: string;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
    pressure: number;
  };
  weather: {
    main: string;
    description: string;
  }[];
  wind: {
    speed: number;
  };
  sys: {
    sunrise: number;
    sunset: number;
  };
  visibility: number;
}

const Weather: React.FC = () => {
  const [city, setCity] = useState<string>(localStorage.getItem("city") || "Indore");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const fetchWeather = async (cityName: string) => {
    try {
      setLoading(true);
      setError("");

      const res = await axios.get<WeatherData>(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          params: {
            q: cityName,
            units: "metric",
            appid: API_KEY,
          },
        }
      );

      setWeather(res.data);
      localStorage.setItem("city", cityName);
    } catch (err) {
      setError("City not found ❌");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const willRain = (): string | null => {
    if (!weather) return null;
    const description = weather.weather[0].main.toLowerCase();
    return description.includes("rain") ? "🌧️ Likely to Rain" : "☀️ No Rain Expected";
  };

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <h1 className="text-4xl font-bold text-green-700 text-center">
          Weather Forecast 🌦️
        </h1>
        <p className="text-center text-gray-600 mt-2">
          Check live weather and rain forecast for any city in India
        </p>

        {/* SEARCH */}
        <div className="mt-8 flex gap-3 justify-center">
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name (e.g. Bhopal)"
            className="border p-3 rounded w-64"
          />
          <button
            onClick={() => fetchWeather(city)}
            className="bg-green-700 text-white px-6 rounded hover:bg-green-800"
          >
            Search
          </button>
        </div>

        {/* QUICK BUTTONS */}
        <div className="flex gap-4 justify-center mt-4">
          <button
            onClick={() => { setCity("Indore"); fetchWeather("Indore"); }}
            className="px-4 py-2 bg-white border rounded hover:bg-green-100"
          >
            Indore
          </button>
          <button
            onClick={() => { setCity("Bhopal"); fetchWeather("Bhopal"); }}
            className="px-4 py-2 bg-white border rounded hover:bg-green-100"
          >
            Bhopal
          </button>
        </div>

        {/* LOADING */}
        {loading && <p className="text-center mt-6 text-gray-600">Loading weather...</p>}

        {/* ERROR */}
        {error && <p className="text-center mt-6 text-red-600 font-semibold">{error}</p>}

        {/* WEATHER CARD */}
        {weather && (
          <div className="mt-10 bg-white rounded-xl shadow p-8 text-center">
            <h2 className="text-2xl font-bold text-green-700">{weather.name}</h2>

            <p className="text-5xl font-bold mt-4 flex items-center justify-center gap-2">
              <FaCloudSun /> {weather.main.temp}°C
            </p>

            <p className="capitalize text-gray-600 mt-2 flex items-center justify-center gap-2">
              <FaCloudRain /> {weather.weather[0].description}
            </p>
            <p className="mt-2 font-semibold flex items-center justify-center gap-2">
              {weather.weather[0].main.toLowerCase().includes("rain") ? <FaTint /> : <FaSun />} {willRain()}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="bg-green-50 p-4 rounded flex flex-col items-center">
                <FaTemperatureLow className="text-green-700 text-2xl" />
                <p className="mt-2">Min</p>
                <p className="font-bold">{weather.main.temp_min}°C</p>
              </div>
              <div className="bg-green-50 p-4 rounded flex flex-col items-center">
                <FaTemperatureHigh className="text-green-700 text-2xl" />
                <p className="mt-2">Max</p>
                <p className="font-bold">{weather.main.temp_max}°C</p>
              </div>
              <div className="bg-green-50 p-4 rounded flex flex-col items-center">
                <FaTint className="text-green-700 text-2xl" />
                <p className="mt-2">Humidity</p>
                <p className="font-bold">{weather.main.humidity}%</p>
              </div>
              <div className="bg-green-50 p-4 rounded flex flex-col items-center">
                <FaWind className="text-green-700 text-2xl" />
                <p className="mt-2">Wind</p>
                <p className="font-bold">{weather.wind.speed} km/h</p>
              </div>
              <div className="bg-green-50 p-4 rounded flex flex-col items-center">
                <FaTachometerAlt className="text-green-700 text-2xl" />
                <p className="mt-2">Pressure</p>
                <p className="font-bold">{weather.main.pressure} hPa</p>
              </div>
              <div className="bg-green-50 p-4 rounded flex flex-col items-center">
                <FaSun className="text-green-700 text-2xl" />
                <p className="mt-2">Sunrise</p>
                <p className="font-bold">{new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}</p>
              </div>
              <div className="bg-green-50 p-4 rounded flex flex-col items-center">
                <FaMoon className="text-green-700 text-2xl" />
                <p className="mt-2">Sunset</p>
                <p className="font-bold">{new Date(weather.sys.sunset * 1000).toLocaleTimeString()}</p>
              </div>
              <div className="bg-green-50 p-4 rounded flex flex-col items-center">
                <FaEye className="text-green-700 text-2xl" />
                <p className="mt-2">Visibility</p>
                <p className="font-bold">{weather.visibility / 1000} km</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
