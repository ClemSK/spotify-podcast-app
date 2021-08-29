import React, { useEffect } from 'react'
import Login from '../auth/Login'
import { getAccessToken } from '../lib/Auth'

const Home = () => {
  const [state, setState] = React.useState(null)

  // This is monitoring the URL so when it changes we land back on the page and can take the access token
  useEffect(() => {
    const urlToken = getAccessToken()
    window.location.hash= "" // removes the access token from the URL
    console.log(`We now have an access token pulled from the url:`, urlToken)

    const token = urlToken.access_token
    // console.log(`The barer token is:`, token)
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

// maybe have a setInterval function to 
// redirect to podcast page after 3s? 

export default Home
