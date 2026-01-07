# 🌦 React Weather Dashboard

A modern **React-based Weather Dashboard** that displays real-time weather information and a 5-day forecast for any city. The application uses the **OpenWeatherMap API**, React Context API, custom hooks, and localStorage caching to deliver a fast and user-friendly experience.

---

## 🚀 Features

- 🔍 Search weather details by city name  
- ⏱ Displays real-time current weather data  
- 📅 Shows 5-day weather forecast (daily summary)  
- 💾 Stores recent searches using localStorage  
- ⚡ Caches API responses for 10 minutes to reduce API calls  
- 🔄 Loading and error handling for better UX  
- 🎨 Responsive UI with modern glassmorphism design  

---

## 🛠 Tech Stack

**Frontend**
- React.js
- Context API & `useReducer`
- Custom React Hooks

**APIs**
- OpenWeatherMap API

**Styling**
- CSS3
- CSS Grid
- Glassmorphism UI

**Tools**
- Vite
- Git & GitHub
- Local Storage

---

## 📁 Project Structure

src/
├── components/
│ ├── SearchBar.jsx
│ ├── SearchHistory.jsx
│ ├── WeatherCard.jsx
│ ├── ForecastList.jsx
│ ├── ForecastItem.jsx
│ ├── Loader.jsx
│ └── ErrorMessage.jsx
│
├── context/
│ ├── WeatherContext.jsx
│ └── weatherReducer.js
│
├── hooks/
│ ├── useWeather.js
│ └── useLocalStorage.js
│
├── services/
│ └── weatherService.js
│
├── utils/
│ └── formatDate.js
│
├── pages/
│ └── Dashboard.jsx
│
├── App.jsx
├── main.jsx
└── index.css

