export const actions = {
  exampleAction: "EXAMPLE_ACTION"
}


export const exampleAction = (data) => {
  return {
    type: actions.exampleAction,
    data
  }
}
