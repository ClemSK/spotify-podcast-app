Spotify API Podcast App with React

Original intent:

Create a podcast feed which brings up the latest episodes to scroll through for the user. This feature does not currently exist in Spotify that we are aware of.

MVP:

- get user to log into Spotify
- display shows

Bonus:

- search bar
- display episodes
- podcast player

Our initial vision was big and bold, to basically create an alternate podcast UI for Spotify with our own twist.
The idea was to have a list of your podcasts and be able to play the latest episodes. This is doable, but in the end, outside the scope of this project. If we had more time we could have potentially added a player to stream the shows using the Spotify SDK.

Where we ended up:
We managed acheive our MVP and added some additional functionality such as a search bar.
There is a colourful UI with functionality to log in, browse your shows and search the spotify catalogue. A desirable feature would be to link the episodes of a show and add the new shows from the search results to the existing list of shows.

Highlights:
Getting access to the API and pulling data back: the process of access Spotify's API is not easy and wrestling with the code and frequent reviews of the docs we managed to get a working solution to handle the API data. It's a good first attempt at working with the Spotify API and may be the starting point of other Spotify based projects.

Struggles:
While it we have data from 1 endpoint we were unable call the second endpoint and fetch episode data. My main issue is transferring the ID from the Show endpoint to the Episodes endpoint. So for now, it's work in progress.

What we would like to add to the project:

- show notes
- player to stream shows
- podcast queue
- when a user finishes listening to an episode it is removed from the list
- ability for the user to organise episodes and reorder them

What we learnt:
Working with APIs is not always easy but we now have a better understanding of the process of accessing APIs and fetching data to then handle it. What was useful is that Spotify has extensive documentation which makes it helpful as a guide. However, we found that looking at other projects helped to solidify how to approach various tasks with practical examples, using the API 'in the wild'.

Would I recommend trying this?
Yes, if you're ready to spend time understanding the API, you will be rewarded with the rich data available.

C'mon it's Spotify dude, give it a go!
..Ta da dum da dum dum
