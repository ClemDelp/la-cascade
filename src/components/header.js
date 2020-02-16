import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from "react-router-dom";
import { PREFIX_LINK } from "../config";

const LINKS = [
  {
    "link": PREFIX_LINK + "",
    "name": "Accueil"
  },
  {
    "link": PREFIX_LINK + "?page=galerie",
    "name": "Galerie"
  },
  {
    "link": PREFIX_LINK + "?page=disponibility",
    "name": "Disponibilités"
  },
  {
    "link": PREFIX_LINK + "?page=comite",
    "name": "Comité"
  }
]

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
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link className='App__header--link' to={PREFIX_LINK}>La Cascade</Link>
          </Typography>
          {
            LINKS && LINKS.map((l, i) => {
              return (
                <Button key={i} color="inherit">
                  <Link className='App__header--link' to={l.link}>{l.name}</Link>
                </Button>
              )
            })
          }
          <Button color="inherit" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            Information
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {
              [
                {'link': PREFIX_LINK + '?page=chalet', "name": "Le chalet"},
                {'link': PREFIX_LINK + '?page=tarifs', "name": "Les tarifs"},
                {'link': PREFIX_LINK + '?page=problemes', "name": "En cas de problème"}
              ].map((l, i) => {
                return (
                  <Link key={i} className='App__header--link' to={l.link}>
                    <MenuItem onClick={handleClose}>
                      {l.name}
                    </MenuItem>
                  </Link>
                )
              })
            }
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}
