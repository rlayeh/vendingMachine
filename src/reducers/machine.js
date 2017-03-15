import { actions } from "../actions"
const defaultState = {
  message: null
}

const machine = (state = defaultState, action) => {
  switch (action.type) {
    case actions.messageReceived:
      return Object.assign({}, state, { message: action.message })
    case actions.messageCleared:
      return Object.assign({}, state, { message: null })
    default:
      return state
  }
}

export default machine
