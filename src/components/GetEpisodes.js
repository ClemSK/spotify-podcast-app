import React, { useEffect, useState } from 'react'
import axios from 'axios'
import EpisodeCard from './EpisodeCard'
import GetPodcast from './GetPodcast'

// The thing to work out here is how to pass the podcast IDs to the episodes endpoint
// so that is can fetch the episodes for each show
// I've exposed the ID in the PodcastCard to show it in the url when clicking on a podcast

// const episodesEndpoint =
//   'https://api.spotify.com/v1/shows/4Jgtgr4mHXNDyLldHkfEMz/episodes'

let episodesEndpoint = () => {
  // this isn't working at the moment, but use the endpoint and sample showID and you can see results once taken out of the function

  // define show id and use the podcast ID to get the different shows
  // sample showID: 4Jgtgr4mHXNDyLldHkfEMz
  let podcastId = GetPodcast.item.id
  let showId = podcastId
  return `https://api.spotify.com/v1/shows/${showId}/episodes`
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
        ? data.items.map((item) => <EpisodeCard key={item.name} {...item} />)
        : null}
    </>
  )
}

export default GetEpisodes
