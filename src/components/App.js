import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import { getRandomId } from '../utils'

function App() {
  const [playerId, setPlayerId] = useState(null)
  useEffect(() => {
    const randomId = getRandomId()
    setPlayerId(randomId)
  }, [])
  if (!playerId) {
    return <p>Loading I guess...</p>
  }
  return (
    <>
      <Header />
      <Route
        exact
        path="/"
        render={props => <Home {...props} playerId={playerId} />}
      />
    </>
  )
}

export default App
