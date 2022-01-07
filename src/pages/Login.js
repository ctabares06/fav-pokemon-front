import React, { useContext, useState } from 'react'
import {
  Container,
  Box,
  Card,
  FormControl,
  InputLabel,
  Input,
  FormGroup,
  Button,
  CardMedia
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import logo from '../static/pokemon-logo.png';
import { AppContext } from '../contexts/AppContext';
import { login } from '../api/fetch';

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
  },
  card: {
    padding: '1rem 2rem',
  },
  media: {
    width: '100%',
    height: '70px',
    backgroundSize: 'contain',
  }
}));

export default function Login() {
  const { setIsLogged, setUser } = useContext(AppContext);
  const styles = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = ({ target: { value } }) => setEmail(value);
  const handlePassword = ({ target: { value } }) => setPassword(value);
  const handleSubmit = (event) => {
    event.preventDefault();
    login(email, password)
      .then(user => {
        setUser(user);
        setIsLogged(true);
      })
      .catch(console.error);
  }

  return (
    <div>
      <Container fixed>
        <Box className={styles.root} display="flex" justifyContent="center" alignItems="center">
          <Card className={styles.card} variant="elevation" elevation="3">
            <CardMedia className={styles.media} image={logo} />
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <FormControl margin="normal">
                  <InputLabel htmlFor="email">Email</InputLabel>
                  <Input id="email" onChange={handleEmail} value={email} aria-describedby="insert-you-email" />
                </FormControl>
                <FormControl margin="normal">
                  <InputLabel htmlFor="email">Password</InputLabel>
                  <Input type="password" id="email" onChange={handlePassword} value={password} aria-describedby="insert-you-email" />
                </FormControl>
                <FormControl margin="normal">
                  <Button type="submit" variant="contained" color="primary">Submit</Button>
                </FormControl>
              </FormGroup>
            </form>
          </Card>
        </Box>
      </Container>
    </div>
  )
};
