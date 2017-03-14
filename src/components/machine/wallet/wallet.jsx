import React, { PropTypes } from "react"
import cls from "./wallet.css"

import Coin from "./coin/coin"

const Wallet = ({wallet, onClick}) =>
  <div className={cls.wrapper}>
    {
      Object.keys(wallet).map(key => 
        <Coin
          key={key}
          value={key}
          ammount={wallet[key]}
          onClick={()=>onClick(key)}
        />
      )
    }
  </div>

Wallet.propTypes = {
  wallet: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Wallet
