import React, { useState, useEffect, useRef } from 'react'
import Choices from './Choices'
import Results from './Results'
import { ReactComponent as Rock } from '../rock.svg'
import { ReactComponent as Scissor } from '../scissors.svg'
import { ReactComponent as Paper } from '../paper.svg'

function Game() {
  const choices = { rock: Rock, paper: Scissor, scissor: Paper }
  const [choice, setChoice] = useState(null)
  const [aiChoice, setAiChoice] = useState(null)
  const isInitialMount = useRef(true)

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
    } else {
      const keys = Object.keys(choices)
      const randomChoice = keys[Math.floor(Math.random() * keys.length)]
      setAiChoice(randomChoice)
    }
  }, [choice])

  function retry() {
    setChoice(null)
    setAiChoice(null)
    isInitialMount.current = true
  }

  if (choice !== null && aiChoice !== null) {
    console.log('does this render twice')
    return (
      <>
        <Results choices={choices} choice={choice} aiChoice={aiChoice} />
        <button onClick={retry}>Retry</button>
      </>
    )
  }
  return (
    <div style={{ display: 'flex' }}>
      <Choices choices={choices} setChoice={setChoice} />
    </div>
  )
}

export default Game
