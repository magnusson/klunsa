import React from 'react'
import { Grid, CircularProgress } from '@material-ui/core'

const Loading = () => {
  return (
    <Grid container justify="center" alignItems="center">
      <CircularProgress color="secondary" />
    </Grid>
  )
}

export default Loading
