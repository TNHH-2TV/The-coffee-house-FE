import React, { useState } from "react";
import {
  Box,
  Modal,
  ModalOverlay,
  ModalFooter,
  ModalHeader,
  ModalBody,
  ModalContent,
  FormControl,
  Button,
  FormLabel,
  ModalCloseButton, 
  Input, 
  useToast
} from "@chakra-ui/react";
import info_customer from "./InfoCustomer";
import { createCustomer } from "../../api";
import Swal from "sweetalert2";
import { useCustomer } from "../../hook/useCustomer"

function ModalAddCustomer({isOpen, onClose}) {
  const [info, setinfo] = useState({});
  const toast = useToast();
  const { updateCustomer } = useCustomer();

  const handleSubmit = async () => {
    if(!info.name || !info.address || !info.phone || !info.email) {
      return Swal.fire({
        title: "Please fill in full information", 
        icon: "warning", 
        showCloseButton: true,
      });
    }
    const data = await createCustomer(info.name, info.phone, info.address, info.email);

      if(data.success) {
        updateCustomer();
        onClose();
        toast({
          title: "Add customer successfully", 
          isClosable: true, 
          duration: 5000
        });
      }
  }

  return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add new customer</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {info_customer.map((value) => {
              return (
                <FormControl marginBottom={"0.5rem"} key={value.id}>
                  <FormLabel htmlFor={value.name} textTransform="capitalize">
                    {value.label}
                  </FormLabel>
                  <Input
                    autoComplete="off"
                    placeholder={value.placeholder}
                    id={value.name}
                    name={value.label}
                    value={info[value.label] ? `${info[value.label]}`: ""}
                    onChange={(e) => setinfo({...info, [e.target.name]: e.target.value})}
                  />
                </FormControl>
              );
            })}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
  );
}

export default ModalAddCustomer;
