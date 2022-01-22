import React, { useState } from 'react';
import { Box,  Input, Button  } from "@chakra-ui/react";
import { FormControl, FormLabel, FormErrorMessage, form, Text} from "@chakra-ui/react";
import { Login } from "../api";

function LoginPage(props) {
    const [info, setInfo] = useState()
    return (
        <Box backgroundImage={`https://preview.colorlib.com/theme/bootstrap/login-form-20/images/xbg.jpg.pagespeed.ic.tiVxeakBSd.webp`} 
            width={"100%"} 
            height={"100vh"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            color={"white"}
        >
            <Box w={"30%"} margin={"auto"}>
                <Text textTransform={"uppercase"} fontSize={"2xl"} textAlign={"center"} fontFamily={"Lato"} marginBottom={"2rem"}>Login admin</Text>
                <Box width="80%" margin="auto">
                    <FormControl marginBottom={`1.5rem`}>
                        <FormLabel htmlFor='username'>Username</FormLabel>
                        <Input bg="rgba(255, 255, 255, .08)" borderRadius={"40px"} _placeholder={{color: "#fff"}} type={"text"} name="username" placeholder={"Input your name"}/>
                    </FormControl>
                    <FormControl marginBottom={`1.5rem`}>
                        <FormLabel htmlFor='password'>Password</FormLabel>
                        <Input bg="rgba(255, 255, 255, .08)" borderRadius={"40px"} _placeholder={{color: "#fff"}}  type={"password"} name="password" placeholder={"Input your name"}/>
                    </FormControl>
                    <Button bg={"#fbceb5"} border={"1px solid #fbceb5"} color={"#000"} textTransform={"uppercase"} width={"100%"} borderRadius={"40px"} fontWeight={"200"} textTransform={"uppercase"}>Sign in</Button>
                    <Box width={"100%"} marginTop={"2rem"}>
                        <Text textAlign={"right"}>Forgot password</Text>
                    </Box>
                </Box>
            </Box>

        </Box>
    )
}

export default LoginPage;