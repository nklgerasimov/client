import React from 'react'
import shopNow from './img/shopNow.jpg';
import photo from './img/Photo.jpg';
import ourProducts from './img/OurProducts.jpg'

import './main.css'
import Advantages from './../Advantages/Advantages';
import CentrWrapper from './centrWrapper/CentrWrapper';

const Main = () => {
  return (
    <div className='container'>
        <div className="main">
            <img className='img-shopNow' src={shopNow} alt="Купить сейчас" />
            <img className='img-photo-main' src={photo} alt="Фото" />
        </div>
        <Advantages/>
        <CentrWrapper/>
        <img src={ourProducts} alt="Our Products" />
    </div>
  )
}

export default Main