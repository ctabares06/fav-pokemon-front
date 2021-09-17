import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';

const HeaderComponent = () => {
  return (
    <AppBar color="secondary" position="static" variant="elevation">
      <Toolbar>
        <Typography component="h5">My Pokemon Favs</Typography>
        <Button>User info</Button>
      </Toolbar>
    </AppBar>
  )
}

export default HeaderComponent;