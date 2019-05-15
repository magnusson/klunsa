import React, { useState, useEffect } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props =>
      props.winner ? '#77a88d' : '#ff6670'} !important;
    transition: background-color 2s;
  }
`

const Icon = styled.span`
  width: 50%;

  ${props =>
    props.side === 'left' &&
    `
    transform: rotate(-90deg) scaleY(-1);
  `}

  ${props =>
    props.side === 'right' &&
    `
    transform: rotate(-90deg);
  `}
`

const Results = props => {
  const { types, choices, playerId, rematch } = props
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
  const PlayerTwoChoice = types[choices[playerTwo]]
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
            <Icon side="left">
              <PlayerOneChoice />
            </Icon>
            <Icon side="right">
              <PlayerTwoChoice />
            </Icon>
          </div>
          <button type="button" onClick={rematch}>
            Rematch
          </button>
        </div>
      )}
      <GlobalStyle winner={winner === playerId} />
    </div>
  )
}

export default Results
