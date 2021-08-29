import axios from 'axios'
import { getAccessToken } from './Auth'
// import { getToken } from './auth'

// should we use this?
// const baseUrl = 'https://api.spotify.com'

// Priority
// Get a list of the current user’s saved shows:
// GET 'https://api.spotify.com/v1/me/shows'

const showsUrl = 'https://api.spotify.com/v1/me/shows'

export const getAllUserShows = () => {
  // accessing the users data with token
  const requestUserData = {
    headers: { Authorization: `Bearer ${getAccessToken()}` },
  }
  // getting the show url
  return axios.get(`${showsUrl}`, requestUserData)
}

// Secondary
// List episodes for a show:
// GET 'https://api.spotify.com/v1/shows/{id}/episodes'

// Secondary
// Get information about an episode:
// GET 'https://api.spotify.com/v1/episodes/{id}'

// old code

// we are putting podcasts on the home page
// export const getPodcasts = () => {
//   return axios.get(`${baseUrl}/home`)
// }
