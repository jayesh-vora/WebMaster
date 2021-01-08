import React from 'react';
import { withRouter } from 'react-router-dom'

import { connect } from 'react-redux';
import { toggleCartMenu } from '../../redux/cart/cart.actions';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect'
 
import CartItem from '../cart-item/cart-item.component'
import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

const CartDropDown = ({ cartItems, history, toggleCartMenu }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        cartItems.length 
        ? (
            cartItems.map(cartItem => (
              <CartItem key={cartItem.id} item={ cartItem } />
            ))
          )
        : (
          <span>
            Your cart is empty
          </span>
        ) 
      }
    </div>
    <CustomButton onClick={() => {
      return (
        toggleCartMenu(),
        history.push('/checkout')
      )
    }} >Check Out</CustomButton>
  </div>
)

const mapDispatchToProps = dispatch => ({
  toggleCartMenu: () => dispatch(toggleCartMenu())
})

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
}) 

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CartDropDown));