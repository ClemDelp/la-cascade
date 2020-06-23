import React from "react";
import chalet from '../images/chalet.png';
import './accueil.scss'
import ContactForm from '../components/contact'
import Button from '@material-ui/core/Button'
import { Link } from "react-router-dom";
import GetAppIcon from '@material-ui/icons/GetApp';

export default function Accueil() {
  return (
    <div className='accueil mb3'>
      <img
        src={chalet}
        alt="logo"
        style={{width: '100%'}}
      />
      <div className='p2'>
        <div className='px4 col col-6'>
          <h1>La Cascade</h1>
          <hr />
          <p className='mb2'>Affilié au SATUS, <a href='http://www.satus-geneve.ch' target='_blank'>www.satus-geneve.ch</a>, La Cascade est un club familial qui offre à ses membres des activités en montagne et un chalet situé à La Cry, au-dessus de St Gervais-les-Bains.</p>
          <p className='mb2'>Dès sa création, le club fonctionne grâce au bénévolat de ses membres et témoigne d’une volonté de permettre à tous de profiter de la montagne.</p>
          <p className='mb2'>Le chalet, construit par les membres fondateurs dans les années 1940, est entretenu par ses membres lors de journées de travail en commun.</p>
          <div className='flex'>
            <div className='mr1'>
              <Button variant="outlined" color="primary">
                <Link className='App__header--link' to="/comite">Le comité</Link>
              </Button>
            </div>
            <Button
              variant="outlined"
              color="primary"
              startIcon={<GetAppIcon />}
            >
              Les status du club
            </Button>
          </div>
        </div>
        <div className='px4 col col-6'>
          <h1>Contactez-nous</h1>
          <hr />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
