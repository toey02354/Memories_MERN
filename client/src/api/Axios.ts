import axios from 'axios'

const baseURL = 'http://localhost:8000/posts'

const Axios = axios.create({ baseURL })
export default Axios
