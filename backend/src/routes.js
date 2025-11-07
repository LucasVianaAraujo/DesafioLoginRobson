import Register from './controller/Register/register.js'
import Login from './controller/Login/login.js'
import Admin from './controller/Register/register.js'

export default function AddRoutes(server) {
    server.use(Register),
    server.use(Login),
    server.use(Admin)
}