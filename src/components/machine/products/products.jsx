import React, { PropTypes } from "react"
import cls from "./products.css"

import Product from "./product/product"

const Products = ({ products }) =>
  <div className={cls.wrapper}>
    {
      Object.keys(products).map(key =>
        <Product 
          name={products[key].name} 
          ammount={products[key].ammount}
          price={products[key].price}
          type={products[key].type}
          onClick={() => onClick(key)} 
        />
      )
    }
  </div>

Products.propTypes = {
  products: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Products
