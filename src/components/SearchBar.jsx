import { useState, useCallback, useEffect } from "react";
import { useWeatherContext } from "../context/WeatherContext";
import { getWeatherData } from "../hooks/useWeather";
import SearchHistory from "./SearchHistory";

const HISTORY_KEY = "weather-search-history";

export default function SearchBar() {
  const [city, setCity] = useState("");
  const [history, setHistory] = useState([]);
  const { dispatch } = useWeatherContext();

  // Load history on mount
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHistory(stored);
  }, []);

  const updateHistory = (cityName) => {
    let updated = [cityName, ...history.filter(c => c !== cityName)];
    updated = updated.slice(0, 5); // keep last 5 searches
    setHistory(updated);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
  };

  const handleSearch = useCallback(
    // eslint-disable-next-line react-hooks/preserve-manual-memoization
    (searchCity = city) => {
      if (!searchCity.trim()) return;
      getWeatherData(searchCity, dispatch);
      updateHistory(searchCity);
      setCity("");
    },
    [city, history, dispatch]
  );

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={() => handleSearch()}>Search</button>
      </div>

      <SearchHistory history={history} onSelect={handleSearch} />
    </>
  );
}
