import React, { createContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const initialValue = {
  isLogged: false,
  setIsLogged: () => { },
  user: {
    firstName: '',
    lastname: '',
    email: '',
    id: null,
    FavoritePokemons: [],
  },
  setUser: () => { },
}

export const AppContext = createContext(initialValue);

const AppProvider = ({ children }) => {
  const history = useHistory();
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(initialValue.user);

  useEffect(() => {
    if (isLogged) {
      history.push('/')
    } else {
      history.push('/login')
    }
  }, [isLogged]);

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
