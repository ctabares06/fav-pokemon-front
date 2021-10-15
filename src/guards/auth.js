import { useContext } from 'react';
import { useHistory, Route } from 'react-router-dom';
import { AppContext } from '../contexts/AppContext';

export const AuthRoute = (props) => {
  const { isLogged } = useContext(AppContext);
  const history = useHistory();

  if (!isLogged) {
    history.push('/login');
    return null;
  }

  return <Route {...props} />
}