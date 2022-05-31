import axios from 'axios'
import { FormI } from '../interface/posts'
import { useAppDispatch } from '../services/Redux/hook'

const baseURL = 'http://localhost:5000/posts'

const Axios = axios.create({ baseURL })
export default Axios
