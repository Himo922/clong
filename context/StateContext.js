import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [easedScrollY, setEasedScrollY] = useState(0);
  const [currentSection, setCurrentSection] = useState(null);

  return (
    <Context.Provider
      value={{
        showCart,
        easedScrollY,
        setEasedScrollY,
        currentSection,
        setCurrentSection,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
