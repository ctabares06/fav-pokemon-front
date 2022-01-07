import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Grid,
} from '@material-ui/core';
import { getGeneration } from '../api/fetch';
import Layout from '../components/Layout';
import PokemonCard from '../components/pokemon/Card';
import { AppContext } from '../contexts/AppContext';

export default function Generation() {
  const { id } = useParams();
  const { user: { FavoritePokemons } } = useContext(AppContext)
  const pokemonIds = FavoritePokemons.reduce((acc, pokemon) => {
    acc.push(pokemon.id);
    return acc;
  }, []);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getGeneration(id)
      .then(setPokemons)
      .catch(() => null);
  }, [id])

  return (
    <Layout>
      <Grid container alignItems="stretch" spacing={3}>
        {pokemons.map((pokemon, index) => {
          let isFavorite = false;
          for (let i = 0; i < pokemonIds.length; i++) {
            if (pokemon.id === pokemonIds[i]) {
              isFavorite = true;
              break;
            }
          }
          return (
            <Grid key={index} item xs={12} sm={12} md={6} lg={3}>
              <PokemonCard {...pokemon} isFavorite={isFavorite} key={index} />
            </Grid>
          )
        })}
      </Grid>
    </Layout>
  )
}; 