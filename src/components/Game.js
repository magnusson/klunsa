import React, { useState, useEffect } from 'react'
import firebaseApp from '../base'
import Choices from './Choices'
import Results from './Results'
import { ReactComponent as Rock } from '../270a.svg'
import { ReactComponent as Paper } from '../270b.svg'
import { ReactComponent as Scissor } from '../270c.svg'
import { Grid } from '@material-ui/core'

const Game = props => {
  const { gameId, playerId, players } = props
  const types = { rock: Rock, paper: Paper, scissor: Scissor }
  const [choices, setChoices] = useState({})
  const playerKeys = Object.keys(players)
  const handleChoice = choice => {
    let obj = Object.assign({}, choices)
    obj[playerId] = choice
    setChoices(obj)
  }
  const rematch = () => {
    let updates = {}
    players[playerKeys[0]] = 0
    players[playerKeys[1]] = 0
    updates[`${gameId}/players/`] = players
    firebaseApp
      .database()
      .ref()
      .update(updates)
  }
  useEffect(() => {
    let updates = {}
    updates[`${gameId}/players/${playerId}`] = choices[playerId]
      ? choices[playerId]
      : 0
    firebaseApp
      .database()
      .ref()
      .update(updates)
  }, [choices, setChoices])
  if (players[playerKeys[0]] !== 0 && players[playerKeys[1]] !== 0) {
    return (
      <Results
        types={types}
        choices={players}
        playerId={playerId}
        rematch={rematch}
      />
    )
  }
  return (
    <Grid container justify="center" alignItems="center" spacing={2}>
      <Choices
        types={types}
        handleChoice={handleChoice}
        activeChoice={choices[playerId]}
      />
    </Grid>
  )
}

export default Game
