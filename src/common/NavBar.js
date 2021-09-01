import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/NavBar.css'

const NavBar = () => {
  return (
    <nav>
      <div>
        <div className="is-navbar">
          <Link to="/" className="navbar-item home">
            Home
          </Link>
          <Link to="/podcast" className="navbar-item podcasts">
            Podcasts
          </Link>
          <Link to="/episodes" className="navbar-item has-background-success">
            Episodes
          </Link>
          <div className="search-bar-container navbar-item">
            <div className="fa fa-search"></div>
            <input
              type="text"
              placeholder="Search for a podcast"
              className="search-bar"
            />
            <div className="fa fa-times"></div>
          </div>
          <Link to="/podcast" className="navbar-item login-logout">
            {/* insert ternary to change logout to login depending on local token */}
            Logout
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
