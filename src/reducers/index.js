import { combineReducers } from 'redux'

import isSideMenuOpen from './isSideMenuOpen'
import beers from './beers'
import cart from './cart'

const reducers = combineReducers({
  isSideMenuOpen,
  beers,
  cart
})

export default reducers
