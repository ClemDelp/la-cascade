import React from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";

import Disponibility from "./pages/disponibility";
import Accueil from "./pages/accueil";
import Galerie from "./pages/galerie";
import Comite from "./pages/comite";
import Chalet from "./pages/chalet";
import Problem from "./pages/problem";
import Tarif from "./pages/tarif";

import './App.scss'
import Header from "./components/header";
import Footer from "./components/footer";


function useQuery () {
  return new URLSearchParams(useLocation().search);
}

function App() {
  const query = useQuery();
  const page = query.get("page")
  return (
    <div className='App'>
      <div className='fixed' style={{width: '100%'}}>
        <Header />
      </div>

      <div className='flex pt4'>
          { (page === '' || page === null) && <Accueil /> }
          { page === 'galerie' && <Galerie /> }
          { page === 'comite' && <Comite /> }
          { page === 'disponibility' && <Disponibility /> }
          { page === 'chalet' && <Chalet /> }
          { page === 'problemes' && <Problem /> }
          { page === 'tarifs' && <Tarif /> }
      </div>

      <Footer />

    </div>
  )
}
export default function BasicExample() {
  return (
    <Router>
      <App />
    </Router>
  );
}
