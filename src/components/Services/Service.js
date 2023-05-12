import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Link, Outlet, useLocation } from 'react-router-dom'

function Service() {
  const location = useLocation();
  console.log(location);
  return (
    <div>
    <Navbar />
    Bienvenue sur la page Service
    
    <nav>
        <Link to='/services/developpement'>Service Dev</Link>
        <Link to='/services/marketing'>Service Marketing</Link>
    </nav>
     <Outlet />
    </div>
  )
}

export default Service  