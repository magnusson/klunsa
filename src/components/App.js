import React from 'react'
import Header from './Header'
import Home from './Home'
import { getRandomId } from '../utils'

const App = () => {
  const playerId = getRandomId()
  return (
    <>
      <Header />
      <Home playerId={playerId} />
    </>
  )
}

export default App
