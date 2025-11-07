import { useState } from 'react'
import './index.scss'
import api from '../../api'
import { useNavigate } from 'react-router-dom'

import { Toaster, toast } from 'react-hot-toast'

export default function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassWord] = useState('')
    const navigate = useNavigate()

    localStorage.getItem("token")
    if ("token") {
        navigate('/Home')
    }

    async function SendCred() {
        try {
            if (!name || !email || !password) {
                toast.error("Cannot send empty fields.")
            }

            const body = {
                "name": name,
                "email": email,
                "password": password
            }

            const resp = await api.post('/register', body)
            toast.success('Account Created!')
            const token = resp.data.token
            localStorage.setItem("token", token)
        }

        catch (err) {
            console.log(err)
            toast.error("Revise your data.")
        }
    }

    return (
        <div className='MainScreen'>
            <div className="BlocoLogin">
                <h2>Register</h2>
                <h4>Elaborar alguma descrição slaaa kkkk</h4>

                <label>Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={e => setPassWord(e.target.value)}
                />

                <button onClick={SendCred}>Send</button>
            </div>

            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    )
}