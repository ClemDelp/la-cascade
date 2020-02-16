import React, { PropTypes } from 'react'
import classnames from 'classnames'
require('../styles/Default.scss')

import {
  Aligner,
  AlignerItem,
  AlignerItemTop,
  AlignerItemBottom
} from '../styles/App.scss'

import Footer from './Footer'
import Header from './Header'

const App = ({ children }) => {
  return (
    <div style={{
      height: '100vh'
    }}>
      <div className={Aligner}>
        <div className={classnames(AlignerItem, AlignerItemTop)}>
          <Header />
        </div>
        <div className={AlignerItem}>
          {
            children
          }
        </div>
        <div className={classnames(AlignerItem, AlignerItemBottom)}>
          <Footer />
        </div>
      </div>
    </div>
  )
}

App.propTypes = {
    children: PropTypes.object
};

export default App;
