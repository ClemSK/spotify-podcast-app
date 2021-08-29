Getting the MVP done:

next steps:

1 - Login - done

- get the authorisation to work

  - James - work on authorisation to get working

- (get the keys to not show)
- login button + test
  - push to new page for podcasts

2 - Podcast List

to resolve - error 400 message: "Only valid bearer authentication supported" linked to the code in PodcastIndex line 14

add in route for podcasts - done
fetch user shows - getting error
understand structure of json data - had a look in api console
create PodcastCards to display user shows - created but have no data to return

- once logged in, do fetch
- API call - wrote up api call but getting http 400 error: Bad Request - The request could not be understood by the server due to malformed syntax.
- then build out functionality
- fetching the podcast list - hard coded for display purposes? poss not needed, there is endpoint to fetch this once initial call is successful
  Get a list of the current user’s saved shows: https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-users-saved-shows
  GET https://api.spotify.com/v1/me/shows
  Use this endpoint to fetch the podcasts that a user has subscribed to.

  useHistory for continuity? may come later
  use data, setData and state for info?
  add in objects for request? did this in PodcastCard component, may need checking with api dev console

3 - Player

4 - styling

- do login page
