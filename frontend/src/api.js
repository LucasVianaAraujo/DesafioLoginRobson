import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5001',
    headers: localStorage.getItem("token")
})

export default api