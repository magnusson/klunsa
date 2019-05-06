import React, { useState, useEffect } from 'react'
import { firebaseApp } from '../base'
import Choices from './Choices'
import Results from './Results'
import { ReactComponent as Rock } from '../rock.svg'
import { ReactComponent as Scissor } from '../scissors.svg'
import { ReactComponent as Paper } from '../paper.svg'

function Game(props) {
  const { gameId, playerId, players } = props
  const types = { rock: Rock, paper: Paper, scissor: Scissor }
  const [choices, setChoices] = useState({})
  function handleChoice(choice) {
    let obj = Object.assign({}, choices)
    obj[playerId] = choice
    setChoices(obj)
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
  const playerKeys = Object.keys(players)
  if (players[playerKeys[0]] !== 0 && players[playerKeys[1]] !== 0) {
    return <Results types={types} choices={players} playerId={playerId} />
  }
  return (
    <div style={{ display: 'flex' }}>
      <Choices types={types} handleChoice={handleChoice} />
    </div>
  )
}

export default Game
