Getting the MVP done:

next steps:

1 - Login

- get the authorisation to work:
  to resolve - error 400 message: "Only valid bearer authentication supported" linked to the code in PodcastIndex line 14
  error 401 message: "Invalid access token"

  - for a reference use the curl and bearer token generated in spotify web console
  - Implicit grant flow: https://developer.spotify.com/documentation/general/guides/authorization-guide/#implicit-grant-flow
  - Playback sdk: https://developer.spotify.com/documentation/web-playback-sdk/quick-start/

  - pass token to local storage

    - setToken - find out what the difference is between set and get token
    - getToken
    - getPayload - find out what this does

  - make api call in a useEffect and check for token in local storage

- push to new page for podcasts
- (get the keys to not show)

2 - Podcast List

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
