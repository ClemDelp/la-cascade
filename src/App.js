import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Reservation from "./pages/reservation";
import Accueil from "./pages/accueil";
import './App.scss'

export default function BasicExample() {
  return (
    <Router>
      <div className='App'>
        <div className='App__header flex'>
          <Link to="/">Accueil</Link>
          <Link to="/reservation">Réservation</Link>
        </div>

        <hr />

        <Switch>
          <Route exact path="/">
            <Accueil />
          </Route>
          <Route path="/reservation">
            <Reservation />
          </Route>
        </Switch>
        
      </div>
    </Router>
  );
}
