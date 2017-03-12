const STORAGE_KEY = "VendingMachineApi"

const defaultData = {
  wallet: {
    "5": 1,
    "2": 2,
    "1": 2
  },
  products: {
    "1": {
      name: "sinkers",
      ammount: 4,
      price: 2
    },
    "2": {
      name: "masr",
      ammount: 3,
      price: 2
    },
    "3": {
      name: "bobnty",
      ammount: 7,
      price: 2
    },
    "4": {
      name: "apple juice",
      ammount: 8,
      price: 3
    },
    "5": {
      name: "Koka Kola",
      ammount: 4,
      price: 4
    },
    "5": {
      name: "Bebsi",
      ammount: 9,
      price: 4
    }
  }
}

export const getData = (storage) => {
  return JSON.parse(storage.getItem(STORAGE_KEY)) || defaultData
}

export const setData = (data, storage) => {
  storage.setItem(STORAGE_KEY, JSON.stringify(data))
}

export const reset = (storage) => {
  storage.removeItem(STORAGE_KEY)
}
