import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Grid,
} from '@material-ui/core';
import { getGeneration } from '../api/fetch';
import Layout from '../components/Layout';
import PokemonCard from '../components/pokemon/Card';
import { AppContext } from '../contexts/AppContext';
import { addFavorite, removeFavorite } from '../api/fetch';

export default function Generation() {
  const { id } = useParams();
  const { user, setUser, updateState } = useContext(AppContext)
  const pokemonIds = user.FavoritePokemons.reduce((acc, pokemon) => {
    acc.push(pokemon.id);
    return acc;
  }, []);
  const [pokemons, setPokemons] = useState([]);

  const handleFavorite = (method, user_id, pokemon_id) => {
    updateState(method(user_id, pokemon_id)
      .then(favorites => {
        setUser(user => ({
          ...user, FavoritePokemons: favorites,
        }))
      })
      .catch(() => null));
  }

  useEffect(() => {
    updateState(getGeneration(id)
      .then(setPokemons)
      .catch(() => null));
  }, [id])

  return (
    <Layout>
      <Grid container alignItems="stretch" spacing={3}>
        {pokemons.map((pokemon, index) => {
          let isFavorite = false;
          let method = addFavorite;
          for (let i = 0; i < pokemonIds.length; i++) {
            if (pokemon.id === pokemonIds[i]) {
              isFavorite = true;
              method = removeFavorite;
              break;
            }
          }
          return (
            <Grid key={index} item xs={12} sm={12} md={6} lg={3}>
              <PokemonCard {...pokemon} isFavorite={isFavorite} handleFavorite={() => handleFavorite(method, user.id, pokemon.id)} key={index} />
            </Grid>
          )
        })}
      </Grid>
    </Layout>
  )
}; 