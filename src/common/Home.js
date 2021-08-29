import React, { useEffect } from 'react'
import Login from '../auth/Login'
import { getAccessToken } from '../lib/Auth'

const Home = () => {
  const [state, setState] = React.useState(null)

  // This is monitoring the URL so when it changes when we land back on the page we can take the access token
  useEffect(() => {
    const urlToken = getAccessToken()
    window.location.hash= "" // removes the access token from the URL
    console.log(`We now have an access token pulled form the url:`, urlToken)

    const token = urlToken.access_token
    // console.log(`The bare token is:`, token)
    if (token) {
      setState(token)
    }


  },[])

  return (
    <section>
      { state ? 
        (
          <h1>you are logged in!</h1>
        ) : (
          <Login />
        )
      }
    </section>
  )
}

export default Home
