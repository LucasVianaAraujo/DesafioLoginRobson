import Register from './pages/Register'
import Login from './pages/Login'
import Admin from './pages/Admin'
import AdminLogin from './pages/AdminLogin'
import Home from './pages/Home'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function Navigation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/admin' element={<Admin />} />
                <Route path='/adminlogin' element={<AdminLogin />} />
                <Route path='/home' element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}