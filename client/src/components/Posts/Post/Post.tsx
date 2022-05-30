import React from 'react'
import { Grid } from '@material-ui/core'
import { FormI } from '../../../interface/posts'

const Post = ({ data }: { data: FormI }) => {
  return (
    <Grid item>
      <h1>{data.title}</h1>
      <p>{data.message}</p>
    </Grid>
  )
}

export default Post
