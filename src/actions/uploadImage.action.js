import axios from 'axios'
import { Alert } from 'react-native'

export default function uploadImage(formData) {
  return (dispatch) => {
    dispatch({ type: 'UPLOAD_IMAGE_REQUEST' })
    axios({
      method: 'POST',
      url: 'http://susi-api.arisupriatna.com/aws/uploads3',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: formData
    })
      .then(({data}) => {
        dispatch({ type: 'UPLOAD_IMAGE_SUCCESS', payload: data })
        console.log('hasil upload ==>', data)
      })
      .catch((err) => {
        dispatch({ type: 'UPLOAD_IMAGE_FAILED', payload: err.message })
      })
  }
}