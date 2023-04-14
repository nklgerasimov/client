import React from 'react'
import { Link } from 'react-router-dom'
import './navItemsHeader.css'

const NavItemsHeader = () => {
  return (
    <nav className="nav-menu">
        <li><a className="nav-menu__item" href='#!'>Pillows</a></li>
        <li><a className="nav-menu__item" href='#!'>Sheets</a></li>
        <li><a className="nav-menu__item" href='#!'>Weighted blankets</a></li>
        <li><a className="nav-menu__item" href='#!'>Mattresses</a></li>
        <li><a className="nav-menu__item" href='#!'>Platform Bed</a></li>
        <li><a className="nav-menu__item" href='#!'>Duvets</a></li>
        <li><Link to="/about" className="nav-menu__item">About US</Link></li>
        {/* <li><Link to="/about">About US</Link></li> */}
        <li><a className="nav-menu__item" href='#!'>Blog</a></li>
    </nav>
  )
}

export default NavItemsHeader