import React from 'react'
import HeaderTop from './headerTop/HeaderTop'
import HeaderMenu from './headerMenu/HeaderMenu'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <HeaderTop/>
        <HeaderMenu/>
    </div>
  )
}

export default Header