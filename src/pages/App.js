import React, { useContext, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { AppContext } from '../contexts/AppContext';
import Home from './Home';
import Login from './Login';
import { checkSession } from '../api/fetch';

const AuthRoute = (props) => {
  const { isLogged } = useContext(AppContext);
  const history = useHistory();

  if (!isLogged) {
    history.push('/login');
    return null;
  }

  return <Route {...props} />
}

function App() {
  const { setIsLogged } = useContext(AppContext);

  useEffect(() => {
    checkSession()
      .then(() => setIsLogged(true))
      .catch(console.error);
  }, [])

  return (
    <>
    <CssBaseline />
    <Switch>
      <AuthRoute exact path="/" component={Home} />
      <Route path="/login" component={Login} />
    </Switch>
    </>
  );
}

export default App;
