import React, { useContext, useState } from "react";
import { createContext } from "react";
const CountContext = createContext();
const IncrementContext = createContext();
const DecrementContext = createContext();

export function useCount() {
  return useContext(CountContext);
}

export function useIncrement() {
  return useContext(IncrementContext);
}

export function useDecrement() {
  return useContext(DecrementContext);
}

export function CountProvider({ children }) {
  // initialising the state for count
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <CountContext.Provider value={count}>
      <DecrementContext.Provider value={decrementCount}>
        <IncrementContext.Provider value={incrementCount}>
          {children}
        </IncrementContext.Provider>
      </DecrementContext.Provider>
    </CountContext.Provider>
  );
}
