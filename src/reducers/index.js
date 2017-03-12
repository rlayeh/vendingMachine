import { combineReducers } from "redux"
import products from "./products"
import wallet from "./wallet"
import machine from "./machine"

const vendingMachine = combineReducers({
  products,
  wallet,
  machine
})

export default vendingMachine
