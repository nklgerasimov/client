import React from 'react'
import './quantity.css'
import QuantityItem from '../quantityItem/QuantityItem';

const Quantity = () => {
  return (
    <div className='Quantity'>
        <QuantityItem item={{ title: '12756', subtitle: 'Positive reviews'}}/>
        <QuantityItem item={{ title: '10878', subtitle: 'Facebook Followers'}}/>
        <QuantityItem item={{ title: '84%', subtitle: 'Retutning Clients'}}/>
        <QuantityItem item={{ title: '1444005', subtitle: 'Sold products'}}/>
    </div>
  )
}

export default Quantity