import { ContentWrapper } from "./styles";
import { ChartWithData } from "./components/chartWithData";
import { Temperature } from "./components/Temperature";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CardDashboard } from "../layouts/cardDashboard";
import { Chat } from "./components/Chat";

interface ContentProps {
  weatherData: any;
  socket: any;
}

export const Content: React.FC<ContentProps> = ({ socket }) => {
  const [deviceData, setDeviceData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    socket.emit("requestDeviceData");
  }, []);

  socket.on("devicesData", (data: any) => {
    setDeviceData(data);
  });

  const lastDevice = deviceData.slice(-1);

  const lastTemperature = lastDevice[0]?.variables.filter(
    (item: any) => item.variable_name === "Temperature"
  );

  const lastHumidity = lastDevice[0]?.variables.filter(
    (item: any) => item.variable_name === "Humidity"
  );

  useEffect(() => {
    if (deviceData.length > 0) {
      setLoading(false);
    }
  }, [deviceData]);

  return (
    <Container>
      <Row>
        <Col md={12} lg={6}>
          <Row>
            <Col>
              <CardDashboard
                loading={loading}
                title="Temperature"
                data={lastTemperature}
              />
            </Col>
            <Col>
              <CardDashboard
                loading={loading}
                title="Umidade"
                data={lastHumidity}
              />
            </Col>
          </Row>

          <Row className="my-5">
            <Col>
              <ChartWithData />
            </Col>
          </Row>
        </Col>
        <Col md={12} lg={6}>
          <Chat socket={socket} weatherData={deviceData} />
        </Col>
      </Row>
    </Container>
  );
};
