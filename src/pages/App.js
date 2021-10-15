import React, { useContext, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { AppContext } from '../contexts/AppContext';
import { AuthRoute } from '../guards/auth';
import Home from './Home';
import Login from './Login';
import Generation from './Generation';
import { checkSession } from '../api/fetch';

function App() {
  const { setIsLogged } = useContext(AppContext);

  useEffect(() => {
    checkSession()
      .then(() => setIsLogged(true))
      .catch(() => setIsLogged(false));
  }, [])

  return (
    <>
    <CssBaseline />
    <Switch>
      <AuthRoute exact path="/" component={Home} />
      <AuthRoute path="/generation/:id" component={Generation} />
      <Route path="/login" component={Login} />
    </Switch>
    </>
  );
}

export default App;
