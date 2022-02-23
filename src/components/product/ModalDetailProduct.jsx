import React from "react";
import {
  Box,
  Image,
  Text,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  Divider,
} from "@chakra-ui/react";

function ModalDetailProduct(props) {
  const { name, attachment, cost, price, description } = props.product;

  const isOpen = props.isOpen;
  const onClose = props.onClose;

  return (
    <Modal isOpen={isOpen} onClose={onClose} >
      <ModalOverlay>
        <ModalContent maxHeight="70vh" overflowY="scroll" padding={"1rem"}>
          <ModalHeader>Detail Product</ModalHeader>
          <Divider />
          <ModalBody>
            <Box display={"flex"} justifyContent="space-between">
              <Box
                className="left"
                display={"flex"}
                justifyContent={"center"}
                marginBottom={"1rem"}
                width="40%"
              >
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent="center"
                  height={"100%"}
                  width={"100%"}
                >
                  <Image width={"90%"} src={attachment} />
                </Box>
              </Box>
              <Box className="right" width={"50%"} marginTop={"0.5 rem"}>
                <Text
                  fontWeight={"bold"}
                  textTransform={"capitalize"}
                  marginBottom={"1rem"}
                >
                  {name}
                </Text>
                <Text fontWeight={"bold"}>Cost: {cost}</Text>
                <Text fontStyle={"italic"}>Price: {price}</Text>
                <Text color="gray" fontStyle={"italic"}>
                  Description: {description}
                </Text>
              </Box>
            </Box>
          </ModalBody>
          <Divider/>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
}

export default ModalDetailProduct;
