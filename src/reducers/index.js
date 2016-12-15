import { combineReducers } from 'redux'

import beers from './beers'
import cart from './cart'

const reducers = combineReducers({
  beers,
  cart
})

export default reducers
