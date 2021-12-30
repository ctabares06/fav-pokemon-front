import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext'
import Layout from '../components/Layout';
import Card from '../components/Card';
import { Typography } from '@material-ui/core';
import UserInfoLine from '../components/user/UserInfoLine';

const User = () => {
  const { user } = useContext(AppContext);
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
    </Layout>
  )
}

export default User;