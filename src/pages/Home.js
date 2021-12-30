import { CardContent, Grid, Typography } from '@material-ui/core';
import Card from '../components/Card';
import React, { useEffect, useState } from 'react';
import { generations } from '../api/fetch';
import Layout from '../components/Layout';
import Link from '../components/Link';

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
              <Link to={`generation/${version.name}`}>
                <Card>
                  <CardContent>
                    <Typography variant="h5" align="center">{version.name}</Typography>
                    <Typography color="secondary" variant="h6" align="center">
                      {version.main_region.name}
                    </Typography>
                    <Typography align="justify">
                      <Typography variant="h6" display="inline" align="left">Games: </Typography>
                      <Typography variant="span" align="right" display="inline" color="secondary">
                        {
                          version.games.map(({ name }) => name).join(', ')
                        }
                      </Typography>
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))
        }
      </Grid>
    </Layout>
  )
}
