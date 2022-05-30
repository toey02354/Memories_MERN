import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  bar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    padding: '1rem 8px',
    margin: '2rem 0',
  },
  text: {
    display: 'flex',
    color: 'red',
  },
})

export default useStyles
