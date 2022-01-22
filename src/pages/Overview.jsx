import React from 'react';
import { Box } from "@chakra-ui/react";
import HeaderOverview from '../components/overview/HeaderOverview';
function Overview(props) {
    return (
        <Box width={'90%'} margin="auto">
            <HeaderOverview/>
        </Box>
    );
}

export default Overview;