import React from 'react';
import { Overview} from "../../constant/overview";
import { Box, Text } from "@chakra-ui/react";
function HeaderOverview(props) {
    return (
        <Box display={'flex'} justifyContent={"space-between"}>
            {Overview.map((value, index) => {
                return (
                    <Box key={index} className={'card'} w="23%" m="1rem">
                        <Box className='top'>
                            <Box className='left'>
                                <Text>{value.flag}</Text>
                                <Text>{value.turnover}</Text>
                            </Box>
                            <Box className='right'>
                                <value.icon/>
                            </Box>
                        </Box>
                        <Box className='bottom'>

                        </Box>
                    </Box>
                )
            })
            }
        </Box>
    );
}

export default HeaderOverview;