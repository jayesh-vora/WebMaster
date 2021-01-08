import React from 'react';

import './checkout.styles.scss';

import CheckOutItem from '../../components/checkout-item/checkout-item.component';

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';


const CheckOutPage = ({ cartItems,cartTotal }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div> 
      <div className="header-block">
        <span>Description</span>
      </div> 
      <div className="header-block">
        <span>Quantity</span>
      </div> 
      <div className="header-block">
        <span>Price</span>
      </div> 
      <div className="header-block">
        <span>Reomve</span>
      </div>
    </div>
    {
      cartItems.map(cartItem => (
        <CheckOutItem id={cartItem.id} cartItem={cartItem} />
      ))
    }
    <div className="total">
      $ {cartTotal}
    </div>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal
})

export default connect(mapStateToProps)(CheckOutPage);