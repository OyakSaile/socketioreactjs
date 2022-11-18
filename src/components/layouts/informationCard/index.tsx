import React, { ReactNode } from "react";
import { Container, Header } from "./styles";

interface InformationCardProps {
  children: ReactNode;
  title: string;
}

export const InformationCard: React.FC<InformationCardProps> = ({
  children,
  title,
}) => {
  const titleToUpperCase = title.toUpperCase();

  return (
    <Container>
      <Header>{titleToUpperCase}</Header>
      
      {children}
    </Container>
  );
};
