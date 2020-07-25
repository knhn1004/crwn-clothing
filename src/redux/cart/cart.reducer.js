import { TOGGLE_CART_HIDDEN, ADD_ITEM } from './cart.types'
import { addItemToCart } from './cart.utils'

const initialState = {
  hidden: true,
  cartItems: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      }
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      }
    default:
      return state
  }
}
