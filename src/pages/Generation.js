import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
  Card, 
  CardMedia, 
  CardContent, 
  Chip,
  Typography,
  Grid, 
  makeStyles, 
  Box
} from '@material-ui/core';
import { getGeneration } from '../api/fetch';
import Layout from '../components/Layout';

const useStyles = makeStyles({
  image: {
    height: '150px',
    backgroundSize: 'contain',
  },
  chip: {
    marginLeft: "5px",
  }
})

export default function Generation () {
  const classes = useStyles(); 
  const { id } = useParams();
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getGeneration(id)
      .then(setPokemons)
      .catch(() => null);
  }, [id])

  return (
    <Layout>
      <Grid container alignItems="strech" spacing={3}>
        { pokemons.map((pokemon) => {
          return (
            <Grid item xs={12} sm={12} md={6} lg={3}>
              <Card>
                <CardMedia className={classes.image} image={pokemon.sprite} title={pokemon.name} />
                <CardContent>
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography component="span">{pokemon.name}</Typography>
                    <div>
                      {
                        pokemon.types.map((type) => (
                          <Chip className={classes.chip} label={type} variant="outlined" />
                        ))
                      }
                    </div>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          )
        }) }
      </Grid>
    </Layout>
  )
}; 