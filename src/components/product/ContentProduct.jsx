import React, { useState, useEffect } from "react";
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
  Button
} from "@chakra-ui/react";
import { getAllProduct, deleteProduct } from "../../api/index";
import { IoIosTrash, IoMdBrush, IoIosEye } from "react-icons/io";
import Swal from "sweetalert2";
import ModalDetailProduct from "./ModalDetailProduct";
function ContentProduct(props) {
  const [product, setProduct] = useState();
  const toast = useToast();

  const { onOpen, isOpen, onClose } = useDisclosure();
  const [active, setActive] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllProduct();

      setProduct(data);
    };
    fetchData();
  }, []);

  const handleSetActive = (state) => {
    setActive(state);
    onOpen();
  }

  const handleDeleteProduct = async (id) => {
    Swal.fire({
      title: "Are you sure to delete this?",
      icon: "question",
      showCloseButton: true,
    }).then(async ({ isConfirmed }) => {
      if (isConfirmed) {
        const data = await deleteProduct(id);

        if (data.success) {
          toast({
            title: "Delete product successuflly",
            duration: 5000,
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
      const data = await getAllProduct();

      setProduct(data);
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
      {product && product.length > 0 ? (
        <Table>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Image</Th>
              <Th>Cost</Th>
              <Th>Price</Th>
              <Th>Description</Th>
              <Th>Update</Th>
              <Th>Delete</Th>
              <Th>View</Th>
            </Tr>
          </Thead>
          <Tbody>
            {product &&
              product.map((value, index) => {
                return (
                  <Tr key={index}>
                    <Td>{value.name}</Td>
                    <Td w="20%">
                      <Image w="100%" src={value.attachment} />
                    </Td>
                    <Td>{value.cost}</Td>
                    <Td>{value.price}</Td>
                    <Td>{value.description.slice(0, 5) + "..."}</Td>
                    <Td cursor={"pointer"}>
                      <IoMdBrush />
                    </Td>
                    <Td cursor={"pointer"}>
                      <IoIosTrash
                        onClick={(id) => handleDeleteProduct(value.id)}
                      />
                    </Td>
                    <Td cursor={"pointer"}>
                      <IoIosEye onClick={() => {handleSetActive(index)}} />
                    </Td>
                    {
                      active === index && (
                        <ModalDetailProduct product={value} isOpen={isOpen} onClose={onClose} />
                      )
                    }
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
          <Text fontSize="2rem" fontWeight="bold" color="gray">
            No items
          </Text>
        </Box>
      )}
    </Box>
  );
}

export default ContentProduct;
