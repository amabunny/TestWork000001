import axios from "axios";

export const openWeatherApi = axios.create({
  baseURL: "https://api.openweathermap.org/",
  params: {
    appid: process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY,
    units: "metric",
    lang: "ru",
  },
});
