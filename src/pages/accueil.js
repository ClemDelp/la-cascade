import React from "react";

import chalet from '../images/chalet.png';
import cascade from '../images/cascade.png';
import mdVue from '../images/mb_vue.png';
import rando from '../images/rando.png';

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
        style={{
          width: '100%',
        }}
      />
      <div className='flex p2'>
        <div className='px4 col col-6'>
          <h1>La Cascade</h1>
          <hr />
          <p className='mb2'>Affilié au SATUS, <a href='http://www.satus-geneve.ch' target='_blank'>www.satus-geneve.ch</a>, La Cascade est un club familial qui offre à ses membres des activités en montagne et un chalet situé à La Cry, au-dessus de St Gervais-les-Bains.</p>
          <p className='mb2'>Dès sa création, le club fonctionne grâce au bénévolat de ses membres et témoigne d’une volonté de permettre à tous de profiter de la montagne.</p>
          <p className='mb2'>Le chalet, construit par les membres fondateurs dans les années 1940, est entretenu par ses membres lors de journées de travail en commun.</p>
          <div className='flex'>
            <div className='mr1'>
              <Button variant="outlined" color="primary">
                <Link className='App__header--link' to="/la-cascade?page=comite">Le comité</Link>
              </Button>
            </div>
            <Button
              variant="outlined"
              color="primary"
              startIcon={<GetAppIcon />}
            >
              <Link
                className='App__header--link'
                to="/la-cascade/pdf/CASCADE_STATUTS.pdf"
                target="_blank"
              >Les status du club</Link>
            </Button>
          </div>
        </div>
        <div className='px4 col col-6'>
          <h1>Contactez-nous</h1>
          <hr />
          <ContactForm />
        </div>
      </div>
      <div className='flex p2'>
        <div className='px4 col col-6'>
          <h1>Vue du Mont Blanc depuis le chalet</h1>
          <p className='mb2'>Le chalet jouit d’une situation exceptionnelle, face au Mont Blanc !</p>
          <p className='mb2'>Il invite à la découverte d’un domaine magnifique tant pour la randonnée estivale que pour le ski.</p>
          <p className='mb2'>Le site web de St Gervais www.saintgervais.com. donne un avant-goût des possibilités qu’offre cette région, tant pour le ski que pour les itinéraires à raquettes, les randonnées ou l’alpinisme.</p>
        </div>
        <div className='px4 col col-6'>
          <img
            src={mdVue}
            alt="logo"
            style={{width: '100%'}}
          />
        </div>
      </div>
      <div className='flex p2'>
        <div className='px4 col col-6'>
          <img
            src={rando}
            alt="logo"
            style={{width: '100%'}}
          />
        </div>
        <div className='px4 col col-6'>
          <h1>Le chalet en été, départ de randonnées</h1>
          <p className='mb2'>Le chalet en été, départ de randonnées</p>
          <p className='mb2'>Pour une présentation de ces activités : <a href="http://www.saintgervais.com/sport-et-montagne/randonnee-et-alpinisme" target='_blank'>www.saintgervais.com/sport-et-montagne/randonnee-et-alpinisme</a></p>
        </div>
      </div>
      <div className='flex p2'>
        <div className='px4 col col-6'>
          <h1>Le chalet en hiver, accès au domaine skiable</h1>
          <p className='mb2'>du Bettex, Saint-Gervais, Saint-Nicolas de Véroce, Megève - Rochebrune - Côte 2000 ...</p>
          <p className='mb2'>Pour une présentation de ces kilomètres de pistes: <a href="http://www.ski-saintgervais.com/fr/" target='_blank'>www.ski-saintgervais.com/fr/</a></p>
          <p className='mb2'>Une navette gratuite passe à côté du chalet et permet de rejoindre la station du Bettex https://www.ski-saintgervais.com/fr/h11-liens</p>
        </div>
        <div className='px4 col col-6'>
          <img
            src={cascade}
            alt="logo"
            style={{width: '100%'}}
          />
        </div>
      </div>
    </div>
  );
}
