import { CardContainer } from "./styles";
import { DropHalfBottom, Thermometer } from "phosphor-react";
import { Loading } from "../../loading";

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
        <Loading />
      ) : (
        <>
          <p>Última {title} informada</p>
          <span>
            {title === "Umidade" ? (
              <DropHalfBottom size={32} />
            ) : (
              <Thermometer size={32} />
            )}
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
