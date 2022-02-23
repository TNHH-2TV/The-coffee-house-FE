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
import ModalAddProduct from "./ModalAddProduct";
import ModalAddGroup from "./ModalAddGroup";
const list_button = ["Import", "Export"];

function HeaderProduct(props) {
  const {
    isOpen: isOpenProduct,
    onOpen: onOpenProduct,
    onClose: onCloseProduct,
  } = useDisclosure();

  const {
    isOpen: isOpenGroup,
    onOpen: onOpenGroup,
    onClose: onCloseGroup,
  } = useDisclosure();
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      marginTop={"2rem"}
    >
      <Box className="left">
        <Text as={"h2"} textTransform={"uppercase"} fontWeight={"bold"}>
          Product
        </Text>
      </Box>
      <Box className="right">
        {list_button.map((value, index) => {
          return (
            <Popover key={index}>
              <PopoverTrigger>
                <Button margin="0rem 0.5rem">{value}</Button>
              </PopoverTrigger>
              <PopoverContent w="100%" padding="0.3rem">
                Coming soon
              </PopoverContent>
            </Popover>
          );
        })}
        <Button margin="0 0.5rem" onClick={onOpenProduct}>
          Add product
        </Button>
        <Button margin="0 0.5rem" onClick={onOpenGroup}>
          Add group product
        </Button>
      </Box>
      <ModalAddProduct isOpen={isOpenProduct} onClose={onCloseProduct} />
      <ModalAddGroup isOpen={isOpenGroup} onClose={onCloseGroup} />
    </Box>
  );
}

export default HeaderProduct;
