import React from 'react'
import './InputHeader.css';
import searchIcons from './search.svg';

// const MyInput = React.forwardRef((props, ref) => {
//   return (
//     <input ref={ref} className={classes.myInput} {...props} />
//   )
// });

const InputHeader = () => {
  return (
    <div className="search">
        <input type='search' className='inputHeader' placeholder='Search'/>
        <button type='button'><img src={searchIcons} alt="LOGO"/></button>
    </div>
  )
};

export default InputHeader;