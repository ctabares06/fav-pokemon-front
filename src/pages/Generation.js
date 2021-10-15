import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getGeneration } from '../api/fetch';

export default function Generation () {
  const { id } = useParams();
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getGeneration(id)
      .then(setPokemons)
      .catch(() => null);
  }, [id])

  return (
    <>
      { pokemons.map((pokemon) => {
        return (<p>{pokemon.name}</p>)
      }) }
    </>
  )
}; 