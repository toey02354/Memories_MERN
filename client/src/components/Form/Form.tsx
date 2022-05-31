import React, { useState } from 'react'
import useStyles from './style'
import { createPost } from '../../services/Redux/postSlicer'
import { useAppDispatch } from '../../services/Redux/hook'
import { Typography, TextField, Button, Paper } from '@material-ui/core'
import { FormI } from '../../interface/posts'
import Axios from '../../api/Axios'

const initialPostData = {
  creator: '',
  title: '',
  message: '',
  tags: [''],
  file: '',
}

const Form = () => {
  const dispatch = useAppDispatch()
  const classes = useStyles()
  const [postData, setPostData] = useState<FormI>(initialPostData)

  const createAPost = async () => {
    await Axios.post('/', postData)
      .then((res) => {
        console.log('Response: ', res)
      })
      .catch((err) => console.error('Error: ', err))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    console.log(postData)
    await createAPost()
    setPostData(initialPostData)
  }
  const handleClear = (event: React.FormEvent) => {
    event.preventDefault()
    setPostData(initialPostData)
  }

  return (
    <Paper elevation={3}>
      <form
        className={classes.form}
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Creating a Memory</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        ></TextField>
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        ></TextField>
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        ></TextField>
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData({
              ...postData,
              tags: e.target.value.split(','),
            })
          }
        ></TextField>
        <input
          className={classes.inputFile}
          type="file"
          onChange={(e) => setPostData({ ...postData, file: e.target.value })}
        ></input>
        <Button variant="contained" fullWidth color="primary" type="submit">
          Submit
        </Button>
        <Button
          variant="contained"
          fullWidth
          color="secondary"
          type="submit"
          onClick={handleClear}
        >
          Clear
        </Button>
      </form>
    </Paper>
  )
}

export default Form
