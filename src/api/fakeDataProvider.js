const STORAGE_KEY = "VendingMachineApi"

const defaultData = () => {
  return {
    wallet: {
      "5": Math.floor((Math.random() * 10) + 2),
      "2": Math.floor((Math.random() * 10) + 2),
      "1": Math.floor((Math.random() * 10) + 2)
    },
    products: {
      "1": {
        name: "sinkers",
        ammount: Math.floor((Math.random() * 10) + 2),
        price: 2
      },
      "2": {
        name: "masr",
        ammount: Math.floor((Math.random() * 10) + 2),
        price: 2
      },
      "3": {
        name: "bobnty",
        ammount: Math.floor((Math.random() * 10) + 2),
        price: 2
      },
      "4": {
        name: "apple juice",
        ammount: Math.floor((Math.random() * 10) + 2),
        price: 3
      },
      "5": {
        name: "Koka Kola",
        ammount: Math.floor((Math.random() * 10) + 2),
        price: 4
      },
      "6": {
        name: "Bebsi",
        ammount: Math.floor((Math.random() * 10) + 2),
        price: 4
      }
    }
  }
}

const storeAndReturn = (dataToStore, storage) => {
  setData(dataToStore, storage)
  return dataToStore
}

const getDefaultOrStored = (storedValue, storage) => {
  if (storedValue) {
    return storedValue
  }

  return storeAndReturn(defaultData(), storage)
}

export const getData = storage =>
  getDefaultOrStored(JSON.parse(storage.getItem(STORAGE_KEY)), storage)


export const setData = (data, storage) =>
  storage.setItem(STORAGE_KEY, JSON.stringify(data))


export const resetStorage = storage => 
  storage.removeItem(STORAGE_KEY)

