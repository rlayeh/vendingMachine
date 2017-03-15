import { connect } from 'react-redux'
import React from 'react'
import cx from "classnames";

import InsertedCounter from "../../components/insertedCounter/insertCounter"
import Message from "../../components/message/message"
import Products from "../../components/products/products"
import Wallet from "../../components/wallet/wallet"
import { restart, hideMessage, insertCoin, returnCoins, executeBuy} from "../../actions"

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
    <section className={cls.topSection}>
      <div className={cls.content}>
        <nav className={cls.navBar}>
          <span className={cx(cls.appReset, "button")} onClick={() => dispatch(restart())}>Reset Vending Machine</span>
        </nav>
        <div className={cls.walletWrapper}>
          <Wallet wallet={wallet} onClick={ammount => dispatch(insertCoin(ammount))} />
          <InsertedCounter inserted={getInsertedAmmount(inserted)} onReset={() => dispatch(returnCoins())} />
        </div>
      </div>
    </section>
    <section className={cls.productsWrapper}>
      <div className={cls.content}>
        <Products products={products} onClick={productId=>dispatch(executeBuy(productId, inserted))} />
      </div>
    </section>
    <Message message={message} onClick={() => dispatch(hideMessage())} />
  </div>


Machine = connect(
  mapStateToProps
)(Machine)

export default Machine
