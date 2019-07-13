import React from 'react'
import { Grid, Box, Typography } from '@material-ui/core'

const Header = () => {
  return (
    <Grid container justify="center" alignItems="center">
      <Box m={4}>
        <Typography variant="h1">Klunsa</Typography>
      </Box>
    </Grid>
  )
}

export default Header
