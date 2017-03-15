import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import vendingMachine from './reducers'
import { fetchWallet, fetchProducts } from "./actions"

import Machine from "./containers/machine/machine"

let store = createStore(
  vendingMachine,
  applyMiddleware(
    thunkMiddleware
  ))

render(
  <Provider store={store}>
    <Machine />
  </Provider>,
  document.getElementById('root')
)

store.dispatch(fetchWallet());
store.dispatch(fetchProducts());
