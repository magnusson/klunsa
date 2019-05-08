import React, { useState, useEffect } from 'react'

const Results = props => {
  const { types, choices, playerId } = props
  const [winner, setWinner] = useState(null)
  const players = Object.keys(choices)
  const playerOne = players[0]
  const playerTwo = players[1]
  useEffect(() => {
    const keys = Object.keys(types)
    const result =
      (3 +
        keys.indexOf(choices[playerOne]) -
        keys.indexOf(choices[playerTwo])) %
      3
    if (result === 1) {
      setWinner(playerOne)
    } else if (result === 2) {
      setWinner(playerTwo)
    } else {
      setWinner('tie')
    }
  }, [])
  const PlayerOneChoice = types[choices[playerOne]]
  const PlayerTwpChoice = types[choices[playerTwo]]
  return (
    <div>
      {!winner ? (
        <p>Doing advanced math to find a winner</p>
      ) : (
        <div>
          {winner === 'tie' ? (
            <h2>It's a draw</h2>
          ) : winner === playerId ? (
            <h2>You win</h2>
          ) : (
            <h2>You lost</h2>
          )}
          <div style={{ display: 'flex' }}>
            <div>
              <PlayerOneChoice />
            </div>
            <div style={{ transform: 'scaleX(-1)' }}>
              <PlayerTwpChoice />
            </div>
            <button type="button">Rematch</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Results
