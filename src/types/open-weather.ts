export interface CurrentWeatherResponse {
  coord: Coordinates; // Координаты города
  weather: Weather[]; // Погодные условия
  base: string; // Внутреннее значение
  main: MainWeather; // Основные параметры (температура и т.д.)
  visibility: number; // Видимость в метрах
  wind: Wind; // Ветер
  clouds: Clouds; // Облачность
  rain?: Rain; // Дождь (опционально)
  snow?: Snow; // Снег (опционально)
  dt: number; // Временная метка (Unix)
  sys: Sys; // Системная информация (страна, закат и т.п.)
  timezone: number; // Смещение временной зоны
  id: number; // ID города
  name: string; // Название города
  cod: number; // Код ответа
}

// Координаты
interface Coordinates {
  lon: number;
  lat: number;
}

// Погодное состояние
interface Weather {
  id: number;
  main: string; // Например, "Clear"
  description: string; // Например, "clear sky"
  icon: string; // Код иконки
}

// Основные параметры
interface MainWeather {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level?: number;
  grnd_level?: number;
}

// Облачность
interface Clouds {
  all: number; // В процентах
}

// Ветер
interface Wind {
  speed: number;
  deg: number;
  gust?: number;
}

// Дождь (может быть, может не быть)
interface Rain {
  "1h"?: number;
  "3h"?: number;
}

// Снег (тоже может быть)
interface Snow {
  "1h"?: number;
  "3h"?: number;
}

// Информация о стране и времени
interface Sys {
  type?: number;
  id?: number;
  country: string; // ISO-код страны
  sunrise: number;
  sunset: number;
}

// Основной интерфейс для ответа от /data/2.5/forecast
export interface ForecastResponse {
  cod: string; // Код состояния ответа
  message: number; // Сообщение о состоянии
  cnt: number; // Количество временных меток в ответе
  list: ForecastEntry[]; // Массив записей прогноза
  city: City; // Информация о городе
}

// Интерфейс для каждой записи прогноза
export interface ForecastEntry {
  dt: number; // Временная метка в формате Unix
  main: MainWeather; // Основные параметры погоды
  weather: Weather[]; // Массив погодных условий
  clouds: Clouds; // Облачность
  wind: Wind; // Ветер
  visibility: number; // Видимость в метрах
  pop: number; // Вероятность осадков
  rain?: Rain; // Информация о дожде (опционально)
  snow?: Snow; // Информация о снеге (опционально)
  sys: Sys; // Дополнительные данные
  dt_txt: string; // Дата и время в формате строки
}

// Интерфейс для основных параметров погоды
interface MainWeather {
  temp: number; // Температура
  feels_like: number; // Ощущаемая температура
  temp_min: number; // Минимальная температура
  temp_max: number; // Максимальная температура
  pressure: number; // Атмосферное давление
  sea_level?: number; // Давление на уровне моря (опционально)
  grnd_level?: number; // Давление на уровне земли (опционально)
  humidity: number; // Влажность в процентах
  temp_kf?: number; // Коэффициент температуры (опционально)
}

// Интерфейс для погодных условий
interface Weather {
  id: number; // Идентификатор погодного состояния
  main: string; // Основное описание (например, "Rain")
  description: string; // Детальное описание (например, "light rain")
  icon: string; // Иконка погоды
}

// Интерфейс для облачности
interface Clouds {
  all: number; // Облачность в процентах
}

// Интерфейс для ветра
interface Wind {
  speed: number; // Скорость ветра
  deg: number; // Направление ветра в градусах
  gust?: number; // Порывы ветра (опционально)
}

// Интерфейс для дополнительных данных
interface Sys {
  pod: string; // Части дня (например, "d" для дневного времени)
}

// Интерфейс для информации о городе
interface City {
  id: number; // Идентификатор города
  name: string; // Название города
  coord: Coordinates; // Координаты города
  country: string; // Код страны
  population: number; // Население
  timezone: number; // Смещение временной зоны в секундах
  sunrise: number; // Время восхода солнца (Unix)
  sunset: number; // Время заката солнца (Unix)
}

// Интерфейс для координат
interface Coordinates {
  lat: number; // Широта
  lon: number; // Долгота
}
