import React, { useState, createContext, useEffect, useContext } from "react";
import { getAllCustomer } from "../api";

export const CustomerContext = createContext();

export function CustomerProvider({children}) {
  const [customer, setCustomer] = useState();

  const getCustomer = async () => {
    const data = await getAllCustomer();
    setCustomer(data);
  };

  useEffect(() => {
    getCustomer();
  }, []);

  const updateCustomer = () => {
      getCustomer();
  };

  const value = {
    customer,
    updateCustomer
  };

  return (
    <CustomerContext.Provider value={value}>
      {children}
    </CustomerContext.Provider>
  );
}

export const useCustomer = () => {
    const context = useContext(CustomerContext)
    if(!context) {
        throw new Error("Content customer is not active");
    }
    return context;
}