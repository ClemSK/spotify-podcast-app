import React, { useEffect, useState } from 'react'
import axios from 'axios'

// The thing to work out here is how to pass the podcast IDs to the episodes endpoint
// so that is can fetch the episodes for each show
// I've exposed the ID in the PodcastCard to show it in the url when clicking on a podcast

// import PodcastCard from './PodcastCard'

const episodesEndpoint = 'https://api.spotify.com/v1/shows/{id}/episodes'

const GetPodcast = () => {
  const [token, setToken] = useState('')
  const [data, setData] = useState({})

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      setToken(localStorage.getItem('accessToken'))
    }
  }, [])

  const handleGetEpisodes = () => {
    axios
      .get(episodesEndpoint, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then((response) => {
        setData(response.data)
      })
      .catch((err) => {
        console.error('there was an error fetching podcast episodes', err)
      })
  }

  return (
    // could put episodes here rather than in a separate page
    <>
      <button onClick={handleGetEpisodes}>Get Episodes</button>
      {data?.items
        ? data.items.map((item) => <p key={item.show.name} {...item}></p>)
        : null}
    </>
  )
}

export default GetPodcast
