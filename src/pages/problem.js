import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export default function Problem() {
  return (
    <div className='full-width'>
      <div className='flex flex-column justify-center items-center'>
        <h1>En cas de problème</h1>

        <h2>CHAUFFAGE</h2>
        <hr className='full-width' />
        <p>Tél. à l'entreprise Pichol</p>
        <p>+33 450 78 32 41</p>
        <p>ou</p>
        <p>Georges Hoffmeyer</p>
        <p>+33 450 94 44 68</p>

        <h2>GAZ</h2>
        <hr className='full-width' />
        <p>Allez à une station d'essence avec les bonbonnes vide</p>

        <h2>ELÉCTRICITÉ</h2>
        <hr className='full-width' />
        <p>Georges Hoffmeyer</p>
        <p>+33 450 94 44 68</p>

        <h2>EAUX</h2>
        <hr className='full-width' />
        <p>Mairie de Saint Gervais</p>
        <p>+33 450 78 27 69</p>

        <h2>AUTRES</h2>
        <hr className='full-width' />
        <p>Pompier : 18</p>
        <p>Ambulance : 17</p>
      </div>
    </div>
  );
}
