import React, { useContext, createContext, useState, useEffect } from "react";

//init value
const initialValue = {
  accessToken: "",
  isLogin: true,
  handleSetLogin: () => {},
  handleSetAccessToken: () => {},
  handleLogOut: () => {},
};

//init context

const authContext = createContext(initialValue);

export const AuthContextProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const check_login = localStorage.getItem("isLogin");

    if (check_login === null) {
      //chưa từng vào trang, thì setItem là false
      localStorage.setItem("isLogin", false);
    } else {
      setIsLogin(check_login);//bên page login sau khi login thì lưu localstorage là true (trả về từ server)
    }
  }, [isLogin]);

  const handleSetLogin = () => {
    localStorage.setItem("isLogin", true);
    setIsLogin(true);
  };

  const handleSetAccessToken = (token) => {
    localStorage.setItem("accessToken", token);
    setAccessToken(token);
  };

  const handleLogOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.setItem("isLogin", false);
  };

  const value = {
    accessToken,
    isLogin,
    handleSetAccessToken,
    handleSetLogin,
    handleLogOut,
  };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};
//return using context
export const useAuth = () => {
  const context = useContext(authContext);

  if (!context) {
    return new Error("Context is not active");
  }
  return context;
};
