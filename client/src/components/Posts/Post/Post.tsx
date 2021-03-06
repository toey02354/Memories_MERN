import React from 'react'
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core/'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { FormI } from '../../../interface/posts'
import useStyles from './style'
import moment from 'moment'
import Axios from '../../../api/Axios'
import { useAppDispatch } from '../../../services/Redux/hook'
import { deletePost } from '../../../services/Redux/postSlicer'

const Post = ({
  post,
  ind,
  setCurrentId,
}: {
  post: FormI
  ind: number
  setCurrentId: any
}) => {
  const classes = useStyles()
  const dispatch = useAppDispatch()
  const deleteAPost = () => {
    Axios.delete(`/delete/${post._id}`)
      .then((res) => {
        dispatch(deletePost(res.data))
      })
      .catch((err) => console.log(err))
  }

  return (
    <Card className={classes.cardContent}>
      <CardMedia
        className={classes.media}
        image={`https://picsum.photos/id/${ind}/500/300`}
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: 'white' }}
          size="small"
          onClick={() => {
            setCurrentId(post._id)
          }}
        >
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <div className={classes.tags}>
        <Typography variant="body2" color="textSecondary" component="h2">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        component="h2"
      >
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.actionBtn}>
        <div>
          <Button
            size="small"
            onClick={() => {
              console.log('like')
            }}
          >
            <ThumbUpAltIcon /> Like
          </Button>
          {post.likeCount}
        </div>
        <Button
          size="small"
          onClick={() => {
            deleteAPost()
          }}
        >
          <DeleteIcon /> Delete
        </Button>
      </CardActions>
    </Card>
  )
}

export default Post
