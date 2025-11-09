import { useState } from 'react'
import './index.scss'
import api from '../../api.js'
import { useNavigate, Link } from 'react-router-dom'
import Header from '../../components/Header/index.jsx'
import { Toaster, toast } from 'react-hot-toast'
import { useEffect } from 'react'

export default function AdminLogin() {
    const [email, setEmail] = useState('')
    const [password, setPassWord] = useState('')
    const navigate = useNavigate()

    async function SendCred() {
        if (!email || !password) {
            return toast.error("Cannot send empty fields.")
        }

        try {
            const body = {
                "email": email,
                "password": password
            }

            const resp = await api.post('/admin', body)

            const token = resp.data.AdminFound

            if (token == undefined || token == null || token == '') {
                return toast.error('Error on validate admin')
            }

            else {
                localStorage.setItem("admin", token)
                navigate('/admin')
            }
        }

        catch (err) {
            console.log(err)
            toast.error("Revise your data.")
            return
        }
    }

    return (
        <div>
            <Header />
            <div className='MainScreen'>
                <div className="BlocoLogin">
                    <h2>Admin Access</h2>
                    <h4>Proceed to Admin Painel</h4>

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

                    <h4>Standard Login? <Link to={'/'}>Click Here</Link></h4>
                </div>

                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
            </div>
        </div>
    )
}