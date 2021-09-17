import { Card, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    padding: '1rem 2rem',
    width: '100%',
    height: '100%',
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