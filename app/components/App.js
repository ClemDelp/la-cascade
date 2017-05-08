import React, { PropTypes } from 'react';
import Footer from './Footer'
import Header from './Header'
import Particules from './Particules'

const App = ({ children }) => {
  return (
    <div>
      <Particules />
      <Header />
      { children }
      <Footer />
    </div>
  )
}

App.propTypes = {
    children: PropTypes.object
};

export default App;
