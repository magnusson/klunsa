import React from 'react'
import Header from './Header'
import Home from './Home'
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
  const playerId = getRandomId()
  return (
    <>
      <Header />
      <Home playerId={playerId} />
      <GlobalStyle />
    </>
  )
}

export default App
