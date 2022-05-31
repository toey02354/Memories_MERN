import { makeStyles } from '@material-ui/core/styles'

export default makeStyles({
  cardContent: {
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
  },
  tags: {
    textDecoration: 'underline',
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
})
