import { RECEIVE_BEERS } from '../actions'

const beers = (state, action) => {
  switch (action.type) {
    case 'HOLA':
      return [...action.beers]
  }
}

export default beers
