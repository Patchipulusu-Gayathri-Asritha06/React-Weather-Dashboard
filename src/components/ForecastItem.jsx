import { formatDate } from "../utils/formatDate";

export default function ForecastItem({ item }) {
  return (
    <div className="forecast-item">
      <p>{formatDate(item.dt)}</p>
      <p>{item.main.temp} °C</p>
      <p>{item.weather[0].description}</p>
    </div>
  );
}
