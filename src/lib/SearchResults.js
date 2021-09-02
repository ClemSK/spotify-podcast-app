import React from 'react'
import SearchCard from '../components/SearchCard'


function SearchResults(podcasts) {

if(podcasts && podcasts.data && podcasts.data.shows && podcasts.data.shows.items ){

  console.log('we have some object.data.shows.items ', podcasts.data.shows.items)
  let results = podcasts.data.shows.items
  console.log(`NAME >>> `, results[0].name)
  console.log(`IMAGE SRC >>>  `, results[0].images.[0].url)
  console.log(`DESCRIPTION >>>  `, results[0].description)
  console.log(`PUBLISHER >>>  `, results[0].publisher)
} 

console.log(podcasts)
  return (
    <div>
      <h1>This is the results page</h1>
  {podcasts?.items
        ? podcasts.items.map((podcasts) => (
            <SearchCard
             key={podcasts.data.shows.items.name} {...podcasts} />
          ))
        : console.log(`null`)}
    </div>
  )
}

export default SearchResults
