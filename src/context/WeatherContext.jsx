import { createContext, useContext, useReducer } from "react";
import { weatherReducer, initialState } from "./weatherReducer";

const WeatherContext = createContext();

export function WeatherProvider({ children }) {
  const [state, dispatch] = useReducer(weatherReducer, initialState);

  return (
    <WeatherContext.Provider value={{ state, dispatch }}>
      {children}
    </WeatherContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useWeatherContext() {
  return useContext(WeatherContext);
}
