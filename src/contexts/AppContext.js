import React, { createContext, useState } from 'react';

const initialValue = {
  isLogged: false,
  setIsLogged: () => {},
  user: {
    firstname: '',
    lastname: '',
    email: '',
  },
  setUser: () => {},
}

export const AppContext = createContext(initialValue);

const AppProvider = ({ children }) => {

  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(initialValue.user);

  const state = {
    isLogged,
    setIsLogged,
    user,
    setUser,
  }

  return (
    <AppContext.Provider value={state}>
      {children}
    </AppContext.Provider>
  )
};

export default AppProvider;
