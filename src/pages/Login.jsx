import React, { useState } from "react";
import { Box, Input, Button } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  form,
  Text,
} from "@chakra-ui/react";
import { Login } from "../api";

function LoginPage(props) {
  const [info, setInfo] = useState();

  const handleChangeInput = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const handleLogin = async () => {
    const data = await Login(info.phone, info.password);

    localStorage.setItem("accessToken", data.accessToken);
    localStorage.setItem("isLogin", data.login);
  };
  return (
    <Box
      backgroundImage={`https://preview.colorlib.com/theme/bootstrap/login-form-20/images/xbg.jpg.pagespeed.ic.tiVxeakBSd.webp`}
      width={"100%"}
      height={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      color={"white"}
    >
      <Box w={"30%"} margin={"auto"}>
        <Text
          textTransform={"uppercase"}
          fontSize={"2xl"}
          textAlign={"center"}
          fontFamily={"Lato"}
          marginBottom={"2rem"}
        >
          Login admin
        </Text>
        <Box width="80%" margin="auto">
          <FormControl marginBottom={`1.5rem`}>
            <FormLabel htmlFor="phone">Phone</FormLabel>
            <Input
              bg="rgba(255, 255, 255, .08)"
              borderRadius={"40px"}
              _placeholder={{ color: "#fff" }}
              type={"text"}
              name="phone"
              placeholder={"Input your phone"}
              onChange={handleChangeInput}
            />
          </FormControl>
          <FormControl marginBottom={`1.5rem`}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              bg="rgba(255, 255, 255, .08)"
              borderRadius={"40px"}
              _placeholder={{ color: "#fff" }}
              type={"password"}
              name="password"
              placeholder={"Input your name"}
              onChange={handleChangeInput}
            />
          </FormControl>
          <Button
            bg={"#fbceb5"}
            border={"1px solid #fbceb5"}
            color={"#000"}
            textTransform={"uppercase"}
            width={"100%"}
            borderRadius={"40px"}
            fontWeight={"200"}
            textTransform={"uppercase"}
            onClick={handleLogin}
          >
            Sign in
          </Button>
          <Box width={"100%"} marginTop={"2rem"}>
            <Text textAlign={"right"}>Forgot password</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default LoginPage;
