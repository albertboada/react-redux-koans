export const RECEIVE_BEERS = 'RECEIVE_BEERS'
export const ADD_BEER_TO_CART = 'ADD_BEER_TO_CART'
export const TOGGLE_SIDE_MENU = 'TOGGLE_SIDE_MENU'

export const receiveBeers = beers => ({
  type: RECEIVE_BEERS,
  beers
})

export const addBeerToCart = beer => ({
  type: ADD_BEER_TO_CART,
  beer
})

export const toggleSideMenu = () => ({
  type: TOGGLE_SIDE_MENU
})