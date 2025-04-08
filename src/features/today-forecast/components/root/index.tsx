"use client";

import { Form } from "react-bootstrap";
import styles from "./style.module.scss";
import { AsyncSelect, AsyncSelectProps } from "@/ui";
import { useCallback, useState } from "react";
import { fetchAddresses } from "@/services/api/dadata";
import { IAddressResponseItem } from "@/types/dadata";
import { GroupBase } from "react-select";
import debounce from "debounce-promise";
import { useWeatherStore } from "../../store";

const getOptions = debounce(fetchAddresses, 1000);

export const TodayForecast = () => {
  const selectedCity = useWeatherStore((state) => state.selectedCity);
  const setSelectedCity = useWeatherStore((state) => state.setSelectedCity);

  const loadOptions = useCallback<
    NonNullable<
      AsyncSelectProps<
        IAddressResponseItem,
        false,
        GroupBase<IAddressResponseItem>
      >["loadOptions"]
    >
  >((inputValue) => getOptions(inputValue), []);

  return (
    <Form>
      <Form.Group className={"mb-3"} controlId={"todayForecast.city"}>
        <Form.Label>Город</Form.Label>
        <AsyncSelect
          className={styles.citySelect}
          placeholder={"Введите название города"}
          noOptionsMessage={() => "Нет доступных городов"}
          loadOptions={loadOptions}
          getOptionLabel={(option: IAddressResponseItem) => option.result}
          isClearable={true}
          loadingMessage={() => "Загрузка..."}
          onChange={(option) => setSelectedCity(option)}
          value={selectedCity}
        />
      </Form.Group>
    </Form>
  );
};
