import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import { Box, ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import SideBar from "./components/sidebar";
import Overview from "./pages/Overview";
import LoginPage from "./pages/Login";
import { AuthContextProvider, useAuth } from "./hook/useLogin";
import Product from "./pages/Product";
import TestUpload from "./pages/testUpload";
import Customer from "./pages/Customer";
import { CustomerProvider } from "./hook/useCustomer";
function App() {
  const { isLogin } = useAuth();
  // console.log(isLogin);
  return (
    <Router>
      <AuthContextProvider>
        <ChakraProvider theme={theme}>
          <CustomerProvider>
            <Box className="App" background={"#f9fafc"}>
              {isLogin ? (
                <Box display={"flex"} width={"100%"} boxSizing="border-box">
                  <Box
                    className="left"
                    width={"13%"}
                    height={"100vh"}
                    shadow={"rgb(113 122 131 / 11%) 0px 7px 30px 0px"}
                    bg={"rgb(17, 24, 39)"}
                  >
                    <SideBar />
                  </Box>

                  <Box className="right" width={"87%"} boxSizing="border-box">
                    <Routes>
                      <Route path="/" element={<Navigate to="/overview" />} />
                      <Route path="/overview" element={<Overview />}></Route>
                      <Route path="/product" element={<Product />}></Route>
                      <Route
                        path="/test-upload"
                        element={<TestUpload />}
                      ></Route>
                      <Route path="/customer" element={<Customer />}></Route>
                    </Routes>
                  </Box>
                </Box>
              ) : (
                <LoginPage />
              )}
            </Box>
          </CustomerProvider>
        </ChakraProvider>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
