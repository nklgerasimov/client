import React from 'react'
import { Link } from 'react-router-dom'
import './navItemsHeader.css'
import './style.css'
import './main'

// function dropMenu () {
//     document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
//     const dropDownBtn = dropDownWrapper.querySelector('.nav-menu__item');
//     const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
//     const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');

//     // Клик по кнопке. Открыть/Закрыть select
//     dropDownBtn.addEventListener('click', function (e) {
//       dropDownList.classList.toggle('dropdown__list--visible');
//           this.classList.add('nav-menu__item--active');
//       console.log('ok')
//     });
//     document.addEventListener('click', function (e) {
//       if (e.target !== dropDownBtn) {
//         dropDownBtn.classList.remove('nav-menu__item--active');
//         dropDownList.classList.remove('dropdown__list--visible');
//       }
//     });
 
//     // Нажатие на Tab или Escape. Закрыть дропдаун
//     document.addEventListener('keydown', function (e) {
//       if (e.key === 'Tab' || e.key === 'Escape') {
//         dropDownBtn.classList.remove('nav-menu__item--active');
//         dropDownList.classList.remove('dropdown__list--visible');
//       }
//     });
//   })
// }

const NavItemsHeader = () => {

  return (
    <nav className="nav-menu">
        <li className='dropdown'>
            <button className="nav-menu__item">
                Pillows
            </button>
            <ul className='dropdown__list'>
                <li> <a className='dropdown__list-item'> Матрас 1 </a></li>
                <li> <a className='dropdown__list-item'> Матрас 2 </a></li>
                <li> <a className='dropdown__list-item'> Матр 333333333ас 3 </a></li>
                <li> <a className='dropdown__list-item'> Матр 333333333ас 3 </a></li>
            </ul>

        </li>
        <li className='dropdown'>
            <button className="nav-menu__item"

            >Sheets</button>
            <ul className='dropdown__list'>
                <li> <a className='dropdown__list-item'> Матрас 11 </a></li>
                <li> <a className='dropdown__list-item'> Матрас 22 </a></li>
                <li> <a className='dropdown__list-item'> Матр 333333333ас 33 </a></li>
                <li> <a className='dropdown__list-item'> Матр 333333333ас 33 </a></li>
            </ul>
        </li>
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