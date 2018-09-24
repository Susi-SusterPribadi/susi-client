import axios from 'axios'

export default function getDataTime(data) {
  return (dispatch) => {
    const { token, userId } = data
    console.log(' ==> dari action getDataTime', data)
    dispatch({ type: 'GET_DATA_TIME_REQUEST' })
    axios({
      method: 'GET',
      url: `http://susi-api.arisupriatna.com/config?userId=${userId}`,
      headers: {
        authorization: token
      }
    })
    .then(({data}) => {
      console.log('data dari action getDataTime masuk then =>>', data.response)
      dispatch({ type: 'GET_DATA_TIME_SUCCESS', payload: data.response })
    })
    .catch((err) => {
      console.log('error dari action getDataTime ==>', err)
      dispatch({ type: 'GET_DATA_TIME_FAILED', payload: err })
    })
  }
}