import Post from './Post'
import { CircularProgress, Grid } from '@material-ui/core'
import { useAppSelector } from '../../services/Redux/hook'
import useStyles from './style'

const Posts = ({ setCurrentId }: { setCurrentId: any }) => {
  const classes = useStyles()
  const posts = useAppSelector((state) => state.posts)

  return (
    <>
      {!posts.length ? (
        <CircularProgress />
      ) : (
        <Grid className={classes.postsContainer} container spacing={3}>
          {posts.map((post, index) => (
            <Post post={post} ind={index} setCurrentId={setCurrentId} />
          ))}
        </Grid>
      )}
    </>
  )
}

export default Posts
