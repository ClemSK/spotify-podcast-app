import axios from 'axios'
// import { getToken } from './auth'

const baseUrl = 'https://api.spotify.com'

// we are putting podcasts on the home page
export const getPodcasts = () => {
  return axios.get(`${baseUrl}/home`)
}

export const loginUser = () => {
    return (
        
    )
}