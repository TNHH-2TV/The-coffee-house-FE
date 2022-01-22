import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route , Link, Navigate} from "react-router-dom";
import { Box, ChakraProvider } from "@chakra-ui/react"
import Home from "./pages/Home";
import theme from "./theme";
import SideBar from "./components/sidebar";
import Overview from "./pages/Overview";
import LoginPage from "./pages/Login";
function App() {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const Token = localStorage.getItem("log-in");
    if(Token) {
      setLogin(true);
    }
  }, [])
  return (
    <Router>
      <ChakraProvider theme={theme}>
        <Box className="App" background={"#f9fafc"}>
          {login ? (
            <Box display={"flex"} width={"100%"} boxSizing="border-box">
              <Box className="left" width={"13%"} height={"100vh"} shadow={"rgb(113 122 131 / 11%) 0px 7px 30px 0px"} bg={'rgb(17, 24, 39)'}>
                <SideBar/>
              </Box>

              <Box className="right" width={"87%"} boxSizing="border-box">
                <Routes>
                  <Route path="/" element={<Home />}/>
                  <Route path="/overview" element={<Overview/>}></Route>
                  {/* HỎI CÁI PAGE HOME VÀ OVERVIEW LÀ SỬ DỤNG LẠI 1 trang NHƯNG CHỈ render component chứ không tải lại trang mới RA?*/}
                </Routes>
              </Box>
            </Box>
          ) : (
            <LoginPage/> 
          )}
        </Box>
      </ChakraProvider>
    </Router>
  );
}

export default App;
