import React, { useEffect } from 'react'
import Post from './Post'
import { CircularProgress, Grid, Typography } from '@material-ui/core'
import { useAppSelector } from '../../services/Redux/hook'
import useStyles from './style'

const Posts = () => {
  const classes = useStyles()
  const posts = useAppSelector((state) => state.posts)

  useEffect(() => {
    console.log('posts', posts)
  }, [posts])

  return (
    <>
      <Typography variant="h5">Posts</Typography>
      <Grid className={classes.postsContainer} container spacing={3}>
        <Grid item>
          <Post />
        </Grid>
        <Grid item>
          <Post />
        </Grid>
        <Grid item>
          <Post />
        </Grid>
      </Grid>
    </>
  )
}

export default Posts
