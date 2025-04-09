import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import {
  CurrentWeatherResponse,
  ForecastEntry,
  ForecastResponse,
} from "@/types/open-weather";
import {
  currentForecastWeather,
  hourlyForecastWeather,
} from "@/services/open-weather";
import { Location } from "@/types/oxilor";

interface WeatherStore {
  selectedCity: Location | null;
  setSelectedCity: (city: Location | null) => void;
  fetchWeather: (city: Location) => Promise<void>;
  todayForecast: CurrentWeatherResponse | null;
  hourlyForecast: ForecastResponse | null;
  groupedForecast: () => Partial<Record<string, ForecastEntry[]>>;
}

export const useWeatherStore = create<WeatherStore>()(
  devtools(
    persist(
      (setState, getState) => {
        const fetchWeather = async (city: Location) => {
          const [today, hourly] = await Promise.allSettled([
            currentForecastWeather(
              city.latitude.toString(),
              city.longitude.toString(),
            ),
            hourlyForecastWeather(
              city.latitude.toString(),
              city.longitude.toString(),
            ),
          ]);

          setState({
            todayForecast: today.status === "fulfilled" ? today.value : null,
            hourlyForecast: hourly.status === "fulfilled" ? hourly.value : null,
          });
        };

        return {
          selectedCity: null,
          hourlyForecast: null,
          todayForecast: null,
          fetchWeather,
          setSelectedCity: (city) => {
            setState({ selectedCity: city });
          },
          groupedForecast: () =>
            Object.groupBy(getState()?.hourlyForecast?.list ?? [], ({ dt }) =>
              new Date(Number(dt.toString().concat("000"))).toLocaleString(
                "ru-RU",
                { day: "numeric", month: "long" },
              ),
            ),
        };
      },
      { name: "weather-store" },
    ),
    { name: "WeatherStore" },
  ),
);
