export default function removeState() {
  return (dispatch) => {
    dispatch({ type: "REMOVE_STATE" })
    console.log('removeState dari action')
  }
}