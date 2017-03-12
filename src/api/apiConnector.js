import {getData, setData, reset} from "./fakeDataProvider"
import resultState from  "./resultState"
import executeWithPromise from "./executeWithPromise"
import { getUpdatedWallet, checkPrice } from "./walletHandler"
import { getUpdatedProducts, checkAmmount } from "./productHandler"

const getProduct = (id, storage) => {
  return getData(storage).products[id]
}

const checkState = (product, payment) => 
  checkAmmount(product.ammount) || checkPrice(product.price, payment)

const getUpdatedData = (productId, product, payment, data) => {
  return {
    wallet: getUpdatedWallet(payment, product.price, data.wallet),
    products:getUpdatedProducts(data.products, productId)
  }
}

const updateStorage = (productId, product, payment, storage) =>
  setData(getUpdatedData(productId, product, payment, getData(storage)), storage)

const executeBuy = (productId, product, payment, storage) => {
  updateStorage(productId, product, payment, storage)
  return {
    message: `You succesfully bought ${product.name}!`,
    state: resultState.success
  }
}

const checkAndBuy = (productId, product, payment, storage) => 
  checkState(product, payment) || executeBuy(productId, product, payment, storage)


export const getWallet = (storage = sessionStorage) =>
  executeWithPromise(() => getData(storage).wallet)


export const getProducts = (storage = sessionStorage) =>
  executeWithPromise(() => getData(storage).products)


export const buy = (productId, payment, storage = sessionStorage) => 
  executeWithPromise(() => checkAndBuy(productId, getProduct(productId, storage), payment, storage))

export const reset = (storage = sessionStorage) =>
  executeWithPromise(() => reset(storage))
