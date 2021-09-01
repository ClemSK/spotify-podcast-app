import React, { useEffect, useState } from 'react'
import axios from 'axios'
import EpisodeCard from './EpisodeCard'

const podcastEndpoint =
  'https://api.spotify.com/v1/shows/4Jgtgr4mHXNDyLldHkfEMz/episodes'

// import PodcastCard from './PodcastCard'

let episodesEndpoint = () => { // this isn't working at the moment, but use the endpoint and sample showID and you can see results once taken out of the function
  // define show id
  // add id to the endpoint
  // return endpoint with id as a variable
  // use this function in the rest of the code
  // sample showID: 4Jgtgr4mHXNDyLldHkfEMz
  let showId = 
  return `https://api.spotify.com/v1/shows/${id}/episodes`
  
}

const GetEpisodes = () => {
  const [token, setToken] = useState('')
  const [data, setData] = useState({})

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      setToken(localStorage.getItem('accessToken'))
    }
  }, [])

  const handleGetEpisodes = () => {
    axios
      .get(podcastEndpoint, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then((response) => {
        setData(response.data)
      })
      .catch((err) => {
        console.error('there was an error fetching episodes', err)
      })
  }

  return (
    <>
      <button onClick={handleGetEpisodes}>Get Episodes</button>
      {data?.items
<<<<<<< HEAD:src/components/GetEpisodes.js
        ? data.items.map((item) => <EpisodesCard key={item.name} {...item} />)
=======
        ? data.items.map((item) => <EpisodeCard key={item.name} {...item} />)
>>>>>>> 7241f7c72df1b375acd4c6856bb4b2b11d5d257f:src/components/Episodes.js
        : null}
    </>
  )
}

export default GetEpisodes
