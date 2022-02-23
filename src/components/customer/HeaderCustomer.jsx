import React from "react";
import {
  Box,
  Text,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useDisclosure,
} from "@chakra-ui/react";
import ModalAddCustomer from "./ModalAddCustomer";
function HeaderCustomer(props) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      marginTop={"2rem"}
    >
      <Box>
        <Text as={"h2"} textTransform={"uppercase"} fontWeight={"bold"}>
          Customer
        </Text>
      </Box>
      <Box>
        <Button margin="0 0.5rem" onClick={onOpen}>
          Add customer
        </Button>
      </Box>
      <ModalAddCustomer isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}

export default HeaderCustomer;
