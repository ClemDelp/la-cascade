import React from "react";
import chalet from '../images/chalet.jpeg';

export default function Accueil() {
  return (
    <div>
      <div>
        <img
          src={chalet}
          alt="logo"
          style={{width: '100%'}}
        />
      </div>
    </div>
  );
}
