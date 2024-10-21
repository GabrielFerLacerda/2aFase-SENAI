import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


function Navbar() {
  return (
    <div>
        <nav className="navbar">
      <div className="navbar-brand">
        <img src="images (1).png" alt="Nosso Aniversario" className="logo" />
        <h1>NossoAniversario</h1>
      </div>
      <div className='nav-links'>
        <Link to = '/'>Inicio </Link> 
        <Link to ='/text'>Nossa Historia </Link> 
        <Link to = '/memorial'>Memorial </Link>
        </div>
    </nav>
    </div>
  )
}

export default Navbar
