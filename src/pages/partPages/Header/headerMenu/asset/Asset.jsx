import React from 'react'
import asset from './asset.svg';
import './asset.css'

const Asset = () => {
  return (
    <div className='asset'>
        <a href='#!'><img src={asset} alt="asset"/></a>
    </div>
  )
}

export default Asset