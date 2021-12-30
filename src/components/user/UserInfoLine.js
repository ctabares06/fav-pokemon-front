import { Typography } from '@material-ui/core';
import React from 'react';

const UserInfoLine = ({ label, value }) => (
  <Typography align="justify">
    <Typography variant="button" display="inline" align="left">{label}</Typography>
    <Typography variant="button" align="right" display="inline" color="secondary">
      {value}
    </Typography>
  </Typography>
)

export default UserInfoLine;