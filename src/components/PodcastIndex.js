import React from 'react'
import { getAllUserShows } from '../lib/Api'
import PodcastCard from './PodcastCard'

const PodcastIndex = () => {
  const [state, setState] = React.useState({ podcasts: [] })
  // const [data, setData] = useState({}) - not sure if this is needed

  const fetchPodcastsFromApi = async () => {
    try {
      const res = await getAllUserShows()
      setState({ podcasts: res.data })
    } catch (err) {
      console.error('An error occured fetching user podcasts', err)
    }
  }
  // {error: {status: 400, message: "Only valid bearer authentication supported"}} - this is what needs to be resolved,
  // could be an error with the way I'm calling the Api

  React.useEffect(() => {
    fetchPodcastsFromApi()
  }, [])

  if (state.podcasts.length === 0) {
    return <p>Loading...</p>
  }

  return (
    <section>
      <h1>This is the podcast page</h1>
      <div>
        {state.podcasts.map((podcast) => (
          <PodcastCard
            key={podcast.items.uri}
            id={podcast.items.uri}
            name={podcast.items.languages.en.name}
            image={podcast.items.images}
          />
        ))}
      </div>
    </section>
  )
}

export default PodcastIndex
