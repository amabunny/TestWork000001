import axios from "axios";

const params = {
  appid: process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY,
  units: "metric",
  lang: "ru",
};

export const openWeatherApi = axios.create({
  baseURL: "https://api.openweathermap.org/",
  params,
});

export const proOpenWeatherApi = axios.create({
  baseURL: "https://pro.openweathermap.org/",
  params,
});
