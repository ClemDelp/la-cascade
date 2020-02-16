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

      <div className='App'>
        <Header />
        <Switch>
          <Route exact path="/"><Accueil /></Route>
          <Route path="/galerie"><Galerie /></Route>
          <Route path="/reservation"><Reservation /></Route>
        </Switch>

      </div>
    </Router>
  );
}
