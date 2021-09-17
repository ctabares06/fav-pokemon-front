import { Box, CardContent, Grid, Typography } from '@material-ui/core';
import Card from '../components/Card'; 
import React, { useEffect, useState } from 'react';
import { generations } from '../api/fetch';
import Layout from '../components/Layout';

export default function Home() {
  const [versions, setVersions] = useState([]);

  useEffect(() => {
    generations().then(setVersions);
  }, [])

  return (
    <Layout>
      <Grid container alignItems="stretch" spacing={3}>
        {
          versions.map(version => (
            <Grid item xs={12} sm={12} md={6} lg={3}>
              <Card>
                <CardContent>
                  <Box textAlign="center">
                    <Typography component="h6">{version.name}</Typography>
                    <Typography color="textSecondary">
                      { version.main_region.name }
                    </Typography>
                    <Typography component="h6">Games</Typography>
                    {
                      version.games.map(game => (
                        <Typography color="textSecondary">
                          { game.name }
                        </Typography>
                      ))
                    }
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))
        }
      </Grid>
    </Layout>
  )
}
