import { useState } from 'react'
import './index.scss'
import api from '../../api.js'
import { useNavigate, Link } from 'react-router-dom'

import { Toaster, toast } from 'react-hot-toast'
import { useEffect } from 'react'

export default function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassWord] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token != undefined || token != null) {
            navigate('/Home')
        }
    }, [])

    async function SendCred() {
        if (!email || !password) {
            toast.error("Cannot send empty fields.")
            return
        }

        try {
            const body = {
                "email": email,
                "password": password
            }

            const resp = await api.post('/login', body)
            const token = resp.data.Token

            if (token == undefined || token == null || token == '') {
                return toast.error('Error ao validar token')
            }

            else {
                localStorage.setItem("token", token)
                navigate('/Home')
            }

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
                <h2>Login</h2>
                <h4>Proceed to Home</h4>

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

                <h4>New Blood? <Link to={'/register'}>Click Here</Link></h4>
            </div>

            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    )
}