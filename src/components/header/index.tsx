import {
  HeaderContainer,
  ImageContainer,
  Content,
  StatusSocket,
} from "./styles";
import logoProio from "../../assets/logoproiot.png";
import { menuItens } from "./constants/menuItems";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";

interface HeaderProps {
  socket: any;
}
export const Header: React.FC<HeaderProps> = ({ socket }) => {
  const [isEnabledWebSocket, setIsEnabledWebSocket] = useState(
    window.localStorage.getItem("stopSocket") === null ? true : false
  );

  useEffect(() => {
    const a = window.localStorage.getItem("stopSocket") === null ? true : false;
  }, []);

  const handleStopDataRequest = () => {
    window.localStorage.setItem("stopSocket", "true");
    setIsEnabledWebSocket(false);
    socket.close();
  };

  const handleStartDataRequest = () => {
    setIsEnabledWebSocket(true);
    socket.open();
  };

  return (
    <HeaderContainer>
      <Container>
        <Content>
          <ImageContainer>
            <img src={logoProio} alt="Logo Tipo" />
          </ImageContainer>

          <StatusSocket>
            <span className={isEnabledWebSocket ? "green" : "red"}></span>
            <p>Conexão {isEnabledWebSocket ? "Ativa" : "Desativada"}</p>
            {isEnabledWebSocket ? (
              <button type="button" onClick={handleStopDataRequest}>
                Desativar conexão
              </button>
            ) : (
              <button type="button" onClick={handleStartDataRequest}>
                Ativar conexão
              </button>
            )}
          </StatusSocket>
        </Content>
      </Container>
    </HeaderContainer>
  );
};
