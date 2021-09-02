import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/NavBar.css'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import SearchResults from '../lib/SearchResults'

const NavBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [data, setData] = useState({})
  const token = localStorage.getItem('accessToken')
  const history = useHistory()

  useEffect(() => {
    // call search results
    SearchResults({data})
  }, [data])

  const handleSearch = () => {
    const string = searchTerm.split(' ').join('%20')
    console.log(string)

    axios
      .get(
        `https://api.spotify.com/v1/search?q=${searchTerm}&type=show&market=US&limit=10&offset=5`,
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        }
      )
      .then((response) => {
        setData(response.data)
      })
      .catch((err) => {
        console.error('there was an error fetching podcasts', err)
      })
      history.push('/results')
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
          <Link
            to="/episodes" // modified to reflect the ID of the podcast and expose it onClick
            className="navbar-item has-background-success"
          >
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
          <Link to="/logout" className="navbar-item login-logout">
            {/* insert ternary to change logout to login depending on local token */}
            Logout
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
