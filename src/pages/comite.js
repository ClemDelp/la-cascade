import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';

const COMITE = [
  {
    "status": "PRÉSIDENT",
    "name": "Georges Hoffmeyer"
  },
  {
    "status": "VICE PRÉSIDENT",
    "name": "Armand Bastide"
  },
  {
    "status": "RESPONSABLE DE CABANE",
    "name": "Freddy Borner"
  },
  {
    "status": "TRÉSORIÈRE",
    "name": "Danièle Hoffmeyer"
  },
  {
    "status": "SECRÉTAIRE",
    "name": "Jacqueline Powell"
  },
  {
    "status": "SECRÉTAIRE RÉSERVATION",
    "name": "Magali Latini"
  },
  {
    "status": "RESPONSABLE SPORTS ET LOISIRS",
    "name": "Jacques Muller"
  },
  {
    "status": "MEMBRE ADJOINT",
    "name": "Jean-Daniel Vez"
  }
]

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Comite() {
  const classes = useStyles();
  return (
    <div>
      <h1>Le comité 2019 / 2020</h1>
      <div className='flex flex-wrap justify-center items-center'>
        {
          COMITE && COMITE.map((c, i) => {
            return (
              <Card key={i} className={`${classes.root} m2`}>
                <CardContent>
                  <PersonIcon color="primary" />
                  <Typography variant="h5" component="h2">
                    {c.status}
                  </Typography>
                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {c.name}
                  </Typography>
                </CardContent>
              </Card>
            )
          })
        }
        </div>
    </div>
  );
}
