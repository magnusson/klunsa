import React, { useState } from 'react'
import Difficulties from './Difficulties'
import Game from './Game'

function Play() {
  const difficultyLevels = {
    easy: 0,
    medium: 1,
    hard: 2
  }
  // TODO: Temporary set to easy until we know what to do with difficulties
  const [difficulty, setDifficulty] = useState(0)
  return (
    <>
      {difficulty === null ? (
        <Difficulties
          difficultyLevels={difficultyLevels}
          setDifficulty={setDifficulty}
        />
      ) : (
        <Game difficulty={difficulty} />
      )}
    </>
  )
}

export default Play
