export const addToCartItems = (cartItems, cartItemToAdd) => {
  const exist = cartItems.find(cartItem => (
    cartItem.id === cartItemToAdd.id
  ))

  if(exist) {
    return cartItems.map(cartItem => (
      cartItem.id === cartItemToAdd.id ?
      {
        ...cartItem, quantity: (cartItem.quantity + 1)
      } :
      cartItem
    ))
  }

  return [
    ...cartItems, { ...cartItemToAdd, quantity: 1 }
  ]
}

export const removeFromCartItems = (cartItems, itemToRemove) => {
  // const quantity = cartItems.find(cartItem => cartItem.id === itemToRemove.id)

  if(itemToRemove.quantity > 1) {
    return cartItems.map(cartItem => (
      cartItem.id === itemToRemove.id
      ? {...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
    ))
  }
  
  return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id)

}