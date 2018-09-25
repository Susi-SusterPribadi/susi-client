const removeState = store => next => action => {
  console.log('masuk removeState ==>')
  if (action.type !== "REMOVE_STATE") {
    console.log('masuk if removeState ')
    store.dispatch({ type: "REMOVE_STATE" })
  }
  next(action)
} 

export default removeState