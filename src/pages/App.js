import React, { useContext, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { AppContext } from '../contexts/AppContext';
import Home from './Home';
import Login from './Login';

function App() {
  const { isLogged } = useContext(AppContext);
  const history = useHistory();

  useEffect(() => {
    if (isLogged) {
      history.push('/');
    } else {
      history.push('/login');
    }
  }, [isLogged]);

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
    </Switch>
  );
}

export default App;
