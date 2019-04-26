import React, { useState, useEffect } from 'react'

function Results(props) {
  const { choices, choice, aiChoice } = props
  const [winner, setWinner] = useState(null)
  useEffect(() => {
    const keys = Object.keys(choices)
    const result = (3 + keys.indexOf(aiChoice) - keys.indexOf(choice)) % 3
    if (result === 1) {
      setWinner('you')
    } else if (result === 2) {
      setWinner('ai')
    } else {
      setWinner('tie')
    }
  }, [])
  const PlayerChoice = choices[choice]
  const AiChoice = choices[aiChoice]
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {!winner ? (
        <p>Doing advanced math to find a winner</p>
      ) : (
        <>
          <h2 style={{ flex: '1 0 100%' }}>Winner: {winner}</h2>
          <div style={{ width: '50%' }}>
            You: <PlayerChoice style={{ width: '100%', height: 'auto' }} />
          </div>
          <div style={{ width: '50%', transform: 'scaleX(-1)' }}>
            AI: <AiChoice style={{ width: '100%', height: 'auto' }} />
          </div>
        </>
      )}
    </div>
  )
}

export default Results
