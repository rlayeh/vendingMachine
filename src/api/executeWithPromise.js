import resultState from "./resultState"

const triggerWithResult = (result, resolve, reject) => {
  if (result && result.state === resultState.error){
    reject(result)
    return
  }
  resolve(result)
}

export default func => 
  new Promise( (resolve, reject) => {
    triggerWithResult(func(), resolve, reject)
  })
