import React, { useEffect, useState } from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Image,
  useToast,
  Text,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { IoIosTrash, IoMdBrush, IoIosEye, IoIosBrush } from "react-icons/io";
import { getAllCustomer, deleteCustomer } from "../../api";
import Swal from "sweetalert2";
import { useCustomer } from "../../hook/useCustomer";

function ContentCustomer(props) {
  const toast = useToast();
  const { customer, updateCustomer } = useCustomer();

  // console.log(customer);
  const handleDeleteCustomer = async (id) => {
    Swal.fire({
      title: "Are you sure to delete this?",
      icon: "question",
      showCloseButton: true,
    }).then(async ({ isConfirmed }) => {
      if (isConfirmed) {
        const data = await deleteCustomer(id);

        if (data.success) {
          updateCustomer();

          toast({
            title: "Delete customer successfully",
            duration: 2000,
            isClosable: true,
            status: "success",
          });
        } else {
          Swal.fire({
            title: "Something went wrong, pls try again",
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <Box
      marginTop={"1.5rem"}
      bg="white"
      padding="1rem"
      borderRadius={"8px"}
      shadow={
        "0px 1px 1px rgb(100 116 139 / 6%), 0px 1px 2px rgb(100 116 139 / 10%)"
      }
      height={"80vh"}
      overflowY={"scroll"}
    >
      {customer && customer.length > 0 ? (
        <Table>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Phone</Th>
              <Th>Email</Th>
              <Th>Address</Th>
              <Th>Point</Th>
              <Th>Update</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {customer &&
              customer.map((value, index) => {
                return (
                  <Tr key={index}>
                    <Td>{value.name}</Td>
                    <Td>{value.phone}</Td>
                    <Td>{value.email}</Td>
                    <Td>{value.address}</Td>
                    <Td>{value.point}</Td>
                    <Td cursor={"pointer"}>
                      <IoIosBrush />
                    </Td>
                    <Td cursor={"pointer"}>
                      <IoIosTrash
                        onClick={() => {
                          handleDeleteCustomer(value.id);
                        }}
                      />
                    </Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      ) : (
        <Box
          height={"100%"}
          display="flex"
          alignItems={"center"}
          justifyContent="center"
        >
          <Text color={"gray"} fontSize="2rem" fontWeight={"bold"}>
            No customer list
          </Text>
        </Box>
      )}
    </Box>
  );
}

export default ContentCustomer;
