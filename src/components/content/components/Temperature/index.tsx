import { useEffect } from "react";
import { Socket } from "socket.io-client";
import { Content } from "./styles";

interface TemperatureProps {
  weatherData: any;
  socket: any;
}
export const Temperature: React.FC<TemperatureProps> = ({
  weatherData,
  socket,
}) => {
  const lastTemperature = weatherData?.variables
    .filter((item: any) => item.variable_name === "Temperature")
    .slice(-1);

  return (
    <Content>
      {lastTemperature ? (
        <>
          <p>Last Value</p>
          <h1>
            {lastTemperature[0].value} {lastTemperature[0].unit}
          </h1>
        </>
      ) : (
        "Ainda não temos dados"
      )}
    </Content>
  );
};
