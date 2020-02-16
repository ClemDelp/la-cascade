import React from "react";
import chalet from '../images/chalet.jpeg';
import './accueil.scss'
import ContactForm from '../components/contact'
import { PHONE_CONTACT } from "../config";

export default function Accueil() {
  return (
    <div className='accueil'>
      <div className='absolute'>
        <img
          src={chalet}
          alt="logo"
          style={{width: '100%'}}
        />
      </div>
      <div className='flex items-center justify-center relative full-height'>
        <div className='accueil__main-info flex items-center justify-center'>
          <div className='col-4 p2'>
            <h1>La Cascade</h1>
            <p className='mb2'>L'histoire du chalet ???? ..... Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset </p>
            <div>
              <span className='bold'>Contact:</span>{PHONE_CONTACT}
            </div>
            
          </div>

          <div className='col-4 p2'>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
