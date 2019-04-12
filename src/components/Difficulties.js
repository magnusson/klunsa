import React from 'react'

function Difficulties(props) {
  const { difficultyLevels, setDifficulty } = props
  return (
    <>
      {Object.keys(difficultyLevels).map((difficulty, i) => {
        return (
          <button key={i} onClick={() => setDifficulty(i)}>
            {difficulty}
          </button>
        )
      })}
    </>
  )
}

export default Difficulties
