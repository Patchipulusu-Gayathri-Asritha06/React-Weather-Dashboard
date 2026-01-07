const BASE_URL = "https://api.openweathermap.org/data/2.5";
const API_KEY =
    import.meta.env.VITE_WEATHER_API_KEY;

export async function fetchCurrentWeather(city) {
    const res = await fetch(
        `${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    if (!res.ok) throw new Error("City not found");
    return res.json();
}

export async function fetchForecast(city) {
    const res = await fetch(
        `${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`
    );
    if (!res.ok) throw new Error("Forecast not available");
    return res.json();
}