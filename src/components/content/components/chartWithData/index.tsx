import { faker } from "@faker-js/faker";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { ContainerChart } from "./styles";
import { useState } from "react";

interface ChartWithDataProps {
  statisticsData: any;
}

export const ChartWithData: React.FC<ChartWithDataProps> = ({
  statisticsData,
}) => {
  const [humidity, setHumidity] = useState([]);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  };

  const labels = ["01", "02", "03", "04", "05", "06", "07"];

  const mapHumidity = statisticsData.flatMap((item: any) =>
    item.variables
      .filter((item: any) => item.variable_name === "Humidity")
      .flatMap((item: any) => item.histories.flatMap((item: any) => item.value))
  );

  const mapTemperature = statisticsData.flatMap((item: any) =>
    item.variables
      .filter((item: any) => item.variable_name === "Temperature")
      .flatMap((item: any) => item.histories.flatMap((item: any) => item.value))
  );

  const data = {
    labels,
    datasets: [
      {
        label: "Umidade",
        data: mapHumidity,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Temperatura",
        data: mapTemperature,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <ContainerChart>
      <Line options={options} data={data} />
    </ContainerChart>
  );
};
