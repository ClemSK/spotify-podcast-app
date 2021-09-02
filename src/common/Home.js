import React from 'react'
import Login from '../auth/Login'
import '../styles/Home.css'

const Home = () => {
  return (
    <section className="hero is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container">
          <Login />
        </div>
      </div>
    </section>
  )
}

export default Home
