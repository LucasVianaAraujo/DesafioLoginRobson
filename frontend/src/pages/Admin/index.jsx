import { useState, useEffect } from 'react'
import './index.scss'
import api from '../../api.js'
import { MdAdminPanelSettings } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/index.jsx';
import { Link } from 'react-router-dom';

export default function Admin() {
    const [count, setCount] = useState([])
    const [adminCount, setAdmin] = useState([])
    const navigate = useNavigate()
    const admin = localStorage.getItem('admin')

    useEffect(() => {
        if (!admin) {
            navigate('/')
        }
    }, [admin])

    async function ShowUsers() {
        const resp = await api('/count')
        setCount(resp.data.Users.total)
    }

    async function ShowAdmin() {
        const resp = await api('/admin')
        setAdmin(resp.data.Admin.admin)
    }

    useEffect(() => {
        ShowUsers()
        ShowAdmin()
    }, [])

    return (
        <div>
            <Header />
            <div className='MainScreen'>

                <div className="AlignCounter">
                    <div className="Left">
                        <FaUser id='Users' />
                        <div className="Title">
                            <h3>{count ? count : 'None users found'}</h3>
                            <h2>Total Users</h2>
                        </div>
                    </div>
                    <div className="Right">
                        <MdAdminPanelSettings id='Admin' />
                        <div className="Title">
                            <h3>{adminCount ? adminCount : 'None admin found'}</h3>
                            <h2>Admin</h2>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}