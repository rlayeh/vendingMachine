import React, { PropTypes }  from "react"
import cls from "./coin.css"

 const Coin = ({value, ammount, onClick}) => 
  <div className={cls.wrapper}>
     <div className={cls.shape} onClick={onClick}>
      <span className={cls.value}>{value}</span>
    </div>
    <span className={cls.ammount}>{ammount}</span>
  </div>

Coin.propTypes = {
  value: PropTypes.string.isRequired,
  ammount: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Coin
