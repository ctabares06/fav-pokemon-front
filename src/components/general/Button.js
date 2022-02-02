import { Button } from '@material-ui/core';
import React from 'react';

const CustomButton = ({ handleClick, text, isActive, ...rest }) => {
  const color = isActive ? 'primary' : 'secondary';
  return (
    <Button {...rest} size='small' variant='contained' color={color} onClick={handleClick}>{text}</Button>
  )
}

export default CustomButton;