import ForecastItem from "./ForecastItem";

export default function ForecastList({ forecast }) {
  return (
    <div className="forecast">
      {forecast.map((item) => (
        <ForecastItem key={item.dt} item={item} />
      ))}
    </div>
  );
}
