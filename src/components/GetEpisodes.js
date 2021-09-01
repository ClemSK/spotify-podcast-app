import React, { useEffect, useState } from 'react'
import axios from 'axios'
import EpisodesCard from './EpisodeCard'

const podcastEndpoint =
  'https://api.spotify.com/v1/shows/4Jgtgr4mHXNDyLldHkfEMz/episodes'

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
        ? data.items.map((item) => <EpisodesCard key={item.name} {...item} />)
        : null}
    </>
  )
}

export default GetEpisodes
