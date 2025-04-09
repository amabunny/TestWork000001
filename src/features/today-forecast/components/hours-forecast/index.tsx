import { useWeatherStore } from "@/features/today-forecast/store";
import { Card, Col, Row } from "react-bootstrap";
import Image from "next/image";
import { useMemo } from "react";

export const HoursForecast = () => {
  const groupedForecastFn = useWeatherStore((state) => state.groupedForecast);
  const hourlyForecast = useWeatherStore((state) => state.hourlyForecast);

  const hours = useMemo(groupedForecastFn, [groupedForecastFn, hourlyForecast]);

  return (
    <>
      {Object.entries(hours).map(([time, timestamp]) => (
        <Row key={time}>
          <Col xs={12} className={"mb-2"}>
            <h2 className={"h3"}>{time}</h2>
          </Col>

          <Row>
            {timestamp?.map((timestamp) => (
              <Col
                xs={12}
                md={6}
                lg={4}
                xl={3}
                key={timestamp.dt}
                className={"mb-4"}
              >
                <Card>
                  <Card.Body>
                    <div className={"mb-2"}>
                      {new Date(
                        Number(timestamp.dt.toString().concat("000")),
                      ).toLocaleString("ru-RU", {
                        hour: "numeric",
                        minute: "numeric",
                      })}
                    </div>

                    <div className={"mb-2"}>
                      Температура: {timestamp.main.temp}°
                    </div>

                    <div>
                      {timestamp.weather.map((weather) => (
                        <Row key={weather.id} className={"align-items-center"}>
                          <Col xs={"auto"}>
                            <Image
                              src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                              alt={weather.description}
                              width={50}
                              height={50}
                            />
                          </Col>
                          <Col xs={"auto"}>
                            <div>{weather.description}</div>
                          </Col>
                        </Row>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Row>
      ))}
    </>
  );
};
