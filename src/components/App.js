import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { CssBaseline, createMuiTheme, Container } from '@material-ui/core'
import Header from './Header'
import Home from './Home'
import { getRandomId } from '../utils'
import { theme } from '../theme'

const App = () => {
  const playerId = getRandomId()
  const muiTheme = createMuiTheme(theme)
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Header />
        <Home playerId={playerId} />
      </Container>
    </ThemeProvider>
  )
}

export default App
