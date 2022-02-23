import React from "react";
import { Box } from "@chakra-ui/react";
import HeaderProduct from "../components/product/HeaderProduct";
import ContentProduct from "../components/product/ContentProduct";
function Product(props) {
  return (
    <Box width={'90%'} margin="auto">
      <HeaderProduct />
      <ContentProduct/>
    </Box>
  );
}

export default Product;
