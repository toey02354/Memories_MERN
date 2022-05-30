import React from 'react'
import useStyles from './style'
import { AppBar as MAppBar, Typography } from '@material-ui/core'
import memories from '../../images/memories.png'

const AppBar = () => {
  const classes = useStyles()
  return (
    <MAppBar className={classes.bar} position="static" color="inherit">
      <Typography className={classes.text} variant="h4">
        Memories
      </Typography>
      <img src={memories} alt="memories" height={50} />
    </MAppBar>
  )
}

export default AppBar
