import React from "react";
import { Overview } from "../../constant/overview";
import { Box, Text } from "@chakra-ui/react";

function HeaderOverview(props) {
  return (
    <Box display={"flex"} justifyContent={"space-between"}>
      {Overview.map((value, index) => {
        return (
          <Box
            key={index}
            className={"card"}
            w="22%"
            m="1rem 0"
            bg={"white"}
            padding={"2rem"}
            boxShadow={
              "0px 1px 1px rgb(100 116 139 / 6%), 0px 1px 2px rgb(100 116 139 / 10%)"
            }
            borderRadius={"8px"}
          >
            <Box
              className="top"
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"} 
            >
              <Box className="left">
                <Text>{value.flag}</Text>
                <Text fontWeight={"bold"}>{value.turnover}</Text>
              </Box>
              <Box className="right">
                <value.icon fontSize={"2.5rem"} color={`${value.color}`} />
              </Box>
            </Box>
            <Box className="bottom">22%</Box>
          </Box>
        );
      })}
    </Box>
  );
}

export default HeaderOverview;
