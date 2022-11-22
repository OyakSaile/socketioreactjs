import io from "socket.io-client";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { LoadingProvider } from "../../hooks/useLoading";
import { Wrapper } from "./styles";
import { Header } from "../../components/header";
import { Content } from "../../components/content";

export const DashBoard: React.FC = () => {
  const socket = io("http://localhost:3333", {
    autoConnect: false,
  });

  const [data, setData] = useState<any>();

  useEffect(() => {
    const isEnabledWebSocket =
      window.localStorage.getItem("stopSocket") === null ? true : false;

    if (isEnabledWebSocket) {
      socket.open();
    }
  }, []);

  return (
    <LoadingProvider>
      <Wrapper>
        <Header socket={socket} />
        <Container className="my-5">
          <Content socket={socket} weatherData={data} />
        </Container>
      </Wrapper>
    </LoadingProvider>
  );
};
