import React, { useEffect } from 'react'

// Variables used to serve up the loginUrl to the Spotify API

const spotifyAuthEndpoint = 'https://accounts.spotify.com/authorize' // Auth endpoint
const redirectUri = 'http://localhost:3000/' // redirect url after user is logged in
const clientID = 'e74be6c70b214c6a89ffc0bb76ddd005' // our client ID
const spaceDelimiter = '%20'
const scopes = [
  // The functinoality we request from the Spotify API for the app. We can add further functionality by adding scopes from the spotify documentation
  'user-read-playback-state',
  'user-read-recently-played',
  'user-read-currently-playing',
  'user-top-read',
  'user-modify-playback-state',
  'user-follow-modify',
  'user-follow-read',
  'user-library-modify',
]

const scopesUrlParam = scopes.join(spaceDelimiter)

const getReturnedParamsFromSpotifyAuth = (hash) => {
  const stringAfterHashtag = hash.substring(1)
  const paramsInUrl = stringAfterHashtag.split('&')
  const paramsSplitUp = paramsInUrl.reduce((accumulater, currentValue) => {
    console.log(currentValue)
    const [key, value] = currentValue.split('=')
    accumulater[key] = value
    return accumulater
  }, {})

  return paramsSplitUp
}

const SpotifyAuth = () => {
  useEffect(() => {
    if (window.location.hash) {
      const { access_token, expires_in, token_type } =
        getReturnedParamsFromSpotifyAuth(window.location.hash)

      // localStorage.clear()

      localStorage.setItem('accessToken', access_token)
      localStorage.setItem('tokenType', token_type)
      localStorage.setItem('expiresIn', expires_in)
    }
  })

  const handleLogin = () => {
    window.location = `${spotifyAuthEndpoint}?client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopesUrlParam}&response_type=token&show_dialog=true`
  }

  return (
    <div className="container">
      <h1>hi</h1>
      <button onClick={handleLogin}>login to spotify</button>
    </div>
  )
}

export default SpotifyAuth

// Final url sent to Spotify API for login in required format from documentation
export const loginUrl = `${spotifyAuthEndpoint}?client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join(
  '%20'
)}&response_type=token&show_dialog=true`

// As the Spotify access token is different to the localstorage token and is required for functionality, pulling the ?
export const getAccessToken = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      let parts = item.split('=')
      initial[parts[0]] = decodeURIComponent(parts[1])
      console.log(initial)
      return initial
    }, {})
}

console.log('we are logging the getAccessToken function', getAccessToken()) // this returns the output of the function

// console.log('this is getAcessToken from Auth.js page: ', getAccessToken) - this only returns the text of the function

export const setToken = (token) => {
  window.localStorage.setItem('setting the token', token)
}

export const getToken = () => {
  return window.localStorage.getItem('getting the token')
}

export const bearerToken = () => {
  return getAccessToken().access_token
}
console.log('this is the bearer token', bearerToken())
