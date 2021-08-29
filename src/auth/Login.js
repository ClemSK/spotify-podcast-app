import React from 'react'
import { loginUrl } from '../lib/Auth'

const Login = () => {
  return (
    <section className="hero is-halfheight-with-navbar">
      <div className="hero-body">
        <div className="container">
          <a className="button is-success" href={loginUrl}>
            Login To Spotify
          </a>
        </div>
      </div>
    </section>
  )
}

export default Login
