import React, { useContext } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { AppContext } from '../contexts/AppContext';
import Home from './Home';
import Login from './Login';

const AuthRoute = (props) => {
  const { isLogged } = useContext(AppContext);
  const history = useHistory();

  if (!isLogged) {
    history.push('/login');
  }

  return <Route {...props} />
}

function App() {
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
