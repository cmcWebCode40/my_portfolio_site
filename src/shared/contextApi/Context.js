import React, { useState, createContext } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [opened, setIsOpened] = useState(true);

  return (
    <div>
      <Context.Provider value={[opened, setIsOpened]}>
        {children}
      </Context.Provider>
    </div>
  );
};

export default ContextProvider;
