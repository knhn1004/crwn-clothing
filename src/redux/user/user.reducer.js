import { SET_CURRENT_USER } from './user.actionTypes'

const initialState = {
  currentUser: null,
}

export default (state = initialState, actions) => {
  switch (actions.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: actions.payload,
      }
    default:
      return state
  }
}
