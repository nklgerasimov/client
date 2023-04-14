import React from 'react'
import classes from './OtherItem.module.css'

const OtherItem = (props) => {
    
  return (
      <div className={classes.otherItem}>
          <div className={classes.otherItem__content}>
              <div className={classes.logo}> {props.item.img} </div>
              <div className={classes.title}>{props.item.title} </div>
          </div>
      </div>
  )
}

export default OtherItem