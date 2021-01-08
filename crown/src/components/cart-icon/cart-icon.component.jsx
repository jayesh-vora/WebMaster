import React from 'react';
import { createStructuredSelector } from 'reselect'

import { connect } from 'react-redux';

import { toggleCartMenu } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as Icon } from '../../assets/cart-icon.svg';
import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartMenu, itemCount }) => (
  <div className='cart-icon' onClick={toggleCartMenu}>
    <Icon className="icon"/>
    <span className="item-count">{itemCount}</span>
  </div>
)

const mapDispatchToProps = dispatch => ({
  toggleCartMenu: () => dispatch(toggleCartMenu())
})

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
}) 

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);
