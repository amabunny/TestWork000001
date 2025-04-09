import { openWeatherApi } from "@/api/open-weather";
import { CurrentWeatherResponse, ForecastResponse } from "@/types/open-weather";

export const currentForecastWeather = async (lat: string, lon: string) => {
  const response = await openWeatherApi.get<CurrentWeatherResponse>(
    "/data/2.5/weather",
    {
      params: { lat, lon },
    },
  );

  return response.data;
};

export const hourlyForecastWeather = async (lat: string, lon: string) => {
  const response = await openWeatherApi.get<ForecastResponse>(
    "/data/2.5/forecast",
    {
      params: {
        lat,
        lon,
      },
    },
  );

  return response.data;
};
