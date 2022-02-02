import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext'
import Layout from '../components/Layout';
import Card from '../components/Card';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import UserInfoLine from '../components/user/UserInfoLine';
import PokemonCard from '../components/pokemon/Card';
import { removeFavorite } from '../api/fetch';

const useStyles = makeStyles({
  pokemonGrid: {
    paddingTop: "20px",
  }
})

const User = () => {
  const { user, setUser, updateState } = useContext(AppContext);
  const styles = useStyles();

  const handleRemoveFavorite = (user_id, pokemon_id) => {
    updateState(removeFavorite(user_id, pokemon_id)
      .then(favorites => {
        setUser(user => ({
          ...user, FavoritePokemons: favorites,
        }))
      })
      .catch(() => null));
  }

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
              <PokemonCard {...pokemon} isFavorite={true} handleFavorite={() => handleRemoveFavorite(user.id, pokemon.id)} />
            </Grid>
          )
        })}
      </Grid>
    </Layout>
  )
}

export default User;