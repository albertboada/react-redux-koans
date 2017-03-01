import { TOGGLE_SIDE_MENU, ADD_BEER_TO_CART } from '../actions';

const app = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_SIDE_MENU:
      return !state;
    case ADD_BEER_TO_CART:
      return true;
    default:
      return state;
  }
};

export default app;
