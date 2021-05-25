import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => (
  <nav className="main-nav">
    <Link to="/" className="main-nav__link">
      HOME
    </Link>
  </nav>
)

export default Navigation