import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Box } from "@chakra-ui/react";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Employee", "Store", "Material"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3], //là gì?
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export default function ChartRight() {
  return (
    <Box
      padding={`1rem`}
      bg="white"
      borderRadius={`8px`}
      boxShadow="0px 1px 1px rgb(100 116 139 / 6%), 0px 1px 2px rgb(100 116 139 / 10%)"
      height={"100%"}
    >
      <Pie data={data} />
    </Box>
  );
}
