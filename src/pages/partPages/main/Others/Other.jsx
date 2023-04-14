import React from 'react'
import OtherItem from '../otherItem/OtherItem';
import classes from './Other.module.css'

import logoForbes from './icons/logo_forbes.svg';
import maskgroup from './icons/MaskGroup.svg';
import logoStars from './icons/logo_stars.svg';
import logoNewsweek from './icons/Logo-Copy.svg';
import logoTLC from './icons/tlc-10.svg';

const Other = () => {
  return (
    <div className={classes.other}>
        <OtherItem item={{img: <img src={logoForbes}/>, title: 'The "Apple Store" of Mattress Stores'}}/>
        <OtherItem item={{img: <img src={maskgroup}/>, title: 'Best Mattress to Buy /n Online'}}/>
        <OtherItem item={{img: <img src={logoStars}/>, title: `12,756+ Reviews /n Average of 4.7 stars`}}/>
        <OtherItem item={{img: <img src={logoNewsweek}/>, title: 'Best Online Mattress of 2021'}}/>
        <OtherItem item={{img: <img src={logoTLC}/>, title: 'Taking The Mattress Industry by Storm'}}/>
    </div>
  )
}

export default Other