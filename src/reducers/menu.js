import { TOGGLE_SIDE_MENU, ADD_BEER_TO_CART } from '../actions'

const menu = (state = { isOpen: false }, action) => {
  switch (action.type) {
    case TOGGLE_SIDE_MENU:
      return { ...state, isOpen: !state.isOpen }
    case ADD_BEER_TO_CART:
      return { ...state, isOpen: true }
    default:
      return state
  }
}

export default menu
