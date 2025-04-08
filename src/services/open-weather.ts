import { openWeatherApi } from "@/api/open-weather";
import { IOpenWeatherForecast } from "@/types/open-weather";

export const currentForecastsWeather = async (lat: string, lon: string) => {
  const response = await openWeatherApi.get<IOpenWeatherForecast>(
    "/data/2.5/weather",
    {
      params: { lat, lon },
    },
  );

  return response.data;
};
