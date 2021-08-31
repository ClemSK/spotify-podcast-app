import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <div>
        <div className="is-navbar">
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <Link to="/podcast" className="navbar-item">
            Podcasts
          </Link>
          <Link to="/podcast" className="navbar-item">
            Episodes
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
