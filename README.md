
🌾 KisanMitra – Smart Farmer Assistant Platform

KisanMitra is a modern React + TypeScript based farming assistant web application that helps farmers with:

🌦️ Weather Forecast

🌱 Crop Advisory

💰 Mandi Prices

🏛️ Government Schemes

🛠️ Farm Tools & Equipment

💬 AI Farmer Chat (ChatGPT based)

🌐 Multi-Language Support (Hindi / English)

The goal of this project is to empower farmers with technology by providing all farming tools and information in one simple dashboard.

🚀 Features
📊 Dashboard

Central place to access all farming services easily.

🌦️ Weather Forecast

Live weather data using OpenWeather API

Temperature, humidity, wind, pressure

Sunrise & sunset time

Rain prediction

City search + quick buttons

🌱 Crop Advisory

Crop-wise farming guidance

Sowing & harvesting periods

Irrigation tips

Disease alerts

Pest control suggestions

Market tips

Supported crops:

Wheat

Rice

Maize

Soybean

Mustard

🏛️ Government Schemes

List of latest schemes for farmers

Eligibility info

Benefits

Official links

Search functionality

🛠️ Farm Tools & Equipment

Modern agricultural tools showcase

Images + descriptions

Features list

Popup details

💬 Farmer Chat (AI Powered)

Ask crop related questions

Chat with AI assistant

Future ready for:

Camera input (crop disease detection)

Expert consultation

Voice input

🌐 Multi-Language Support

English

Hindi

Language can be switched from Navbar.
All pages update automatically using global Language Context.

🧑‍💻 Tech Stack

Frontend:

React

TypeScript (TSX)

Tailwind CSS

React Router

React Icons

Axios

API:

OpenWeather API

State Management:

React Context (Language Context)

📁 Project Structure
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


⚙️ Installation
1. Clone repository
git clone <your-repo-url>
cd kisamitra

2. Install dependencies
npm install

3. Run project
npm run dev


Open:

http://localhost:5173

🔑 API Setup (Weather)

Create .env file:

VITE_WEATHER_API_KEY=your_api_key_here


Get key from:
https://openweathermap.org/api

🌟 Future Improvements

📷 Camera disease detection (AI)

🎤 Voice assistant for farmers

📈 Live mandi prices API

📞 Expert consultation chat

📱 Mobile app version (React Native)

🗣️ More regional languages

👨‍💻 Developer

Manish Dange

📧 manishdange17@gmail.com

Instagram:
https://www.instagram.com/manish_dange_07/

❤️ Contribution

Pull requests are welcome.
For major changes, please open an issue first.

📜 License

This project is for educational and social good purposes.
