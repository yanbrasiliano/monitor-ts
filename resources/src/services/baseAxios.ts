import axios from 'axios'

const baseAxios = axios.create({
  baseURL: 'http://localhost:8001/api/',
  timeout: 5000,
})

export default baseAxios
