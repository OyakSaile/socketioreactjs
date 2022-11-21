import {
  HeaderContainer,
  ImageContainer,
  Content,
  StatusSocket,
} from "./styles";
import logoProio from "../../assets/logoproiot.png";
import { menuItens } from "./constants/menuItems";
import { Container } from "react-bootstrap";
export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Container>
        <Content>
          <ImageContainer>
            <img src={logoProio} alt="Logo Tipo" />
          </ImageContainer>

          <StatusSocket>
            <span></span>
            <p>Conexão ativa</p>
            <button>Desativar conexão</button>
          </StatusSocket>
        </Content>
      </Container>
    </HeaderContainer>
  );
};
