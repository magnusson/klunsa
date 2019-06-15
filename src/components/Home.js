import React, { useState, useEffect } from 'react'
import Game from './Game'
import firebaseApp from '../base'
import { getRandomId } from '../utils'

const Home = props => {
  const { playerId, debugData } = props
  const [players, setPlayers] = useState({})
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
    if (debugData) {
      setPlayers(debugData)
    } else {
      syncPlayers()
    }
  }, [])
  const playerCount = Object.keys(players).length
  if (players && playerCount === 2 && !(playerId in players)) {
    return (
      <>
        <p>Game is full.</p>
        <button type="button" onClick={newGame}>
          Create new game
        </button>
      </>
    )
  }
  if (playerCount === 2) {
    return <Game gameId={gameId} playerId={playerId} players={players} />
  }
  return (
    <>
      <h2>Waiting for opponent</h2>
      <p>
        Send this link to challenge someone:{' '}
        <a
          href={window.location.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {window.location.href}
        </a>
      </p>
    </>
  )
}

export default Home
