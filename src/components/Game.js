import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Choices from './Choices'
import Results from './Results'

function Game() {
  const choices = ['rock', 'paper', 'scissor']
  const [choice, setChoice] = useState(null)

  if (choice !== null) {
    return (
      <>
        <Results choices={choices} choice={choice} />
        <Link to="/">Go back</Link>
      </>
    )
  }
  return <Choices choices={choices} setChoice={setChoice} />
}

export default Game
