import React from 'react';
import { CircularProgress, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  fixed: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  }
})

const Loader = () => {

  const styles = useStyles();

  return (
    <div className={styles.fixed}>
      <CircularProgress color='secondary' />
    </div>
  )
}

export default Loader;
