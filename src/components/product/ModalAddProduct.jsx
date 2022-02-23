import React, { useState } from "react";
import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Button,
  Input,
} from "@chakra-ui/react";
import info_product from "./infoProduct";
function ModalAddProduct({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add new product</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {info_product.map((value) => {
            return (
              <FormControl marginBottom={"0.5rem"} key={value.id}>
                <FormLabel htmlFor={value.name} textTransform="capitalize">
                  {value.name}
                </FormLabel>
                <Input
                  autoComplete="off"
                  placeholder={value.placeholder}
                  id={value.name}
                />
              </FormControl>
            );
          })}
          <Box>
            <Input
              type="file"
              name="image"
              border="navajowhite"
              outline="none"
              marginTop={"0.5rem"}
              _active={{ border: "none", outline: "none", boxShadow: "none" }}
              _focus={{ shadow: "none" }}
            />
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ModalAddProduct;
