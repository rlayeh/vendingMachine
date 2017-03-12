import { actions } from "../actions"
const defaultState = {}

const products = (state = defaultState, action) => {
  switch (action.type) {
    case actions.productsReceived:
      return Object.assign({}, action.products)
    default:
      return state
  }
}

export default products
