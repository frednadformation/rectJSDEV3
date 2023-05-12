import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Link, Outlet } from 'react-router-dom'

function Admin() {
  return (
    <div>

    <Navbar />
    <h1>Admin Page</h1>
        <nav>
            <Link to='/admin/dashboard'>Dashboard</Link>
            <Link to='/admin/gestionpost'>GestionPost</Link>
        </nav>
        <Outlet/>
    </div>
    
  )
}

export default Admin