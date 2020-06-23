import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';

const COMITE = [
  {
    "status": "PRÉSIDENTE",
    "name": "Follonier Valérie",
    "phone": "+41 (0)79 416 24 10",
    "email": "Valtouse8573@gmail.com"
  },
  {
    "status": "Vice-présidente - Responsable réservations",
    "name": "Latini Magali",
    "phone": "+41(0)79 312 99 42",
    "email": "magalilatini@gmail.com"
  },
  {
    "status": "Trésorière",
    "name": "Hoffmeyer Danièle",
    "phone": "+41 (0)79 856 98 03",
    "email": "daniele.hoffmeyer@gmail.com" 
  },
  {
    "status": "Responsable Sports et loisirs",
    "name": "Muller Jacques",
    "phone": "+41 (0)79 935 01 11",
    "email": "jf.muller1@gmail.com"
  },
  {
    "status": "Secrétaire",
    "name": "Powell Jacqueline",
    "phone": "+41(0)76 383 45 94",
    "email": "jacq.powell@gmail.com"
  },
  {
    "status": "",
    "name": "Borner Alfred",
    "phone": "+41(0)79 449 57 16",
    "email": "freddy.borner@icloud.com"
  },
  {
    "status": "",
    "name": "Hoffmeyer Fabien",
    "phone": "+41 (0)78 791 89 23",
    "email": "befa1227@hotmail.com"
  },
  {
    "status": "",
    "name": "Hoffmeyer Georges",
    "phone": "+33 (0)78 988 61 43",
    "email": "georges.hoffmeyer@me.com"
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
                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {c.email} | {c.phone} 
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
