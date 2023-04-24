import React from 'react'
import classes from './Blankets.module.css'

import bigFoto from './img/Photo.jpg'
import magnifier from './img/icons/magnifier.svg'

import foto_01 from './img/blanketsFoto/foto_01.jpg'
import foto_02 from './img/blanketsFoto/foto_02.jpg'
import foto_03 from './img/blanketsFoto/foto_03.jpg'
import foto_04 from './img/blanketsFoto/foto_04.jpg'
import foto_05 from './img/blanketsFoto/foto_05.jpg'
import foto_06 from './img/blanketsFoto/foto_06.jpg'
import foto_07 from './img/blanketsFoto/foto_07.jpg'
import foto_08 from './img/blanketsFoto/foto_08.jpg'
import AdvantageItem from '../partPages/advantagesItem/AdvantageItem'

import risk from './../partPages/Advantages/icons/risk.svg'

const Blankets = () => {
  return (
    <div className='container'>
            <h1 className={classes.pageTitle}>Home / Blankets / Weighted blankets</h1>
        <div className={classes.blankets__description}>
            <div className={classes.wripper__left}>
                <div className={classes.bigFoto}>
                    <img src={bigFoto} alt="bigFoto"/>
                    <button className={classes.magnifier}><img src={magnifier} alt="magnifier"/></button>
                </div>
                <div className={classes.smallfotos}>
                    <img src={foto_01} alt="smallFoto"/>
                    <img src={foto_02} alt="smallFoto"/>
                    <img src={foto_03} alt="smallFoto"/>
                    <img src={foto_04} alt="smallFoto"/>
                    <img src={foto_05} alt="smallFoto"/>
                    <img src={foto_06} alt="smallFoto"/>
                    <img src={foto_07} alt="smallFoto"/>
                    <img src={foto_08} alt="smallFoto"/>
                </div>
                <div className="advantages-small">
                    <AdvantageItem item={{class: 'title-small', size: 'small', img: <img src={risk}/>, title: 'Risk-free, 100-night mattress trial'}}/>
                    <AdvantageItem item={{class: 'title-small', size: 'small', img: <img src={risk}/>, title: 'Risk-free, 100-night mattress trial'}}/>
                    <AdvantageItem item={{class: 'title-small', size: 'small', img: <img src={risk}/>, title: 'Risk-free, 100-night mattress trial'}}/>
                    <AdvantageItem item={{class: 'title-small', size: 'small', img: <img src={risk}/>, title: 'Risk-free, 100-night mattress trial'}}/>
                </div>
            </div>
            <div className={classes.wripperRight}>
                <div className={classes.blankets__info}>
                <p>Royal Therapy Weighted Blanket Adult & Kids Bed (20lb, 48x78', Twin/Full Size Comfort) 
                    100% Calming Cotton Blanket with Glass Beads </p>
                </div>
                <div className="rating">

                </div>
                <div className="info">

                </div>
                <div className="ordens">

                </div>
                <div className="choosesize">

                </div>
                <div className="choosecolor">

                </div>
                <div className="add">

                </div>
                <div className="addToCart">

                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Blankets