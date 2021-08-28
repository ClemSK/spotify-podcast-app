import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavBar from './common/NavBar'
import Home from './common/Home'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
