import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            La Cascade
          </Typography>
          <Button color="inherit">
            <Link className='App__header--link' to="/">Accueil</Link>
          </Button>
          <Button color="inherit">
            <Link className='App__header--link' to="/galerie">Galerie</Link>
          </Button>
          <Button color="inherit">
            <Link className='App__header--link' to="/reservation">Réservation</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
