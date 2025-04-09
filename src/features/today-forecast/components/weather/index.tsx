import { useWeatherStore } from "../../store";
import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import { HoursForecast } from "../hours-forecast";

export const Weather = () => {
  const temperature = useWeatherStore((state) => state.todayForecast);

  return (
    <div>
      {temperature?.weather.map((temp) => (
        <Row key={temp.id} className={"align-items-center"}>
          <Col xs={"auto"}>
            <div>{temp.description}</div>
          </Col>

          <Col xs={"auto"}>
            <Image
              src={`https://openweathermap.org/img/wn/${temp.icon}@2x.png`}
              alt={temp.description}
              width={70}
              height={70}
              priority={true}
            />
          </Col>
        </Row>
      ))}

      <div className={"mb-2"}>
        Температура сейчас: {temperature?.main.temp}°
      </div>

      <div className={"mb-2"}>
        Восход:{" "}
        {new Date(
          Number(temperature?.sys.sunrise.toString().concat("000")) ?? "",
        ).toLocaleString("ru-RU", { hour: "numeric", minute: "numeric" })}
      </div>

      <div className={"mb-5"}>
        Закат:{" "}
        {new Date(
          Number(temperature?.sys?.sunset.toString().concat("000") ?? ""),
        ).toLocaleString("ru-RU", { hour: "numeric", minute: "numeric" })}
      </div>

      <HoursForecast />
    </div>
  );
};
