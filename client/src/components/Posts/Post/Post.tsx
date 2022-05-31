import React from 'react'
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
} from '@material-ui/core/'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import DeleteIcon from '@material-ui/icons/Delete'
import { FormI } from '../../../interface/posts'
import useStyles from './style'
import moment from 'moment'

const Post = ({ post, ind }: { post: FormI; ind: number }) => {
  const classes = useStyles()
  return (
    <Card className={classes.cardContent}>
      <CardContent>
        <Typography variant="h6">{post.creator}</Typography>
        <CardMedia
          className={classes.media}
          image={`https://picsum.photos/id/${ind}/500/300`}
          title={post.title}
        />
        <Typography variant="h3" component="div">
          {post.title}
        </Typography>
        <br />
        <Typography variant="body2">{post.message}</Typography>
        <br />
        <Grid container className={classes.tags} spacing={1}>
          {post.tags.map((tag, index) => (
            <Grid item key={index}>
              #{tag}
            </Grid>
          ))}
        </Grid>
      </CardContent>
      <CardActions className={classes.actionBtn}>
        <Button size="small">
          <ThumbUpAltIcon />
        </Button>
        <Button size="small">
          <DeleteIcon />
        </Button>
      </CardActions>
    </Card>
  )
}

export default Post
