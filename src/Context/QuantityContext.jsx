import React, { useState, createContext, useContext } from "react";

const QuantityContext = createContext();

export const QuantityProvider = ({ children }) => {
  // initialising the state for count
  const [quantity, setQuantity] = useState(0);
  return (
    <QuantityContext.Provider value={{ quantity, setQuantity }}>
      {children}
    </QuantityContext.Provider>
  );
};

export const UseQuantityContext = () => useContext(QuantityContext);
