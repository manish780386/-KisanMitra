# 🌾 KisanMitra – Smart Farmer Assistant Platform

KisanMitra is a modern **React + TypeScript** based farming assistant web application that helps farmers access all essential agricultural tools and information in one simple and easy-to-use dashboard.

The goal of this project is to **empower farmers with technology**, providing weather updates, crop guidance, market prices, government schemes, and AI support in one place.

---

## 🚀 Features

### 📊 Dashboard

Central hub to quickly access all farming services.

### 🌦️ Weather Forecast

* Live weather data using OpenWeather API
* Temperature, humidity, wind speed, pressure
* Sunrise & sunset timings
* Rain prediction
* City search + quick access buttons

### 🌱 Crop Advisory

* Crop-wise farming guidance
* Sowing & harvesting periods
* Irrigation tips
* Disease alerts
* Pest control suggestions
* Market tips

**Supported Crops:**

* Wheat
* Rice
* Maize
* Soybean
* Mustard

### 🏛️ Government Schemes

* Latest schemes for farmers
* Eligibility details
* Benefits information
* Official links
* Search functionality

### 🛠️ Farm Tools & Equipment

* Modern agricultural tools showcase
* Images + descriptions
* Features list
* Popup detail view

### 💬 Farmer Chat (AI Powered)

* Ask crop-related questions
* Chat with AI assistant
* Future-ready for:

  * Camera disease detection
  * Expert consultation
  * Voice input

### 🌐 Multi-Language Support

* English
* Hindi

Language can be switched from Navbar.
All pages update automatically using **Global Language Context**.

---

## 🧑‍💻 Tech Stack

### Frontend

* React
* TypeScript (TSX)
* Tailwind CSS
* React Router
* React Icons
* Axios

### API

* OpenWeather API

### State Management

* React Context (Language Context)

---

## 📁 Project Structure

```
src/
 ├─ components/
 │   ├─ Navbar.tsx
 │   ├─ Footer.tsx
 │
 ├─ pages/
 │   ├─ Dashboard.tsx
 │   ├─ Weather.tsx
 │   ├─ CropAdvisory.tsx
 │   ├─ GovtSchemes.tsx
 │   ├─ FarmTools.tsx
 │   ├─ Chat.tsx
 │
 ├─ context/
 │   ├─ LanguageContext.tsx
 │
 ├─ App.tsx
 ├─ main.tsx
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```
git clone <your-repo-url>
cd kisamitra
```

### 2️⃣ Install Dependencies

```
npm install
```

### 3️⃣ Run Development Server

```
npm run dev
```

Open in browser:

```
http://localhost:5173
```

---

## 🔑 API Setup (Weather)

Create `.env` file in root folder:

```
VITE_WEATHER_API_KEY=your_api_key_here
```

Get API key from:

```
https://openweathermap.org/api
```

---

## 🌟 Future Improvements

* 📷 AI Crop disease detection using camera
* 🎤 Voice assistant for farmers
* 📈 Live mandi prices API
* 📞 Expert consultation chat
* 📱 Mobile app (React Native)
* 🗣️ More regional language support

---

## 👨‍💻 Developer

**Manish Dange**

📧 [dangemanish35@gmail.com](mailto:dangemanish35@gmail.com)
📷 Instagram:
https://www.instagram.com/manish_dange_07/

---

## ❤️ Contribution

Pull requests are welcome.
For major changes, please open an issue first to discuss what you would like to change.

---

## 📜 License

This project is created for **educational and social good purposes**.
Feel free to use and improve it for helping farmers.
