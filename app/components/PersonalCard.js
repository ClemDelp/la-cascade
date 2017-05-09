import React from 'react';
import { personalCard, circle, logo, name } from '../styles/PersonalCard.scss'
import classnames from 'classnames'

const PersonalCard = () => {
  return (
    <div className={personalCard}>
      <img className={
        classnames(circle, logo)
      } src='app/images/clemDelp.jpg' />
      <div className={name}>ClemDelp</div>
      <p>Frontend engineer @snips</p>
      <div>
        <button>GITHUB</button>
        <button>ARTICLES</button>
      </div>

    </div>
  )
}

export default PersonalCard
