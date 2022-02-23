import React from 'react';
import { Box } from "@chakra-ui/react";
import HeaderCustomer from '../components/customer/HeaderCustomer';
import ContentCustomer from '../components/customer/ContentCustomer';
function Customer(props) {
    return (
        <Box width={"90%"} margin={"auto"}>
            <HeaderCustomer/>
            <ContentCustomer/>
        </Box>
    );
}

export default Customer;