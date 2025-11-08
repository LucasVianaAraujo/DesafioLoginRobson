import { useState } from 'react'
import './index.scss'
import api from '../../api'
import { useNavigate, Link } from 'react-router-dom'

import { Toaster, toast } from 'react-hot-toast'

export default function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassWord] = useState('')
    const navigate = useNavigate()

    localStorage.getItem("token")
    async function SendCred() {
        try {
            if (!name || !email || !password) {
                toast.error("Cannot send empty fields.")
                return
            }

            const body = {
                "name": name,
                "email": email,
                "password": password
            }

            const resp = await api.post('/register', body)

            const token = resp.data.Token
            localStorage.setItem("token", token)

            navigate('/Home')
        }

        catch (err) {
            console.log(err)
            toast.error("Revise your data.")
            return
        }
    }

    return (
        <div className='MainScreen'>
            <div className="BlocoLogin">
                <h2>Sign Up</h2>
                <h4>Create Account</h4>

                <input
                    type="text"
                    value={name}
                    placeholder='Username'
                    onChange={e => setName(e.target.value)}
                />

                <input
                    type="email"
                    value={email}
                    placeholder='Email'
                    onChange={e => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    value={password}
                    placeholder='Password'
                    onChange={e => setPassWord(e.target.value)}
                />

                <button onClick={SendCred}>Send</button>

                <h4>Already been around? <Link to={'/login'}>Click Here</Link></h4>
            </div>

            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    )
}