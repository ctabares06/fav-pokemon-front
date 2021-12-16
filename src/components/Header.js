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
  }
})

const HeaderComponent = () => {

  const { user } = useContext(AppContext);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="secondary" position="static" variant="elevation">
        <Toolbar display="flex" justifyContent="space-between">
          <Typography className={classes.title} component="h5">My Pokemon Favs</Typography>
          <Button>
            <Link to={`user/${user.id}`}>
              User info
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default HeaderComponent;