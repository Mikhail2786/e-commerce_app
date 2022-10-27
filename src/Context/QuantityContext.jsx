import React, { useState, createContext, useContext } from "react";

const QuantityContext = createContext();

export const QuantityProvider = ({ children }) => {
  // initialising the state for quantity count
  const [quantity, setQuantity] = useState(0);
  // initialising the state for itemCcount
  const [itemQuantity, setItemQuantity] = useState(0);

  return (
    <QuantityContext.Provider
      value={{ quantity, setQuantity, itemQuantity, setItemQuantity }}
    >
      {children}
    </QuantityContext.Provider>
  );
};

export const UseQuantityContext = () => useContext(QuantityContext);
