import React from "react";
import { Box } from "@chakra-ui/react";
import LeftDashboard from "./LeftDashboard";
import RightDashboard from "./RightDashboard";
function Dashboard(props) {
  return (
    <Box
      className="dashboard"
      display={"flex"}
      justifyContent={"space-between"}
      height={"60vh"}
    >
      <LeftDashboard />
      <RightDashboard/>
    </Box>
  );
}

export default Dashboard;
