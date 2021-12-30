import React, { useContext, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { AppContext } from '../contexts/AppContext';
import { AuthRoute } from '../guards/auth';
import Home from './Home';
import Login from './Login';
import Generation from './Generation';
import { checkSession } from '../api/fetch';
import User from './User';
import theme from '../helpers/theme';

function App() {
  const { setIsLogged, setUser } = useContext(AppContext);

  useEffect(() => {
    checkSession()
      .then((user) => {
        setIsLogged(true)
        setUser(user)
      })
      .catch(() => setIsLogged(false));
  }, [setIsLogged, setUser])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Switch>
        <AuthRoute exact path="/" component={Home} />
        <AuthRoute path="/generation/:id" component={Generation} />
        <AuthRoute path="/user/:id" component={User} />
        <Route path="/login" component={Login} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
