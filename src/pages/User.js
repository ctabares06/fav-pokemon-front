import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext'
import Layout from '../components/Layout';
import Card from '../components/Card';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import UserInfoLine from '../components/user/UserInfoLine';
import PokemonCard from '../components/pokemon/Card';

const useStyles = makeStyles({
  pokemonGrid: {
    paddingTop: "20px",
  }
})

const User = () => {
  const { user } = useContext(AppContext);
  const styles = useStyles();
  return (
    <Layout>
      <Card>
        <Typography variant='h2' display='block' align='center' color='secondary'>
          USER INFO
        </Typography>
        <UserInfoLine label="FirstName: " value={user.firstName} />
        <UserInfoLine label="LastName: " value={user.lastname} />
        <UserInfoLine label="Email: " value={user.email} />
      </Card>
      <Typography variant='h2' display='block' align='center' color='secondary'>
        FAVORITE POKEMONS
      </Typography>
      <Grid className={styles.pokemonGrid} container alignItems="stretch" spacing={3}>
        {user.FavoritePokemons.map((pokemon, index) => {
          return (
            <Grid key={index} item xs={12} sm={12} md={6} lg={3}>
              <PokemonCard {...pokemon} />
            </Grid>
          )
        })}
      </Grid>
    </Layout>
  )
}

export default User;