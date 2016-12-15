// import { createStore } from 'redux'
import { createStore } from './redux/createStore'
import reducers from './reducers/beers'

const configureStore = () => {
  return createStore(reducers)
}

export default configureStore
