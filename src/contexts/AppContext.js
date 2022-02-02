import React, { createContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const initialValue = {
  isLogged: false,
  isLoading: false,
  setIsLogged: () => { },
  updateState: () => { },
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
  const [isLogged, setIsLogged] = useState(initialValue.isLogged);
  const [isLoading, setIsLoading] = useState(initialValue.isLoading);
  const [user, setUser] = useState(initialValue.user);

  const updateState = (funcToUpdateState) => {
    setIsLoading(true);
    return funcToUpdateState
      .then(() => {
        setIsLoading(false);
      })
  }

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
    isLoading,
    updateState,
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
