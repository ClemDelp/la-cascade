import React from 'react';
import { background } from '../styles/Particules.scss'
import Particles from 'particlesjs'

// COMPONENT
export class Particules extends React.Component {
  constructor (props) {
    super(props)
  }
  componentDidMount () {
    Particles.init({
      selector: '.background',
      color: '#ffffff'
    })
  }
  render () {
    return (
      <div className={background}>
        <canvas
          className='background'
        />
      </div>
    )
  }
}

export default Particules
