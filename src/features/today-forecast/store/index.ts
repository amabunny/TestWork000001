import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { IAddressResponseItem } from "@/types/dadata";
import { IOpenWeatherForecast } from "@/types/open-weather";
import { currentForecastsWeather } from "@/services/open-weather";

interface WeatherStore {
  selectedCity: IAddressResponseItem | null;
  setSelectedCity: (city: IAddressResponseItem | null) => void;
  fetchWeather: () => void;
  forecast: IOpenWeatherForecast | null;
}

export const useWeatherStore = create<WeatherStore>()(
  devtools(
    (setState, getState) => {
      const fetchWeather = async (city: IAddressResponseItem) => {
        const result = await currentForecastsWeather(
          city.geo_lat,
          city.geo_lon,
        );

        setState({ forecast: result });
      };

      return {
        selectedCity: null,
        forecast: null,
        fetchWeather,
        setSelectedCity: (city) => {
          setState({ selectedCity: city });
          if (city) {
            void fetchWeather(city);
          }
        },
      };
    },
    { name: "WeatherStore" },
  ),
);
