import React from 'react';
import { Box, Text, Image } from "@chakra-ui/react";
import { List_SideBar } from "../../constant/sidebar"
import { Link } from "react-router-dom";

function ListSideBar(props) {
    return (
        <Box width={"80%"} margin={"auto"} color={"text.white"} fontWeight={'bold'} margin={'10%'}>
            <Box marginBottom={'1rem'} textAlign={'center'}>
                <Link to="/"><Image src="https://theme.hstatic.net/1000075078/1000803849/14/favicon.png?v=999" alt="" margin={'auto'}/></Link>

            </Box>
            {
                List_SideBar.map((value, index) => {
                    return (
                        <Link to={value.link}>
                            <Box key={index} display = {'flex'} alignItems = {'center'} padding={'0.5rem 1rem'} margin={'0.5rem 0'} cursor={'pointer'} _hover={{bg: 'gray'}} borderRadius={'10px'}>
                                <value.icon />
                                <Text marginLeft={'0.5rem'} fontSize={'l'} >{value.text}</Text>
                            </Box>
                        </Link>
                    )
                })
            }
        </Box>
    );
}

export default ListSideBar;