import React from "react";
import chalet from '../images/chalet.png';
import './accueil.scss'
import ContactForm from '../components/contact'
import Button from '@material-ui/core/Button'

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
          <p className='mb2'>L'histoire du chalet ???? ..... Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset </p>
          <div className='flex'>
            <div className='mr1'>
              <Button variant="outlined" color="primary" href='/comite'>
                Le comité
              </Button>
            </div>
            
            <Button variant="outlined" color="primary"  href='/club'>
              Le club
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
