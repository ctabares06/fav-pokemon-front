import { Box, Card, CardContent, CardMedia, CardActions, Chip, makeStyles, Typography } from '@material-ui/core';
import Star from '../general/Star';
import CustomButton from '../general/Button';
import React from 'react'

const useStyles = makeStyles({
  card: {
    position: 'relative',
  },
  image: {
    height: '150px',
    backgroundSize: 'contain',
  },
  chip: {
    marginLeft: "5px",
  },
  star: {
    position: "absolute",
    right: '5px',
    top: '5px',
    width: '25px',
  }
})

const PokemonCard = ({ sprite, name, types, isFavorite = false }) => {
  const classes = useStyles();
  const buttonText = isFavorite ? "Favorite" : 'Add to Favorite';

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.image} image={sprite} title={name} />
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          {
            isFavorite &&
            <div className={classes.star}>
              <Star />
            </div>
          }
          <Typography component="span">{name}</Typography>
          <div>
            {
              types.map((type) => (
                <Chip className={classes.chip} label={type} variant="outlined" />
              ))
            }
          </div>
        </Box>
      </CardContent>
      <CardActions>
        <CustomButton isActive={isFavorite} handleClick={() => { }} text={buttonText} />
      </CardActions>
    </Card>
  )
}

export default PokemonCard;