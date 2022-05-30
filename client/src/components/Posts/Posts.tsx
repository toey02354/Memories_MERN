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
      {posts.length > 0 ? (
        <Grid className={classes.postsContainer} container spacing={3}>
          {posts.map((post) => (
            <Post data={post} />
          ))}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </>
  )
}

export default Posts
