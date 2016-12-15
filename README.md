React Redux koans
=========================

This is an exercise based on unit tests to help you learn Redux. This exercise is designed and crafted with love by <a href="http://reactjs.academy">ReactJS.Academy</a>. We've called the app you are about to fix "Brewery JS". You'll see why once you fix it, we hope you like.

## How to install

- `git clone git@github.com:reactjs-academy/react-redux-koans.git`
- `cd react-redux-koans`
- `npm i`
- Don't do `npm start` because you need to fix the app before

## First part of the exercise, fix the app.

We have written some unit test for the relevant code. Each unit test is side by side to the code it's testing. Example src/actions/index.js unit tests are in src/actions/index.spec.js

The idea is simple, you should execute our unit tests and fix the errors. Once all the code passes the unit tests the you are able to start the app by doing `npm start`.

In order make easier Redux we have created a simplified version of `redux` and `react-redux`. Lucky you we have some easy bugs in our simplified version of `redux`and `react-redux` and some tests that caught those mistakes.

- execute `npm test`

## Second part of the exercise, improve the app.

1. Replace our simplified version of `react` and `react-redux` with https://github.com/reactjs/redux and https://github.com/reactjs/react-redux now that you understood how it works. The official ones have cooler features that you should try ;)

2. Implement the reducers for the cart feature (components/cart/Basket.js). Tip, you need to combine the reducers using https://github.com/reactjs/redux/blob/master/src/combineReducers.js

3. Implement the actions for the cart feature (components/cart/Basket.js)

4. Connect the components/cart/Basket.js to the store. Try to bind the action creators with dispatch (https://github.com/reactjs/react-redux/blob/master/src/utils/wrapActionCreators.js)

5. Move the state of components/App.js (this.state.isSideMenuOpen) to the store
