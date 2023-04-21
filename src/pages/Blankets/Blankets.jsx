import React from 'react'
import classes from './Blankets.module.css'

import bigFoto from './img/Photo.jpg'

const Blankets = () => {
  return (
    <div className='container'>
        <div className={classes.blankets__description}>
            <div className='wripper__left'>
                <div className={classes.bigFoto}>
                    <button></button>
                    <img src={bigFoto} alt="bigFoto"/>
                </div>
                <div className="smallFotos">

                </div>
                <div className="div">

                </div>
            </div>
            <div className="wripper__right">
                <div className='blankets__info'>

                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Blankets