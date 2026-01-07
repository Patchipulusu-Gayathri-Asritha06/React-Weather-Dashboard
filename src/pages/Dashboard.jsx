import { useWeatherContext } from "../context/WeatherContext";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import ForecastList from "../components/ForecastList";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

export default function Dashboard() {
  const { state } = useWeatherContext();
  const { weather, forecast, loading, error } = state;

  return (
    <div>
      <SearchBar />

      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}

      {!error && weather && <WeatherCard weather={weather} />}

      {!error && forecast.length > 0 && (
        <>
          <h2>Next 5-Day Weather Forecast</h2>
          <ForecastList forecast={forecast} />
        </>
      )}
    </div>
  );
}
