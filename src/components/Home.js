import React, { useState, useEffect } from 'react'
import Game from './Game'
import { firebaseApp } from '../base'
import { getRandomId } from '../utils'

const Home = props => {
  const { playerId } = props
  let gameId = null
  if (window.location.hash) {
    gameId = window.location.hash.substring(1)
  } else {
    gameId = getRandomId()
    const gameRef = firebaseApp.database().ref('/')
    gameRef.child(gameId).set({
      done: false
    })
    window.location.hash = gameId
  }
  const [players, setPlayers] = useState({})
  useEffect(() => {
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
  }, [])
  const playerCount = Object.keys(players).length
  if (players && playerCount === 2 && !(playerId in players)) {
    return <p>Game is full, sorry {playerId}</p>
  }
  if (playerCount === 2) {
    return <Game gameId={gameId} playerId={playerId} players={players} />
  }
  return (
    <>
      <h2>Waiting for opponent</h2>
      <p>Send this link to challenge someone: {window.location.href}</p>
    </>
  )
}

export default Home
