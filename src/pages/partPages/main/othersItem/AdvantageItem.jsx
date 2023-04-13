import React from 'react'
import './advantageItem.css'

const AdvantageItem = (props) => {
    
  return (
    <div>
        <div className='AdvantageItem'>
            <div className='AdvantageItem__content'>
                <div className='icon'> {props.item.img} </div>
                <div className='title'>{props.item.title} </div>
                <div className='subtitle'> {props.item.subtitle} </div>
            </div>
        </div>
    </div>
  )
}

export default AdvantageItem