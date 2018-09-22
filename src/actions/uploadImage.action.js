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
        Alert.alert(
          'Susi says',
          'Upload image success',
          [
            {text: 'OK', onPress: () => this.props.navigation.navigate('Home')}
          ]
        )
        
        console.log('hasil upload ==>', data)
      })
      .catch((err) => console.log('Error from uploadImage ==>', err))
  }
}