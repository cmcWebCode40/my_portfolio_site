import React, { createContext, useState } from 'react';

export const authContextApi = createContext({});

const UserAuthProvider = ({ children }) => {
  const [isUserAuth, setIsUserAuth] = useState(false);

  return (
    <authContextApi.Provider
      value={{
        isUserAuth,
        setIsUserAuth
      }}
    >
      {children}
    </authContextApi.Provider>
  );
};

export default UserAuthProvider;
