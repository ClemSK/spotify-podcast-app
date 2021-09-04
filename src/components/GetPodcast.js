import React, { useEffect, useState } from 'react'
import axios from 'axios'
import GetEpisodes, { episodesEndpoint } from './GetEpisodes'

import PodcastCard from './PodcastCard'

const podcastEndpoint = 'https://api.spotify.com/v1/me/shows'

// const episodesEndpoint =
//   'https://api.spotify.com/v1/shows/7qZAVw03FuurfYnWIWwkHY/episodes'

const GetPodcast = () => {
  const [token, setToken] = useState('')
  const [data, setData] = useState({})

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      setToken(localStorage.getItem('accessToken'))
    }
  }, [])

  useEffect(() => {
    handleGetPodcasts()
  }, [token])

  const handleGetPodcasts = () => {
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
        console.error('there was an error fetching podcasts', err)
      })
  }

  // const getSinglePodcastEpisodes = (id) => {
  //   return axios.get(`${podcastEndpoint}/podcast/${id}`)
  // }
  // console.log(getSinglePodcastEpisodes())

  // const handleGetEpisodes = (props) => {
  //   // get id from podcast endpoint and pass on to episode endpoint
  //   const id = props.show.id
  //   // return episodesEndpoint(id)
  //   return GetEpisodes(episodesEndpoint(id))
  // }

  // state = {
  //   data: podcastEndpoint,
  // }
  // getData = data

  return (
    <div className="podcasts is-flex">
      {/* <button onClick={handleGetPodcasts}>Get Podcasts</button> */}
      {data?.items
        ? data.items.map((item) => (
            <PodcastCard key={item.show.name} {...item} />
          ))
        : null}

      {/* <PodcastCard onClick={handleGetEpisodes} /> */}
    </div>
  )
}

export default GetPodcast
