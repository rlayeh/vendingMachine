import { getWallet, getProducts, buy, reset } from "../api/apiConnector"

export const actions = {
  getWallet: "GET_WALLET",
  getProducts: "GET_PRODUCTS",
  insertCoin: "INSERT_COIN",
  returnCoins: "RETURN_COINS",
  walletReceived: "WALLET_RECEIVED",
  productsReceived: "PRODUCTS_RECEIVED",
  executeBuy: "BUY",
  messageReceived: "RECEIVED_MESSAGE",
  messageCleared: "MESSAGE_CLEARED"
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

const messageReceived = message => {
  return {
    type: actions.messageReceived,
    message
  }
}

export const hideMessage = () => {
  return {
    type: actions.messageCleared
  }
}

export const restart = () => {
  return dispatch => {
    reset()
      .then(result => {
        dispatch(messageReceived(null));
        dispatch(fetchWallet());
        dispatch(fetchProducts());
      })
      .catch(exception => {
        dispatch(messageReceived(exception.message));
      })
  }
}

export const insertCoin = value => {
  return {
    type: actions.insertCoin,
    value
  }
}

export const returnCoins = () => {
  return dispatch => {
    dispatch(fetchWallet());
  }
}

export const fetchWallet = () => {
  return dispatch => {
    getWallet()
      .then(wallet => dispatch(walletReceived(wallet)))
      .catch(exception => {
        dispatch(messageReceived(exception.message));
      })
  }
}

export const fetchProducts = () => {
  return dispatch => {
    getProducts()
      .then(products => dispatch(productsReceived(products)))
      .catch(exception => {
        dispatch(messageReceived(exception.message));
      })
  }
}

export const executeBuy = (productId, payment) => {
  return dispatch => {
    buy(productId, payment)
      .then(result => {
        dispatch(messageReceived(result.message));
        dispatch(fetchWallet());
        dispatch(fetchProducts());
      })
      .catch(exception => {
        dispatch(messageReceived(exception.message));
        console.log(exception);
      })
  }
}
