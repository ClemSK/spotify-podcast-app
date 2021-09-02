import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavBar from './common/NavBar'
import Home from './common/Home'
import Login from './auth/Login'
import PodcastIndex from './components/PodcastIndex'
import GetEpisodes from './components/GetEpisodes'
<<<<<<< HEAD
=======

>>>>>>> 7241f7c72df1b375acd4c6856bb4b2b11d5d257f
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
      </Switch>
    </BrowserRouter>
  )
}

export default App
