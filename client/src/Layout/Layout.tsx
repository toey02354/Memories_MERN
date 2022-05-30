import { Box, Container } from '@material-ui/core'

import AppBar from '../components/AppBar'
import Posts from '../components/Posts'
import Form from '../components/Form'

function App() {
  return (
    <Container>
      <AppBar />
      <Container>
        <Posts />
        <Form />
      </Container>
    </Container>
  )
}

export default App
