import React from 'react'
import { Link } from 'react-router'
import { footer } from '../styles/footer.scss'

const Footer = () => {
  return (
    <footer className={footer}>
      <Link to="/">Filterable Table</Link>
      <Link to="/about">About</Link>
    </footer>
  )
}

export default Footer
