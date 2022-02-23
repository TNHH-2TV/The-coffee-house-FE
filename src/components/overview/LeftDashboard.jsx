import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import Chart from "./ChartLeft.jsx";
  
function LeftDashboard(props) {
  return (
    <Box width="63%">
      <Box
        bg="#FFFFFF"
        borderRadius="8px"
        padding={"1rem"} 
        shadow={
          "0px 1px 1px rgb(100 116 139 / 6%), 0px 1px 2px rgb(100 116 139 / 10%)"
        }
        marginBottom={"1rem"}
      >
        <Heading as="h4" fontSize={"1rem"}>
          Latest Sales
        </Heading>
      </Box>
      <Chart/>
    </Box>
  );
}

export default LeftDashboard;
