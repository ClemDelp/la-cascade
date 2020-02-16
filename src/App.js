import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Reservation from "./pages/reservation";
import Accueil from "./pages/accueil";
import Galerie from "./pages/galerie";
import './App.scss'
import Header from "./components/header";

export default function BasicExample() {
  return (
    <Router>
      <div className='App relative'>
        <div className='absolute' style={{zIndex: '10', width: '100%'}}>
          <Header />
        </div>
        
        <Switch>
          <Route exact path="/"><Accueil /></Route>
          {/* we need this pt4 to take in consideration header height */}
          <div className='pt4'>
            <Route path="/galerie"><Galerie /></Route>
            <Route path="/reservation"><Reservation /></Route>
          </div>
        </Switch>
      </div>
    </Router>
  );
}
