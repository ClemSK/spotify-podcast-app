import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavBar from './common/NavBar'
import Home from './common/Home'
import Login from './auth/Login'
import PodcastIndex from './components/PodcastIndex'
import GetEpisodes from './components/GetEpisodes'
import SearchResults from './lib/SearchResults'
import Logout from './auth/Logout'

function App() {
  

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/podcast" component={PodcastIndex} />
        <Route path="/podcast/:id/episodes" component={GetEpisodes} />
        {/* <Route path="/episodes" component={GetEpisodes} /> */}
        <Route path="/results" component={SearchResults} />
        <Route path="/logout" component={Logout} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
