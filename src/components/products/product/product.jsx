import React, { PropTypes } from "react"
import cls from "./product.css"

const Product = ({ name, ammount, price, type, onClick }) =>
  <div className={cls.wrapper}>
    <div className={cls.shape}>
      <span className={cls.name}>{name}</span>
    </div>
    <div className={cls.infoWrapper}>
      <span className={cls.ammount}>Ammount: {ammount}</span>
      <span className={cls.price}>Price: {price}</span>
    </div>
    <div className={cls.chooseButton} onClick={onClick}>Choose</div>
  </div>

Product.propTypes = {
  name: PropTypes.string.isRequired,
  ammount: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Product

