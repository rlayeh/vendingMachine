import { actions } from "../actions"
const defaultState = {}

const exampleReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'EXAMPLE_ACTION':
      return Object.assign({}, state)
    default:
      return state
  }
}

export default exampleReducer
