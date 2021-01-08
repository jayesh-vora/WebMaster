import cartActionTypes from './cart.types';

export const toggleCartMenu = () => ({
  type: cartActionTypes.TOGGLE_CART_MENU,
})

export const addItem = item => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item
})

export const removeItem = item => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: item
})

export const clearItem = item => ({
  type: cartActionTypes.CLEAR_ITEM,
  payload: item
})
