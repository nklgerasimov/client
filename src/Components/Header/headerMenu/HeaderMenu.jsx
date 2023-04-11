import React from 'react';
import './headerMenu.css';
import logo from './../../../img/logo/logo.svg';

const HeaderMenu = () => {
  return (
    <div className="container">
        <div className='headerMenu'>
            <div className="logo">
                <img src={logo} />
            </div>
            <nav className="nav-menu">
                <li className="nav-menu__item"><a>Pillows</a></li>
                <li className="nav-menu__item"><a>Sheets</a></li>
                <li className="nav-menu__item"><a>Weighted blankets</a></li>
                <li className="nav-menu__item"><a>Mattresses</a></li>
                <li className="nav-menu__item"><a>Platform Bed</a></li>
                <li className="nav-menu__item"><a>Duvets</a></li>
                <li className="nav-menu__item"><a>Duvets</a></li>
                <li className="nav-menu__item"><a>Blog</a></li>
            </nav>
        </div>
    </div>
  )
}

export default HeaderMenu