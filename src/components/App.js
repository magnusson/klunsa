import React, { useState } from 'react'
import Header from './Header'
import Home from './Home'
import Debug from './Debug'
import { getRandomId } from '../utils'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    max-width: 920px;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", "Arial", sans-serif;
    color: #f7fcfa;
    text-align: center;
    background-color: #7788A3;
    margin: 0 auto;
  }
`

const App = () => {
  const [debugType, setDebugType] = useState(null)
  const [debugData, setDebugData] = useState(null)
  const handleDebug = type => {
    setDebugType(type)
    switch (type) {
      case 'game':
        setDebugData({ playerOne: 0, playerTwo: 0 })
        break
      case 'result':
        setDebugData({ playerOne: 'rock', playerTwo: 'scissor' })
        break
      default:
        setDebugData({})
        break
    }
  }
  const playerId = debugType ? 'playerOne' : getRandomId()
  return (
    <>
      <Debug handleDebug={handleDebug} />
      <Header />
      <Home playerId={playerId} debugData={debugData} key={debugType} />
      <GlobalStyle />
    </>
  )
}

export default App
