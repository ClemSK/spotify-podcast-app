import React from 'react'

function SearchCard(results) {
const name = results.name
const image = results.images[0].url
const publisher = results.publisher
const description = results.description

  return (
    <div className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
      <div className="card">
        <div className="card-header">
          <h4 className="card-header-title">{name}</h4>
        </div>

        <div className="card-image">
            <figure className="image is-1by1">
              <img
                src={image}
                alt={name}
                loading="lazy"
                width="200"
                hieght="200"
              />
            </figure>
          </div>

          <div className="card-content">
            <h5>{publisher}</h5>
            <h5>{description}</h5>
          </div>
        

      </div>
    </div>
  )
}

export default SearchCard
