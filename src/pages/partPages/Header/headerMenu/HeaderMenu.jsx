import React from 'react';
import './headerMenu.css';


import InputHeader from './input/InputHeader';
import Asset from './asset/Asset';
import Logo from './logo/Logo';
import NavItemsHeader from './navItems/NavItemsHeader';

const HeaderMenu = () => {
  return (
    <div className="container">
        <div className='headerMenu'>
            <Logo/>
            <NavItemsHeader/>
            <InputHeader />
            <Asset />
        </div>
    </div>
  )
}

export default HeaderMenu