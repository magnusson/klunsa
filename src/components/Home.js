import React, { useState, useEffect } from 'react'
import {
  Grid,
  Typography,
  Button,
  CircularProgress,
  Link
} from '@material-ui/core'
import Game from './Game'
import firebaseApp from '../base'
import { getRandomId } from '../utils'

const Home = props => {
  const { playerId } = props
  const [players, setPlayers] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  let gameId = null
  const newGame = () => {
    gameId = getRandomId()
    window.location.hash = gameId
    syncPlayers()
  }
  const syncPlayers = () => {
    const playersRef = firebaseApp.database().ref(`${gameId}/players`)
    playersRef.once('value').then(snapshot => {
      const snapshotVal = snapshot.val() ? snapshot.val() : {}
      if (Object.keys(snapshotVal).length < 2) {
        snapshotVal[playerId] = 0
        setPlayers(snapshotVal)
        playersRef.set(snapshotVal)
      }
      setIsLoading(false)
    })
    playersRef.on('value', snapshot => {
      if (snapshot.val()) setPlayers(snapshot.val())
    })
  }
  if (window.location.hash) {
    gameId = window.location.hash.substring(1)
  } else {
    newGame()
  }
  useEffect(() => {
    syncPlayers()
  }, [])
  if (isLoading) {
    return (
      <Grid container justify="center" alignItems="center">
        <CircularProgress color="secondary" />
      </Grid>
    )
  }
  const playerCount = Object.keys(players).length
  if (players && playerCount === 2 && !(playerId in players)) {
    return (
      <Grid container direction="column" justify="center" alignItems="center">
        <Typography variant="h5" gutterBottom>
          Game is full.
        </Typography>
        <Button
          type="button"
          variant="contained"
          color="primary"
          onClick={newGame}
        >
          Create new game
        </Button>
      </Grid>
    )
  }
  if (playerCount === 2) {
    return <Game gameId={gameId} playerId={playerId} players={players} />
  }
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Typography variant="h1" gutterBottom>
        Waiting for opponent
      </Typography>
      <Typography variant="body1">
        Send this link to challenge someone:{' '}
        <Link
          href={window.location.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {window.location.href}
        </Link>
      </Typography>
    </Grid>
  )
}

export default Home
