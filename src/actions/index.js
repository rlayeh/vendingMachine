import { getWallet, getProducts, buy, reset } from "../api/apiConnector"

export const actions = {
  insertCoin: "INSERT_COIN",
  getWallet: "GET_WALLET",
  getProducts: "GET_PRODUCTS",
  returnCoins: "RETURN_COINS",
  walletReceived: "WALLET_RECEIVED",
  productsReceived: "PRODUCTS_RECEIVED",
  buy: "BUY",
  error: "ERROR"
}

const walletReceived = wallet => {
  return {
    type: actions.walletReceived,
    wallet
  }
}

const productsReceived = products => {
  return {
    type: actions.productsReceived,
    products
  }
}

const error = message => {
  return {
    type: actions.error,
    message
  }
}

export const insertCoin = value => {
  return {
    type: actions.insertCoin,
    value
  }
}

export const returnCoins = () => {
  return {
    type: actions.returnCoins
  }
}

export const getWallet = () => {
  return dispatch => {
    getWallet()
      .then(wallet => dispatch(walletReceived(wallet)))
      .catch(exception => {
        throw exception
      })
  }
}

export const getProducts = () => {
  return dispatch => {
    getProducts()
      .then(products => dispatch(walletReceived(products)))
      .catch(exception => {
        dispatch(error(exception.message));
      })
  }
}

export const buy = (productId, payment) => {
  return dispatch => {
    buy(productId, payment)
      .then(() => {
        dispatch(getWallet());
        dispatch(getProducts());
      })
      .catch(exception => {
        dispatch(error(exception.message));
      })
  }
}
