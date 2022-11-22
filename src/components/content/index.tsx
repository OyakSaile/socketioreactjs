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
  const [devicesData, setDevicesData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [tabHasFocus, setTabHasFocus] = useState(true);

  useEffect(() => {
    const handleFocus = () => {
      console.log("Tab has focus");
      setTabHasFocus(true);
    };

    const handleBlur = () => {
      console.log("Tab lost focus");
      setTabHasFocus(false);
    };

    window.addEventListener("focus", handleFocus);
    window.addEventListener("blur", handleBlur);

    return () => {
      window.removeEventListener("focus", handleFocus);
      window.removeEventListener("blur", handleBlur);
    };
  }, []);

  useEffect(() => {
    if (tabHasFocus) {
      setInterval(() => {
        socket.emit("requestDeviceData");
      }, 10000);
    }
  }, [tabHasFocus]);

  socket.on("devicesData", (data: any) => {
    setDevicesData(data);
  });

  const lastDevice = devicesData.slice(-1);

  const lastTemperature = lastDevice[0]?.variables.filter(
    (item: any) => item.variable_name === "Temperature"
  );

  const lastHumidity = lastDevice[0]?.variables.filter(
    (item: any) => item.variable_name === "Humidity"
  );

  useEffect(() => {
    if (devicesData.length > 0) {
      setLoading(false);
    }
  }, [devicesData]);

  return (
    <Container>
      <Row>
        <Col md={12} lg={6}>
          <Row>
            <Col >
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
              <ChartWithData statisticsData={devicesData} />
            </Col>
          </Row>
        </Col>
        <Col md={12} lg={6}>
          <Chat socket={socket} weatherData={devicesData} />
        </Col>
      </Row>
    </Container>
  );
};
