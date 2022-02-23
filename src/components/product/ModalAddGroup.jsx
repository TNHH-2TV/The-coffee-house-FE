import React, { useEffect, useState } from "react";
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
  useToast,
  Text,
  Heading,
  Divider,
} from "@chakra-ui/react";
import { IoIosTrash } from "react-icons/io";
import { addGroup, getAllGroup, deleteGroup } from "../../api";
function ModalAddGroup({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [group, setGroup] = useState([]);
  const toast = useToast();
 
  useEffect(() => {
    const getGroup = async () => {
      const data = await getAllGroup();
      setGroup(data);
    };
    getGroup();
  }, []);

  const handleSubmit = async () => {
    if (name === "") {
      return toast({
        title: "Name is required field",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
    }
    const { Success } = await addGroup(name);

    if (!Success) {
      toast({
        title: "Something went wrong, please try again",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
    const new_data = await getAllGroup();
    setGroup(new_data);
    setName("");

    return toast({
      title: "Add group successfully",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure to delete this");
    if (confirm === true) {
      const data = await deleteGroup(id);

      if (data.success) {
        const new_data = await getAllGroup();
        setGroup(new_data);

        return toast({
          title: "Delete group successfully",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      }
      return toast({
        title: "Something went wrong, please try again",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add new group</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl marginBottom={"0.5rem"}>
            <FormLabel htmlFor="name" textTransform="capitalize">
              Name group
            </FormLabel>
            <Box display={"flex"} justifyContent="center" alignItems={"center"}>
              <Input
                autoComplete="off"
                placeholder="input name group"
                id="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                marginRight={"1rem"}
              />
              <Button onClick={() => handleSubmit()}>Add</Button>
            </Box>
          </FormControl>
          <Divider marginBottom={"1rem"} />
          <Heading as="h6" fontSize={"1rem"} marginBottom="1rem">
            LIST GROUP
          </Heading>
          {/* list group */}
          {group &&
            group.map((value, index) => {
              return (
                <Box
                  key={index}
                  display={"flex"}
                  alignItems="content"
                  justifyContent={"space-between"}
                  padding="0.5rem"
                  borderRadius={"8px"}
                  marginBottom="0.2rem"
                  background={"#ddd8d840"}
                  cursor={"pointer"}
                >
                  <Text textTransform={"capitalize"}>{value.name}</Text>
                  <IoIosTrash onClick={() => handleDelete(value.id)} />
                </Box>
              );
            })}
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ModalAddGroup;
