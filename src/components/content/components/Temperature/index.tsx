import { InformationCard } from "../../../layouts/informationCard";
import { Content } from "./styles";

export const Temperature: React.FC = () => {
  return (
    <InformationCard title="Temperatura">
      <Content>
        <p>Last Value</p>
        <h1>27 C</h1>
      </Content>
    </InformationCard>
  );
};
