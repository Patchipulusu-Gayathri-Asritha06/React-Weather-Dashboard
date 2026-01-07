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

src/ <br/>
├── components/ <br/>
│ ├── SearchBar.jsx <br/>
│ ├── SearchHistory.jsx <br/>
│ ├── WeatherCard.jsx <br/>
│ ├── ForecastList.jsx <br/>
│ ├── ForecastItem.jsx <br/>
│ ├── Loader.jsx <br/>
│ └── ErrorMessage.jsx <br/>
│ <br/>
├── context/ <br/>
│ ├── WeatherContext.jsx <br/>
│ └── weatherReducer.js <br/>
│ <br/>
├── hooks/ <br/>
│ ├── useWeather.js <br/>
│ └── useLocalStorage.js <br/>
│ <br/>
├── services/ <br/>
│ └── weatherService.js <br/>
│ <br/>
├── utils/ <br/>
│ └── formatDate.js <br/>
│ <br/>
├── pages/ <br/>
│ └── Dashboard.jsx <br/>
│ <br/>
├── App.jsx <br/>
├── main.jsx <br/>
└── index.css <br/>

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/react-weather-dashboard.git
cd react-weather-dashboard

