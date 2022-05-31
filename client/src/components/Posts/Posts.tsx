import React, { useEffect, useState } from 'react'
import Post from './Post'
import { CircularProgress, Grid, Typography } from '@material-ui/core'
import { useAppSelector, useAppDispatch } from '../../services/Redux/hook'
import { createPost, getPosts } from '../../services/Redux/postSlicer'
import useStyles from './style'
import Axios from '../../api/Axios'

const Posts = () => {
  const classes = useStyles()
  const dispatch = useAppDispatch()
  const posts = useAppSelector((state) => state.posts)

  const getAllPosts = async () => {
    await Axios.get('/')
      .then((res) => {
        if (res.data?.length > 0) {
          dispatch(getPosts(res.data))
        }
      })
      .catch((err) => console.error('Error: ', err))
  }

  useEffect(() => {
    // console.log('posts', posts)
    getAllPosts()
  }, [posts])

  return (
    <>
      {!posts.length ? (
        <CircularProgress />
      ) : (
        <Grid className={classes.postsContainer} container spacing={3}>
          {posts.map((post, index) => (
            <Post post={post} ind={index} />
          ))}
        </Grid>
      )}
    </>
  )
}

export default Posts
