import resultState from "./resultState"

const getUpdatedProduct = product => {
  return {
    name: product.name,
    ammount: product.ammount - 1,
    price: product.price
  }
}


export const getUpdatedProducts = (products, productId) =>
  Object.assign({},products, {
    [productId]: getUpdatedProduct(products[productId])
  })

export const checkAmmount = ammount => {
  if (!ammount) {
    return {
      message: "Product not available!",
      state: resultState.error
    }
  }

  return null
}
