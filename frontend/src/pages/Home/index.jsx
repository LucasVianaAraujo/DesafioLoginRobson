import Header from '../../components/Header/index.jsx'
import './index.scss'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()

    async function Logout() {
        localStorage.clear('token')
        navigate('/')
    }

    return (
        <div>
            <Header />
            <div className='MainScreen'>
                <div className="BlocoLogin">
                    <h1 style={{ textAlign: 'center' }}>Hello!</h1>
                    <button onClick={Logout}>Logout</button>
                </div>
            </div>
        </div>
    )
}