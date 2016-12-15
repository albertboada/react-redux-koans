import { ADD_BEER_TO_CART, DELETE_BEER_FROM_CART } from '../actions'

const cart = (state = [], action) => {
  switch (action.type) {
    case ADD_BEER_TO_CART:
      return [...state, action.beer]

    case DELETE_BEER_FROM_CART:
      return state.filter( beer => ( beer.id !== action.beer.id ))

    default:
      return state
  }
}

export default cart
