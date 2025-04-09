"use client";

import { Form } from "react-bootstrap";
import styles from "./style.module.scss";
import { AsyncSelect, AsyncSelectProps } from "@/ui";
import { useCallback, useEffect } from "react";
import { searchRegions } from "@/services/oxilor";
import { GroupBase } from "react-select";
import debounce from "debounce-promise";
import { useWeatherStore } from "../../store";
import { Location } from "@/types/oxilor";
import { Weather } from "../weather";

const getOptions = debounce(searchRegions, 1000);

export const TodayForecast = () => {
  const selectedCity = useWeatherStore((state) => state.selectedCity);
  const setSelectedCity = useWeatherStore((state) => state.setSelectedCity);
  const fetchWeather = useWeatherStore((state) => state.fetchWeather);

  const loadOptions = useCallback<
    NonNullable<
      AsyncSelectProps<Location, false, GroupBase<Location>>["loadOptions"]
    >
  >((inputValue) => getOptions(inputValue), []);

  useEffect(() => {
    if (selectedCity) {
      void fetchWeather(selectedCity);
    }
  }, [fetchWeather, selectedCity]);

  return (
    <>
      <Form>
        <Form.Group className={"mb-3"} controlId={"todayForecast.city"}>
          <Form.Label>Город</Form.Label>
          <AsyncSelect
            className={styles.citySelect}
            placeholder={"Введите название города"}
            noOptionsMessage={() => "Нет доступных городов"}
            loadOptions={loadOptions}
            getOptionLabel={(option) =>
              option.parentRegions.length > 0
                ? option.parentRegions
                    .map((region) => region.name)
                    .reverse()
                    .join(", ") +
                  ", " +
                  option.name
                : option.name
            }
            getOptionValue={(option) => option.id}
            isClearable={true}
            loadingMessage={() => "Загрузка..."}
            onChange={(option) => setSelectedCity(option)}
            value={selectedCity}
          />
        </Form.Group>
      </Form>

      {selectedCity && <Weather />}
    </>
  );
};
