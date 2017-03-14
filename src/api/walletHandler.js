import resultState from "./resultState"


const getChangeCoins = (rest) => {
  return {
    "5": Math.floor(rest / 5),
    "2": Math.floor((rest % 5) / 2),
    "1": (rest % 5) % 2
  }
}

const getPaidAmmount = payment =>
  5 * (payment["5"] || 0) + 2 * (payment["2"] || 0) + (payment["1"] || 0)

const updateValue = (paymentVal, changeVal, walletVal) =>
  Math.max(walletVal - paymentVal + changeVal, 0)

const updateValues = (payment, change, wallet) => {
  return {
    "5": updateValue(payment["5"], change["5"], wallet["5"]),
    "2": updateValue(payment["2"], change["2"], wallet["2"]),
    "1": updateValue(payment["1"], change["1"], wallet["1"])
  }
}

export const getUpdatedWallet = (payment, price, wallet) =>
  updateValues(payment, getChangeCoins(getPaidAmmount(payment) - price), wallet)

export const checkPrice = (price, payment) => {
  if (getPaidAmmount(payment) < price) {
    return {
      message: "Not enough money. Please insert more coins!",
      state: resultState.error
    }
  }

  return null
}
