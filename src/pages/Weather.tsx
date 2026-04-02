import { useEffect, useState } from "react";
import axios from "axios";
import {
  FaTemperatureLow, FaTemperatureHigh, FaTint, FaWind,
  FaTachometerAlt, FaSun, FaMoon, FaEye, FaSearch, FaMapMarkerAlt,
} from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const API_KEY = "6839755239889a7df964a3b96da2e237";

interface WeatherData {
  name: string;
  main: { temp: number; temp_min: number; temp_max: number; humidity: number; pressure: number; feels_like: number; };
  weather: { main: string; description: string; icon: string; }[];
  wind: { speed: number; deg: number; };
  sys: { sunrise: number; sunset: number; country: string; };
  visibility: number;
  clouds: { all: number; };
}

const QUICK_CITIES = ["Indore", "Bhopal", "Nagpur", "Pune", "Jaipur", "Lucknow", "Delhi", "Sidhi"];

const getWeatherEmoji = (main: string) => {
  const m = main.toLowerCase();
  if (m.includes("rain")) return "🌧️";
  if (m.includes("cloud")) return "⛅";
  if (m.includes("thunder")) return "⛈️";
  if (m.includes("snow")) return "❄️";
  if (m.includes("mist") || m.includes("fog")) return "🌫️";
  if (m.includes("clear")) return "☀️";
  return "🌤️";
};

const getFarmingTip = (main: string, lang: string) => {
  const m = main.toLowerCase();
  const tips: Record<string, Record<string, string>> = {
    rain: {
      en: "🌧️ Rain alert! Avoid pesticide spraying today. Check drainage in your fields.",
      hi: "🌧️ बारिश अलर्ट! आज कीटनाशक का छिड़काव न करें। खेत की नालियां जांचें।",
      mr: "🌧️ पाऊस सूचना! आज कीटकनाशक फवारू नका. शेताचा निचरा तपासा.",
    },
    clear: {
      en: "☀️ Clear skies! Good day for harvesting, spraying, and field work.",
      hi: "☀️ साफ आसमान! कटाई, छिड़काव और खेत के काम के लिए अच्छा दिन।",
      mr: "☀️ स्वच्छ आकाश! कापणी, फवारणी आणि शेत कामासाठी चांगला दिवस.",
    },
    cloud: {
      en: "⛅ Cloudy weather. Good for transplanting seedlings. Avoid irrigation today.",
      hi: "⛅ बादल छाए हैं। पौध रोपण के लिए अच्छा। आज सिंचाई से बचें।",
      mr: "⛅ ढगाळ हवामान. रोपे लावण्यासाठी चांगले. आज सिंचन टाळा.",
    },
    thunder: {
      en: "⛈️ Thunderstorm warning! Stay indoors. Secure your farm equipment.",
      hi: "⛈️ आंधी-तूफान! घर में रहें। कृषि उपकरण सुरक्षित करें।",
      mr: "⛈️ वादळाची सूचना! घरात राहा. शेती उपकरणे सुरक्षित करा.",
    },
  };
  for (const key of Object.keys(tips)) {
    if (m.includes(key)) return tips[key][lang] || tips[key].en;
  }
  return tips.clear[lang] || tips.clear.en;
};

