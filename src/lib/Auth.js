// Variables used to serve up the loginUrl to the Spotify API

const spotifyAuthEndpoint = 'https://accounts.spotify.com/authorize' // Auth endpoint
const redirectUri = 'http://localhost:3000/' // redirect url after user is logged in
const clientID = 'e74be6c70b214c6a89ffc0bb76ddd005' // our client ID
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

      return initial
    }, {})
}
