import React from 'react'
import logo from './logo.svg';
import './logo.css'
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className='logo'>
        <Link to='/main'><img src={logo} alt="LOGO"/></Link>
    </div>
  )
}

export default Logo