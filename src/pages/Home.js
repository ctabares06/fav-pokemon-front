import { Box, CardContent, Container, Typography } from '@material-ui/core';
import Card from '../components/Card'; 
import React, { useEffect, useState } from 'react';
import { generations } from '../api/fetch';

export default function Home() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    generations().then(setGames);
  }, [])

  return (
    <Container fixed>
      <Box display="flex" flexWrap="wrap">
      { games.map(generation => (
        <Card>
          <CardContent>
            <Typography variant="h4" component="h4">
              { generation.name }
            </Typography>
          </CardContent>
        </Card>
      )) }
      </Box>
    </Container>
  )
}
