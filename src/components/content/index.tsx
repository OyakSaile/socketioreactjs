import { Container, ContentWrapper } from "./styles";
import { ChartWithData } from "./components/chartWithData";
import { Humidity } from "./components/humidity";
import { Temperature } from "./components/temperature";
import { InformationCard } from "../layouts/informationCard";

export const Content: React.FC = () => {
  return (
    <Container>
      <ContentWrapper>
        <ChartWithData />
        <Temperature />
        <Humidity />
      </ContentWrapper>
    </Container>
  );
};
