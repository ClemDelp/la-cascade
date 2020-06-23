import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default function Trafic() {
  return (
    <div className='full-width'>
      <div className='flex flex-column justify-center items-center'>
        <h1>Tarif 2017</h1>
        <h2>MEMBRE ACTIF CASCADE</h2>
        <hr className='full-width' />
        <p>Jusqu'à 9 ans révolus 0.- € (Gratuit)</p>
        <p>De 10 à 17 ans 6.- €</p>
        <p>Dès 18 ans révolus 12.- €</p>

        <h2>MEMBRE PASSIF CASCADE</h2>
        <hr className='full-width' />
        <p>Carte de membre passif valable 1 année</p>
        <p>Jusqu'à 9 ans révolus 0.- € (Gratuit)</p>
        <p>De 10 à 17 ans 10.- €</p>
        <p>Dès 18 ans révolus 20.- €</p>

        <h2>DIRECTIVE</h2>
        <hr className='full-width' />
        <p>Au moins un membre actif doit être présent lors de séjour au chalet</p>
      </div>
    </div>
  );
}
