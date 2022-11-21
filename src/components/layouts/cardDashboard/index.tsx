import { CardContainer } from "./styles";
import { Thermometer } from "phosphor-react";

interface CardDashboardProps {
  data: any[];
  title: string;
  loading: boolean;
}

export const CardDashboard: React.FC<CardDashboardProps> = ({
  data,
  title,
  loading,
}) => {
  return (
    <CardContainer>
      {loading ? (
        "Carregando.."
      ) : (
        <>
          <p>Última {title} informada</p>
          <span>
            <Thermometer size={32} />
          </span>

          <p>{title}</p>
          {data && (
            <h2>
              {data[0].value || ""} {data[0].unit || ""}
            </h2>
          )}
        </>
      )}
    </CardContainer>
  );
};
