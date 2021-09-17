import { Container, makeStyles } from "@material-ui/core"
import HeaderComponent from "./Header"

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(2)
  }
}))

const Layout = ({ children }) => {
  const styles = useStyles();
  return (
    <>
    <HeaderComponent />
    <Container className={styles.root} fixed>
      {children}
    </Container>
    </>
  )
}

export default Layout;