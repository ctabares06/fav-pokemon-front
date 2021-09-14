import { Card, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    padding: '1rem 2rem',
    width: '300px',
  }
})

const CardComponent = ({ children }) => {
  const styles = useStyles();
  return (
    <Card className={styles.card}>
      { children }
    </Card>
  )
}

export default CardComponent;