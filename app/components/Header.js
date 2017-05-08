import React from 'react'
import { Link } from 'react-router'
import { header } from '../styles/header.scss'

const Header = () => {
  return (
    <header className={header}>
      <Link to="/">Help</Link>
      <Link to="/">About</Link>
    </header>
  )
}

export default Header
