import React, { useState, useEffect } from 'react'
import { Box, Container, Grow, Grid } from '@material-ui/core'
import { useAppDispatch } from '../services/Redux/hook'
import { getPosts } from '../services/Redux/postSlicer'
import Axios from '../api/Axios'

import AppBar from '../components/AppBar'
import Posts from '../components/Posts'
import Form from '../components/Form'

function App() {
  const [currentId, setCurrentId] = useState(0)
  const dispatch = useAppDispatch()

  const getAllPosts = async () => {
    await Axios.get('/')
      .then((res) => {
        dispatch(getPosts(res.data))
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getAllPosts()
    console.log('There is an dispatch action, or currentId is changed')
  }, [currentId, dispatch])
  // useEffect(() => {
  //   getAllPosts()
  //   console.log('There is an dispatch action')
  // }, [dispatch])

  return (
    <Container maxWidth="lg">
      <AppBar />
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App
