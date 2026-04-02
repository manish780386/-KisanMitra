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
  
  FaCloudSun,
} from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

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
  const { lang } = useLanguage(); // ✅ LANGUAGE
  const [city, setCity] = useState<string>(
    localStorage.getItem("city") || "Indore"
  );
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const text = {
    en: {
      title: "Weather Forecast",
      subtitle: "Check live weather and rain forecast for any city in India",
      placeholder: "Enter city name (e.g. Bhopal)",
      search: "Search",
      loading: "Loading weather...",
      error: "City not found ❌",
      rain: "Likely to Rain",
      norain: "No Rain Expected",
      min: "Min",
      max: "Max",
      humidity: "Humidity",
      wind: "Wind",
      pressure: "Pressure",
      sunrise: "Sunrise",
      sunset: "Sunset",
      visibility: "Visibility",
    },
    hi: {
      title: "मौसम पूर्वानुमान",
      subtitle: "भारत के किसी भी शहर का लाइव मौसम देखें",
      placeholder: "शहर का नाम लिखें (जैसे भोपाल)",
      search: "खोजें",
      loading: "मौसम लोड हो रहा है...",
      error: "शहर नहीं मिला ❌",
      rain: "बारिश की संभावना",
      norain: "बारिश की संभावना नहीं",
      min: "न्यूनतम",
      max: "अधिकतम",
      humidity: "नमी",
      wind: "हवा",
      pressure: "दबाव",
      sunrise: "सूर्योदय",
      sunset: "सूर्यास्त",
      visibility: "दृश्यता",
    },
    mr: {
      title: "हवामान अंदाज",
      subtitle: "भारतामधील कोणत्याही शहराचे हवामान पहा",
      placeholder: "शहराचे नाव टाका (उदा. भोपाळ)",
      search: "शोधा",
      loading: "हवामान लोड होत आहे...",
      error: "शहर सापडले नाही ❌",
      rain: "पावसाची शक्यता",
      norain: "पावसाची शक्यता नाही",
      min: "किमान",
      max: "कमाल",
      humidity: "आर्द्रता",
      wind: "वारा",
      pressure: "दाब",
      sunrise: "सूर्योदय",
      sunset: "सूर्यास्त",
      visibility: "दृश्यता",
    },
  };

  const t = text[lang];

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
    } catch {
      setError(t.error);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const willRain = () =>
    weather?.weather[0].main.toLowerCase().includes("rain")
      ? `🌧️ ${t.rain}`
      : `☀️ ${t.norain}`;

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold text-green-700 text-center">
          {t.title} 🌦️
        </h1>
        <p className="text-center text-gray-600 mt-2">{t.subtitle}</p>

        <div className="mt-8 flex gap-3 justify-center">
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder={t.placeholder}
            className="border p-3 rounded w-64"
          />
          <button
            onClick={() => fetchWeather(city)}
            className="bg-green-700 text-white px-6 rounded hover:bg-green-800"
          >
            {t.search}
          </button>
        </div>

        {loading && (
          <p className="text-center mt-6 text-gray-600">{t.loading}</p>
        )}
        {error && (
          <p className="text-center mt-6 text-red-600 font-semibold">{error}</p>
        )}

        {weather && (
          <div className="mt-10 bg-white rounded-xl shadow p-8 text-center">
            <h2 className="text-2xl font-bold text-green-700">
              {weather.name}
            </h2>

            <p className="text-5xl font-bold mt-4 flex items-center justify-center gap-2">
              <FaCloudSun /> {weather.main.temp}°C
            </p>

            <p className="mt-2 font-semibold">{willRain()}</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="bg-green-50 p-4 rounded">
                <FaTemperatureLow /> {t.min}: {weather.main.temp_min}°C
              </div>
              <div className="bg-green-50 p-4 rounded">
                <FaTemperatureHigh /> {t.max}: {weather.main.temp_max}°C
              </div>
              <div className="bg-green-50 p-4 rounded">
                <FaTint /> {t.humidity}: {weather.main.humidity}%
              </div>
              <div className="bg-green-50 p-4 rounded">
                <FaWind /> {t.wind}: {weather.wind.speed} km/h
              </div>
              <div className="bg-green-50 p-4 rounded">
                <FaTachometerAlt /> {t.pressure}: {weather.main.pressure}
              </div>
              <div className="bg-green-50 p-4 rounded">
                <FaSun /> {t.sunrise}:{" "}
                {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}
              </div>
              <div className="bg-green-50 p-4 rounded">
                <FaMoon /> {t.sunset}:{" "}
                {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}
              </div>
              <div className="bg-green-50 p-4 rounded">
                <FaEye /> {t.visibility}: {weather.visibility / 1000} km
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
