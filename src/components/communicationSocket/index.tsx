import React from "react";
import { Button } from "../button";
import { Container } from "./styles";

export const CommunicationSocket: React.FC = () => {
  return (
    <Container>
      <p>
        <span></span>Comunicação ativa
      </p>
      <Button>Desativar Socket</Button>
    </Container>
  );
};
