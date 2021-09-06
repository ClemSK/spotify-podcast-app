import React from 'react'
import Login from '../auth/Login'
import '../styles/Home.css'

const Home = () => {
  return (
    <section className="hero is-fullheight-with-navbar landing">
      <div className="hero-body">
        <div className="container front-element">
          <Login />
        </div>
        <figure className="back-element">
          <img
            src="https://www.popsci.com/uploads/2020/04/01/4UJ4ZBHTOBHN7NT5YEAMQLHRSU.jpg?width=1440"
            alt="shouting-into-microphone"
          />
        </figure>
      </div>
    </section>
  )
}

export default Home
