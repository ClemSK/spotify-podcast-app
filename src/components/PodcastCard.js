import React from 'react'
import { Link } from 'react-router-dom'

const PodcastCard = (items, id, name, total_episodes, publisher) => {
  // add an object here
  console.log(items, id, name, total_episodes, publisher)

  return (
    // add in an object in the link
    <Link to={`/podcast/${id}`}>
      This is a placeholder object
      <div>{name}</div>
    </Link>
  )
}

export default PodcastCard
