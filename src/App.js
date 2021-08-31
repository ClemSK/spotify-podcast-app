import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavBar from './common/NavBar'
import Home from './common/Home'
import Login from './auth/Login'
import PodcastIndex from './components/PodcastIndex'
import Episodes from './components/Episodes'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/podcast" component={PodcastIndex} />
        <Route path="/episodes" component={Episodes} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
