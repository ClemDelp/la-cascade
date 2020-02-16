import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';

const DATA = [
  {
    "title": "CAPACITÉ DU CHALET",
    "icon": <PersonIcon color="primary" />, 
    "content": <ul>
      <li>15 personnes pour les nuits</li>
      <li>50 personnes au réfectoire</li>
    </ul>
  },
  {
    "title": "CUISINE",
    "icon": <PersonIcon color="primary" />,
    "content": <ul>
      <li>3 cuisinières à gaz</li>
      <li>2 frigos</li>
      <li>Garde manger</li>
    </ul>
  },
  {
    "title": "AU SOUS SOL",
    "icon": <PersonIcon color="primary" />,
    "content": <ul>
      <li>4 WC</li>
      <li>Douches femme et homme</li>
    </ul>
  },
  {
    "title": "CABANE À SKIS",
    "icon": <PersonIcon color="primary" />,
    "content": ""
  },
  {
    "title": "LOCAL DE RÉUNION",
    "icon": <PersonIcon color="primary" />,
    "content": ""
  },
  {
    "title": "CAVE",
    "icon": <PersonIcon color="primary" />,
    "content": ""
  },
  {
    "title": "CHAUFFERIE",
    "icon": <PersonIcon color="primary" />,
    "content": ""
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

export default function Chalet() {
  const classes = useStyles();
  return (
    <div>
      <h1>Le chalet</h1>
      <div className='flex flex-wrap justify-center items-center'>
        {
          DATA && DATA.map((d, i) => {
            const {title, icon, content} = d
            return (
              <Card key={i} className={`${classes.root} m2`} style={{height: '180px'}}>
                <CardContent>
                  {icon}
                  <Typography variant="h5" component="h2">
                    {title}
                  </Typography>
                  {content}
                </CardContent>
              </Card>
            )
          })
        }
        </div>
    </div>
  );
}
