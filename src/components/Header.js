import { AppBar, Button, Toolbar, Typography, makeStyles } from '@material-ui/core';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../contexts/AppContext';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
})

const HeaderComponent = () => {

  const { user } = useContext(AppContext);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="primary" position="static" variant="elevation">
        <Toolbar display="flex" justifyContent="space-between">
          <Typography className={classes.title} variant='h5'>
            <Button color='secondary' component={Link} to="/">
              My Pokemon Favs
            </Button>
          </Typography>
          <Button color='secondary' variant="contained" component={Link} to={`/user/${user.id}`}>
            User info
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default HeaderComponent;