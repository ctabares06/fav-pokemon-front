import { Button, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  addButton: {
    width: '100%',
  },
})

const CustomButton = ({ handleClick, text, isActive }) => {
  const classes = useStyles();
  const color = isActive ? 'primary' : 'secondary';
  return (
    <Button className={classes.addButton} size='small' variant='contained' color={color} onClick={handleClick}>{text}</Button>
  )
}

export default CustomButton;