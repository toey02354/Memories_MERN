import { makeStyles } from '@material-ui/core/styles'

export default makeStyles({
  cardContent: {
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  tags: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  actionBtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  title: {
    padding: '0 16px',
  },
})
