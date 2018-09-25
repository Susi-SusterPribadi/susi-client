const removeState = store => next => action => {
  console.log('masuk removeState ==>')
  if (action.type !== "REMOVE_STATE") {
    store.dispatch({ type: "REMOVE_STATE" })
  }
  next(action)
} 

export default removeState