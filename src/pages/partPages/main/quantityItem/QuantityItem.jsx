import React from 'react'
import './quantityItem.css'

const QuantityItem = (props) => {
    
  return (
    <div>
        <div className='QuantityItem'>
            <div className='QuantityItem__content'>
                <div className='title'>{props.item.title} </div>
                <div className='subtitle'> {props.item.subtitle} </div>
            </div>
        </div>
    </div>
  )
}

export default QuantityItem