import React, { createContext, useReducer, useState } from 'react';

const initialValue = {
  isLogged: false,
  setIsLogged: () => {},
}

export const AppContext = createContext(initialValue);

const AppProvider = ({ children }) => {

  const [isLogged, setIsLogged] = useState(false);

  const state = {
    isLogged,
    setIsLogged,
  }

  return (
    <AppContext.Provider value={state}>
      {children}
    </AppContext.Provider>
  )
};

export default AppProvider;
