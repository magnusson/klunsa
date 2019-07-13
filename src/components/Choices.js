import React from 'react'
import { useTheme } from '@material-ui/styles'
import { Grid, Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  active: {
    backgroundColor: props => props.palette.action.hover
  }
})

const Choices = props => {
  const { types, handleChoice, activeChoice } = props
  const theme = useTheme()
  const classes = useStyles(theme)
  return (
    <>
      {Object.keys(types).map((choice, i) => {
        const Choice = types[choice]
        return (
          <Grid item xs={4} key={i}>
            <Button className={choice === activeChoice ? classes.active : null}>
              <Choice
                onClick={() => handleChoice(choice)}
                style={{ width: '100%' }}
              />
            </Button>
          </Grid>
        )
      })}
    </>
  )
}

export default Choices
