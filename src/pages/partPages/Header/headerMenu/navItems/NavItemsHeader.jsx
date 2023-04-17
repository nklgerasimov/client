import React from 'react'
import { Link } from 'react-router-dom'
import './navItemsHeader.css'
import './style.css'
import './main'

const NavItemsHeader = () => {
  return (
    <nav className="nav-menu">
        <li className='dropdown'>
            <button className="nav-menu__item" href='#!'>Pillows</button>
            <ul className='dropdown__list'>
                <li> <a className='dropdown__list-item'> Матрас 1 </a></li>
                <li> <a className='dropdown__list-item'> Матрас 2 </a></li>
                <li> <a className='dropdown__list-item'> Матр 333333333ас 3 </a></li>
                <li> <a className='dropdown__list-item'> Матр 333333333ас 3 </a></li>
            </ul>

        </li>
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