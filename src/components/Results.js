import React, { useState, useEffect } from 'react'
import { Typography, Grid, Button, CircularProgress } from '@material-ui/core'

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
    <Grid container direction="column" justify="center" alignItems="center">
      {!winner ? (
        <Grid container justify="center" alignItems="center">
          <CircularProgress color="secondary" />
        </Grid>
      ) : (
        <>
          <Typography variant="h1">
            {winner === 'tie'
              ? 'Draw'
              : winner === playerId
              ? 'You win'
              : 'You lost'}
          </Typography>
          <Grid container justify="center" alignItems="center">
            <Grid item xs={6}>
              <PlayerOneChoice
                style={{
                  width: '100%',
                  transform: 'rotate(-90deg) scaleY(-1)'
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <PlayerTwoChoice
                style={{ width: '100%', transform: 'rotate(-90deg)' }}
              />
            </Grid>
          </Grid>
          <Button
            type="button"
            variant="contained"
            color="primary"
            onClick={rematch}
          >
            Rematch
          </Button>
        </>
      )}
    </Grid>
  )
}

export default Results
