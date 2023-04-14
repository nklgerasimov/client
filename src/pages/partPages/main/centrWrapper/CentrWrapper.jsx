import React from 'react'
import centrImg from './img/centr.jpg'
import rImg from './img/r.jpg'
import './centrWrapper.css'
import Quantity from './../Quantity/Quantity'
import Other from '../Others/Other'

const CentrWrapper = () => {
  return (
    <div className='centrWrapper'>
        <div className='img-bg'>
            <img className='rImg' src={rImg}/>
            <img className='centrImg' src={centrImg}/>
            <img className='rImg' src={rImg}/>
        </div>
        <Quantity/>
        <Other/>
    </div>

  )
}

export default CentrWrapper