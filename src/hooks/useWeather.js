import {
    fetchCurrentWeather,
    fetchForecast
} from "../services/weatherService";

import {
    useLocalStorage
} from "./useLocalStorage";

const CACHE_TIME = 10 * 60 * 1000; // 10 minutes

export async function getWeatherData(city, dispatch) {
    const cacheKey = `weather-${city.toLowerCase()}`;
    const {
        getItem,
        setItem
        // eslint-disable-next-line react-hooks/rules-of-hooks
    } = useLocalStorage(cacheKey);

    const cachedData = getItem();

    if (cachedData && Date.now() - cachedData.timestamp < CACHE_TIME) {
        dispatch({
            type: "FETCH_SUCCESS",
            payload: cachedData.data,
        });
        return true; // ✅ success from cache
    }

    try {
        dispatch({
            type: "FETCH_START"
        });

        const weather = await fetchCurrentWeather(city);
        const forecastRes = await fetchForecast(city);

        const forecast = forecastRes.list.filter((_, index) => index % 8 === 0);

        const data = {
            weather,
            forecast
        };

        setItem({
            timestamp: Date.now(),
            data,
        });

        dispatch({
            type: "FETCH_SUCCESS",
            payload: data,
        });

        return true; // ✅ success from API
    } catch (error) {
        dispatch({
            type: "FETCH_ERROR",
            payload: error.message,
        });

        return false; // ❌ failed
    }
}