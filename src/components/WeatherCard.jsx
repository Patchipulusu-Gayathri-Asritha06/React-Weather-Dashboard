export default function WeatherCard({ weather }) {
  const description = weather.weather[0].description;

  const getWeatherEmoji = (desc) => {
    if (desc.includes("clear")) return "☀️";
    if (desc.includes("cloud")) return "☁️";
    if (desc.includes("rain")) return "🌧️";
    if (desc.includes("drizzle")) return "🌦️";
    if (desc.includes("thunder")) return "⛈️";
    if (desc.includes("snow")) return "❄️";
    if (desc.includes("mist") || desc.includes("fog")) return "🌫️";
    return "🌈";
  };

  return (
    <div className="card">
      <h2>{weather.name}</h2>
      <p>🌡 Temp: {weather.main.temp} °C</p>
      <p>💧 Humidity: {weather.main.humidity}%</p>
      <p>💨 Wind: {weather.wind.speed} m/s</p>
      <p>
        {getWeatherEmoji(description)} Description: {description}
      </p>
    </div>
  );
}
