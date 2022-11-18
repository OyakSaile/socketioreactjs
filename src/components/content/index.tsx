import { Container , ContentWrapper} from "./styles";
import { ChartWithData } from "./components/chartWithData";
import { Humidity } from "./components/Humidity";
import { Temperature } from "./components/Temperature";

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
