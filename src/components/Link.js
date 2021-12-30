import react from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
    color: 'inherit'
  }
})

const CustomLink = (props) => {
  const styles = useStyles();

  return <Link className={styles.link} {...props}></Link>
}

export default CustomLink;
