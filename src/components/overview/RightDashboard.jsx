import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import ChartRight from "./ChartRight";
function RightDashboard(props) {
  return (
    <Box w={"35%"}>
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
          Costs
        </Heading>
      </Box>
      <ChartRight />
    </Box>
  );
}

export default RightDashboard;
