import React from 'react';

import { connect } from 'react-redux';
import { addItem, removeItem, clearItem } from '../../redux/cart/cart.actions';


import './checkout-item.styles.scss';

const CheckOutItem = ({cartItem, addItem, removeItem, clearItem}) => {
  const { imageUrl,name,price,quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container" >
        <img src={imageUrl} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className="arrow" onClick={()=> removeItem(cartItem)}> &#10094; </div>
        <span> {quantity} </span>
        <div className="arrow" onClick={()=> addItem(cartItem)}> &#10095; </div> 
      </span>
      <span className='price'>{price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  removeItem: (item) => dispatch(removeItem(item)),
  addItem: (item) => dispatch(addItem(item)),
  clearItem: (item) => dispatch(clearItem(item))
})

export default connect(null, mapDispatchToProps)(CheckOutItem);