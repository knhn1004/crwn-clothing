import { TOGGLE_CART_HIDDEN } from './cart.types'

const initialState = {
  hidden: true,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      }
    default:
      return state
  }
}
