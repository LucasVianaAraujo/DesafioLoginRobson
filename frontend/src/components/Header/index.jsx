import { Link } from 'react-router-dom'
import './index.scss'
import { LuBox } from "react-icons/lu";

export default function Header() {
    return (
        <header>
            <h3 id='Box'><LuBox /></h3>
            <h3>AuthGate</h3>
            <nav>
                <Link to={'/'}>Login</Link>
                <Link to={'/adminlogin'}>Admin</Link>
            </nav>
        </header>
    )
}