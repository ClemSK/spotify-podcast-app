import React from 'react'

function SearchCard(prop) {
  const name = prop.data.shows.items.name

  return (
    <div className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
      <div className="card">
        <div className="card-header">
          <h4 className="card-header-title">{name}</h4>
        </div>
      </div>
    </div>
  )
}

export default SearchCard
