import Register from './pages/Register'
import Login from './pages/Login'
import Admin from './pages/Admin'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function Navigation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/admin' element={<Admin />} />
            </Routes>
        </BrowserRouter>
    )
}