import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { IAddressResponseItem } from "@/types/dadata";
import { CurrentWeatherResponse, ForecastResponse } from "@/types/open-weather";
import {
  currentForecastWeather,
  hourlyForecastWeather,
} from "@/services/open-weather";
import { Location } from "@/types/oxilor";

interface WeatherStore {
  selectedCity: Location | null;
  setSelectedCity: (city: Location | null) => void;
  fetchWeather: () => void;
  todayForecast: CurrentWeatherResponse | null;
  hourlyForecast: ForecastResponse | null;
}

export const useWeatherStore = create<WeatherStore>()(
  devtools(
    (setState) => {
      const fetchWeather = async (city: Location) => {
        const today = await currentForecastWeather(
          city.latitude.toString(),
          city.longitude.toString(),
        );
        const hourly = await hourlyForecastWeather(
          city.latitude.toString(),
          city.longitude.toString(),
        );

        setState({ todayForecast: today, hourlyForecast: hourly });
      };

      return {
        selectedCity: null,
        hourlyForecast: null,
        todayForecast: null,
        fetchWeather,
        setSelectedCity: (city) => {
          setState({ selectedCity: city });
          if (city) {
            void fetchWeather(city);
          } else {
            setState({
              hourlyForecast: null,
              todayForecast: null,
            });
          }
        },
      };
    },
    { name: "WeatherStore" },
  ),
);
