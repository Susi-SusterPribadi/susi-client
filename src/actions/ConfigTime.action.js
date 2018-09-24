import axios from 'axios'

export default function configTime(data) {
  return (dispatch) => {
    const { 
      timeMorning,
      timeAfternoon,
      timeNight,
      userId,
      token
    } = data
    dispatch({ type: 'SETTING_TIME_REQUEST' })
    console.log('from action config data ==>', data)
    axios({
      method: 'POST',
      url: `http://susi-api.arisupriatna.com/config?userId=${userId}`,
      headers: {
        authorization: token
      },
      data: {
        morning: timeMorning,
        afternoon: timeAfternoon,
        night: timeNight
      }
    })
    .then(({ data }) => {
      console.log('masuk then ==>', data)
      dispatch({ type: 'SETTING_TIME_SUCCESS', payload: data })
    })
    .catch((err) => {
      dispatch({ type: 'SETTING_TIME_FAILED', payload: err })
      console.log('masuk catch =>', err)
    })

  }
}