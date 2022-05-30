import { Box, Container, Grow, Grid } from '@material-ui/core'

import AppBar from '../components/AppBar'
import Posts from '../components/Posts'
import Form from '../components/Form'

function App() {
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
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App
