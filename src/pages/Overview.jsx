import React from 'react';
import { Box } from "@chakra-ui/react";
import HeaderOverview from '../components/overview/HeaderOverview';
import Dashboard from '../components/overview/Dashboard';
function Overview(props) {
    return (
        <Box width={'90%'} margin="auto">
            <HeaderOverview/>
            <Dashboard/>
        </Box>
    );
}

export default Overview;