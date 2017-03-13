import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import vendingMachine from './reducers'

import Machine from "./components/machine/machine"

let store = createStore(vendingMachine)

render(
  <Provider store={store}>
    <Machine />
  </Provider>,
  document.getElementById('root')
)
