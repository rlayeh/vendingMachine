import { connect } from 'react-redux'
import React from 'react'
import InsertedCounter from "./insertedCounter/insertCounter"
import Message from "./message/message"
import Products from "./products/products"
import Wallet from "./wallet/wallet"
import { restart, insertCoin, returnCoins, executeBuy} from "../../actions"

import cls from "./machine.css"

const mapStateToProps = (state, ownProps) => {
  return {
    wallet: state.wallet.wallet,
    inserted: state.wallet.insertedCoins,
    products: state.products,
    message: state.machine.message
  }
}

const getInsertedAmmount = inserted =>
  5 * (inserted["5"] || 0) + 2 * (inserted["2"] || 0) + (inserted["1"] || 0)

let Machine = ({ wallet, inserted, products, message, dispatch }) => 
  <div className={cls.wrapper}>
    <div className={cls.appReset}>Reset Vending Machine</div>
    <div className={cls.walletWrapper}>
      <Wallet wallet={wallet} onClick={ammount => dispatch(insertCoin(ammount))} />
      <InsertedCounter inserted={getInsertedAmmount(inserted)} onReset={() => dispatch(restart())} />
    </div>
    {message && <Message message={message} />}
    <Products products={products} onClick={productId=>dispatch(executeBuy(productId, inserted))} />
  </div>


Machine = connect(
  mapStateToProps
)(Machine)

export default Machine
