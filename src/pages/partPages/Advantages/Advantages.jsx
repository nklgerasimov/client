import React from 'react'
import AdvantageItem from '../advantagesItem/AdvantageItem';
import './advantages.css'

import risk from './icons/risk.svg';
import warranty from './icons/warranty.svg';
import free from './icons/free.svg';
import made from './icons/made.svg';

const Advantages = () => {
  return (
    <div className='advantages'>
        <AdvantageItem item={{class: 'title-big', size: 'big', img: <img src={risk}/>, title: 'Risk-free, 100-night mattress trial', subtitle: 'Try your new mattress in the comfort of your own home for 100 nights risk-free'}}/>
        <AdvantageItem item={{img: <img src={warranty}/>, title: '10-year warranty', subtitle: 'Our industry-leading 10-year warranty backs your mattress for up to two decades'}}/>
        <AdvantageItem item={{img: <img src={free}/>, title: `Free shipping \n & returns`, subtitle: 'We offer free, no-contact shipping and returns throughout the contiguous U.S.'}}/>
        <AdvantageItem item={{img: <img src={made}/>, title: 'Made in the USA', subtitle: 'Assembled in the USA from the US and imported materials'}}/>
    </div>
  )
}

export default Advantages