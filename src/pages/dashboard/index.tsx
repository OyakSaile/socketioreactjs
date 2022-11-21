import io from "socket.io-client";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { LoadingProvider } from "../../hooks/useLoading";
import { Wrapper } from "./styles";
import { Header } from "../../components/header";
import { Content } from "../../components/content";

export const DashBoard: React.FC = () => {
  const socket = io("http://localhost:3333");

  const [data, setData] = useState<any>();

  const [isDisabledWebSocket, setIsDisabledWebSocket] = useState(
    !!window.localStorage.getItem("stopSocketio")
  );

  const handleStopDataRequest = () => {
    // window.localStorage.setItem("stopSocketio", "true");
    setIsDisabledWebSocket(true);
  };

  const handleStartDataRequest = () => {
    // setLoading(true);

    // window.localStorage.removeItem("stopSocketio");

    setIsDisabledWebSocket(false);
  };

  return (
    <LoadingProvider>
      <Wrapper>
        <Header />
        <Container className="my-5">
          <Content socket={socket} weatherData={data} />
        </Container>
      </Wrapper>
    </LoadingProvider>
  );
};
