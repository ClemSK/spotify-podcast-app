import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import EpisodeCard from './EpisodeCard'
import Loading from '../common/Loading'
import '../styles/GetEpisodes.css'

const GetEpisodes = () => {
  const { id } = useParams()
  const token = localStorage.getItem('accessToken')
  const [data, setData] = useState({})
  const [state, setState] = React.useState({ episodes: null })

  const handleGetEpisodes = () => {
    axios
      .get(`https://api.spotify.com/v1/shows/${id}/episodes`, {
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

  useEffect(() => {
    handleGetEpisodes()
  }, [token])

  // if (state.episodes === null) {
  //   return <Loading />
  // }

  return (
    <div className="episodes-container">
      <div className="episodes-list">
        {data?.items
          ? data.items.map((item) => <EpisodeCard key={item.name} {...item} />)
          : null}
      </div>
    </div>
  )
}

// use this to get the ID out from the url and get the podcast episodes

export default GetEpisodes
