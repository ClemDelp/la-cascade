import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Disponibility from "./pages/disponibility";
import Accueil from "./pages/accueil";
import Galerie from "./pages/galerie";
import Comite from "./pages/comite";
import Club from "./pages/club";
import './App.scss'
import Header from "./components/header";
import Footer from "./components/footer";

export default function BasicExample() {
  return (
    <Router>
      <div className='App'>
        <div className='fixed' style={{width: '100%'}}>
          <Header />
        </div>

        <div className='flex pt4'>
          <Switch>
            <Route exact path="/"><Accueil /></Route>
            <Route path="/galerie"><Galerie /></Route>
            <Route path="/comite"><Comite /></Route>
            <Route path="/club"><Club /></Route>
            <Route path="/disponibility"><Disponibility /></Route>
          </Switch>
        </div>

        <Footer />

      </div>
    </Router>
  );
}
