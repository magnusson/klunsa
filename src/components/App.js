import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Play from './Play'

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/play" component={Play} />
      </>
    )
  }
}

export default App
