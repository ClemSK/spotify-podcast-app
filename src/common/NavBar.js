import React, {  useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/NavBar.css'
import { useHistory } from 'react-router-dom'


const NavBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const history = useHistory()

  const handleSearch = () => {
    history.push(`/results/${searchTerm}`)
  }

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
          <div className="search-bar-container">
            <div className="fa fa-search  navbar-item" id="search-bar"></div>
            <input
              type="text"
              placeholder="Search for a podcast"
              className="search-bar"
              spellcheck="false"
              onChange={(event) => {
                setSearchTerm(event.target.value)
              }}
            />
            <button className="button is-info" onClick={handleSearch}>
              Search
            </button>
            <div className="fa fa-times navbar-item"></div>
          </div>
          <a href="http://github.io" className="navbar-item login-logout">
            {/* insert ternary to change logout to login depending on local token */}
            GitHub Files
          </a>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
