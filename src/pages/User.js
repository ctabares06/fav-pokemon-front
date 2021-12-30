import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext'
import Layout from '../components/Layout';
import Card from '../components/Card';
import { Typography } from '@material-ui/core';

const User = () => {
  const { user } = useContext(AppContext);
  return (
    <Layout>
      <Card>
        <Typography variant='h2' display='block' align='center' color='secondary'>
          USER INFO
        </Typography>
        <Typography align="justify">
          <Typography variant="button" display="inline" align="left">firstname: </Typography>
          <Typography variant="button" align="right" display="inline" color="secondary">
            {user.firstName}
          </Typography>
        </Typography>
        <Typography align="justify">
          <Typography variant="button" display="inline" align="left">lastname: </Typography>
          <Typography variant="button" align="right" display="inline" color="secondary">
            {user.lastname}
          </Typography>
        </Typography>
        <Typography align="justify">
          <Typography variant="button" display="inline" align="left">email: </Typography>
          <Typography variant="button" align="right" display="inline" color="secondary">
            {user.email}
          </Typography>
        </Typography>
      </Card>
    </Layout>
  )
}

export default User;