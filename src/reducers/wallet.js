import { actions } from "../actions"
const defaultState = {
  wallet: {},
  insertedCoins: {
    "5": 0,
    "2": 0,
    "1": 0
  }
}

const wallet = (state = defaultState, action) => {
  switch (action.type) {
    case actions.insertCoin:
      return Object.assign({}, state, {
        insertedCoins: Object.assign({}, state.insertedCoins, {
          [action.value]: state.wallet[action.value] > 0 ? state.insertedCoins[action.value] + 1 : state.insertedCoins[action.value]
        }),
        wallet: Object.assign({}, state.wallet, {
          [action.value]: state.wallet[action.value] > 0 ? state.wallet[action.value] - 1 : 0
        })
      })
    case actions.walletReceived:
      return Object.assign({}, state, {
        wallet: action.wallet,
        insertedCoins: {
          "5": 0,
          "2": 0,
          "1": 0
        }
      })
    default:
      return state
  }
}

export default wallet
