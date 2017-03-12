import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'

import Example from "./example/example"

let store = createStore(reducers)

render(
  <Provider store={store}>
    <Example />
  </Provider>,
  document.getElementById('root')
)