const Weather: React.FC = () => {
  const { lang } = useLanguage();
  const [city, setCity] = useState<string>(localStorage.getItem("city") || "Indore");
  const [inputCity, setInputCity] = useState<string>(localStorage.getItem("city") || "Indore");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const text = {
    en: {
      title: "Weather Forecast",
      subtitle: "Live weather & farming alerts for any city in India",
      placeholder: "Enter city name...",
      search: "Search",
      loading: "Fetching weather data...",
      error: "City not found. Please check the spelling.",
      rain: "Likely to Rain",
      norain: "No Rain Expected",
      min: "Min Temp",
      max: "Max Temp",
      humidity: "Humidity",
      wind: "Wind Speed",
      pressure: "Pressure",
      sunrise: "Sunrise",
      sunset: "Sunset",
      visibility: "Visibility",
      feelsLike: "Feels Like",
      clouds: "Cloud Cover",
      farmTip: "Farming Tip for Today",
      quickCities: "Quick Cities",
    },
    hi: {
      title: "मौसम पूर्वानुमान",
      subtitle: "भारत के किसी भी शहर के लिए लाइव मौसम और कृषि अलर्ट",
      placeholder: "शहर का नाम लिखें...",
      search: "खोजें",
      loading: "मौसम डेटा लोड हो रहा है...",
      error: "शहर नहीं मिला। स्पेलिंग जांचें।",
      rain: "बारिश की संभावना",
      norain: "बारिश नहीं होगी",
      min: "न्यूनतम तापमान",
      max: "अधिकतम तापमान",
      humidity: "नमी",
      wind: "हवा की गति",
      pressure: "वायुदाब",
      sunrise: "सूर्योदय",
      sunset: "सूर्यास्त",
      visibility: "दृश्यता",
      feelsLike: "महसूस होता है",
      clouds: "बादल",
      farmTip: "आज की कृषि सलाह",
      quickCities: "त्वरित शहर",
    },
    mr: {
      title: "हवामान अंदाज",
      subtitle: "भारतातील कोणत्याही शहरासाठी थेट हवामान आणि शेती सूचना",
      placeholder: "शहराचे नाव टाका...",
      search: "शोधा",
      loading: "हवामान डेटा लोड होत आहे...",
      error: "शहर सापडले नाही. स्पेलिंग तपासा.",
      rain: "पावसाची शक्यता",
      norain: "पाऊस नाही",
      min: "किमान तापमान",
      max: "कमाल तापमान",
      humidity: "आर्द्रता",
      wind: "वाऱ्याचा वेग",
      pressure: "हवेचा दाब",
      sunrise: "सूर्योदय",
      sunset: "सूर्यास्त",
      visibility: "दृश्यमानता",
      feelsLike: "जाणवते",
      clouds: "ढग",
      farmTip: "आजचा शेती सल्ला",
      quickCities: "त्वरित शहरे",
    },
  };

  const t = text[lang];

  const fetchWeather = async (cityName: string) => {
    try {
      setLoading(true);
      setError("");
      const res = await axios.get<WeatherData>(
        "https://api.openweathermap.org/data/2.5/weather",
        { params: { q: cityName, units: "metric", appid: API_KEY } }
      );
      setWeather(res.data);
      setCity(cityName);
      localStorage.setItem("city", cityName);
    } catch {
      setError(t.error);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchWeather(city); }, []);

  const willRain = () => weather?.weather[0].main.toLowerCase().includes("rain");

  const statCards = weather ? [
    { icon: <FaTemperatureLow className="text-blue-500" />, label: t.min, value: `${weather.main.temp_min}°C`, bg: "bg-blue-50 border-blue-100" },
    { icon: <FaTemperatureHigh className="text-red-500" />, label: t.max, value: `${weather.main.temp_max}°C`, bg: "bg-red-50 border-red-100" },
    { icon: <FaTint className="text-cyan-500" />, label: t.humidity, value: `${weather.main.humidity}%`, bg: "bg-cyan-50 border-cyan-100" },
    { icon: <FaWind className="text-teal-500" />, label: t.wind, value: `${weather.wind.speed} m/s`, bg: "bg-teal-50 border-teal-100" },
    { icon: <FaTachometerAlt className="text-purple-500" />, label: t.pressure, value: `${weather.main.pressure} hPa`, bg: "bg-purple-50 border-purple-100" },
    { icon: <FaEye className="text-indigo-500" />, label: t.visibility, value: `${(weather.visibility / 1000).toFixed(1)} km`, bg: "bg-indigo-50 border-indigo-100" },
    { icon: <FaSun className="text-yellow-500" />, label: t.sunrise, value: new Date(weather.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), bg: "bg-yellow-50 border-yellow-100" },
    { icon: <FaMoon className="text-orange-500" />, label: t.sunset, value: new Date(weather.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), bg: "bg-orange-50 border-orange-100" },
  ] : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-emerald-50 p-5 md:p-8">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Hind:wght@400;500;600&display=swap');
        .stat-card { transition: all 0.2s ease; }
        .stat-card:hover { transform: translateY(-3px); }
        .city-btn { transition: all 0.15s ease; }
        .city-btn:hover { transform: translateY(-2px); }
        .weather-main { background: linear-gradient(135deg, #1d4ed8 0%, #0891b2 50%, #059669 100%); }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        .weather-emoji { animation: float 3s ease-in-out infinite; display: inline-block; }
      `}</style>

      <div className="max-w-4xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🌦️ Live Weather
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800" style={{ fontFamily: "'Baloo 2', cursive" }}>
            {t.title}
          </h1>
          <p className="text-gray-500 mt-2" style={{ fontFamily: "'Hind', sans-serif" }}>{t.subtitle}</p>
        </div>

        {/* SEARCH */}
        <div className="bg-white rounded-2xl shadow-md p-5 mb-6">
          <div className="flex gap-3 mb-4">
            <div className="relative flex-1">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                value={inputCity}
                onChange={(e) => setInputCity(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && fetchWeather(inputCity)}
                placeholder={t.placeholder}
                className="border-2 border-gray-200 rounded-xl pl-11 pr-4 py-3 w-full focus:outline-none focus:border-blue-400 text-gray-700"
                style={{ fontFamily: "'Hind', sans-serif" }}
              />
            </div>
            <button
              onClick={() => fetchWeather(inputCity)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition flex items-center gap-2"
            >
              <FaSearch /> {t.search}
            </button>
          </div>

          <div>
            <p className="text-xs text-gray-500 font-semibold mb-2">{t.quickCities}:</p>
            <div className="flex flex-wrap gap-2">
              {QUICK_CITIES.map(c => (
                <button
                  key={c}
                  onClick={() => { setInputCity(c); fetchWeather(c); }}
                  className={`city-btn text-xs font-semibold px-3 py-1.5 rounded-lg border transition ${
                    city === c
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-gray-50 text-gray-600 border-gray-200 hover:border-blue-300"
                  }`}
                >
                  <FaMapMarkerAlt className="inline mr-1 text-xs" />{c}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* LOADING */}
        {loading && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4 weather-emoji">🌤️</div>
            <p className="text-gray-500 font-medium">{t.loading}</p>
          </div>
        )}

        {/* ERROR */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-5 text-center mb-6">
            <p className="text-red-600 font-semibold">❌ {error}</p>
          </div>
        )}

        {/* WEATHER CARD */}
        {weather && !loading && (
          <>
            {/* Main Card */}
            <div className="weather-main rounded-3xl p-8 text-white mb-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 text-[120px] opacity-10 leading-none">
                {getWeatherEmoji(weather.weather[0].main)}
              </div>
              <div className="relative z-10">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-blue-200 text-sm font-medium flex items-center gap-1">
                      <FaMapMarkerAlt /> {weather.name}, {weather.sys.country}
                    </p>
                    <p className="text-7xl font-extrabold mt-2" style={{ fontFamily: "'Baloo 2', cursive" }}>
                      {Math.round(weather.main.temp)}°C
                    </p>
                    <p className="text-blue-100 text-lg capitalize mt-1">{weather.weather[0].description}</p>
                    <p className="text-white font-bold mt-2 text-xl">
                      {getWeatherEmoji(weather.weather[0].main)} {willRain() ? t.rain : t.norain}
                    </p>
                  </div>
                  <div className="weather-emoji text-8xl">
                    {getWeatherEmoji(weather.weather[0].main)}
                  </div>
                </div>

                <div className="mt-6 flex gap-4 flex-wrap">
                  <div className="bg-white/20 rounded-xl px-4 py-2 text-sm">
                    🌡️ {t.feelsLike}: {Math.round(weather.main.feels_like)}°C
                  </div>
                  <div className="bg-white/20 rounded-xl px-4 py-2 text-sm">
                    ☁️ {t.clouds}: {weather.clouds.all}%
                  </div>
                </div>
              </div>
            </div>

            {/* Farming Tip */}
            <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-5 mb-6">
              <p className="text-amber-700 font-bold text-sm mb-1">🌾 {t.farmTip}</p>
              <p className="text-amber-900 font-medium" style={{ fontFamily: "'Hind', sans-serif" }}>
                {getFarmingTip(weather.weather[0].main, lang)}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {statCards.map((card, i) => (
                <div key={i} className={`stat-card ${card.bg} border-2 rounded-2xl p-4 text-center`}>
                  <div className="text-2xl mb-2 flex justify-center">{card.icon}</div>
                  <p className="text-xs text-gray-500 font-medium mb-1">{card.label}</p>
                  <p className="font-bold text-gray-800 text-sm">{card.value}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Weather;