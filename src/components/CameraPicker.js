import React, { Component } from 'react';
import { 
  Image, 
  View, 
  Alert, 
  ProgressBarAndroid, 
  TouchableOpacity, 
  StyleSheet,
  AsyncStorage 
} from 'react-native'
import { Text, Button } from 'native-base'
import ImagePicker from 'react-native-image-picker'
import Icon from 'react-native-vector-icons/FontAwesome'
import uploadImage from '../actions/uploadImage.action'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    dataUpload: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    uploadingImage: (formData) => {
      dispatch(uploadImage(formData))
    }
  }
}

const options = {
  title: 'Options',
  takePhotoButtonTitle: 'Camera',
  chooseFromLibraryButtonTitle: 'Gallery',
}

class CameraPicker extends Component {
  static navigationOptions = {
    title: 'Camera Susi'
  }
  constructor(props) {
    super(props)
    this.state = {
      avatarSource: null,
      pic: null,
      filename: null,
      type: null,
      uri: null,
      url: null
    }
  }

  showImg = () => {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response', response)

      if (response.didCancel) {
        console.log("User cancelled image picker")
      } else if (response.error) {
        console.log('Image picker error: ', response.error)
      } else {
        let source = { uri: response.uri }

        this.setState({
          avatarSource: source,
          filename: response.fileName,
          type: response.type,
          pic: response.data,
          uri: response.uri
        })
      }
    })
  }

  uploadImage = async () => {
    try {
      const token = await AsyncStorage.getItem('authorization')
      let formData = new FormData()
      let type = this.state.type
      formData.append('image', { uri: this.state.uri, name: this.state.filename, type })
      this.props.uploadingImage({
        formData: formData,
        auth: token
      })
      console.log('props loading uploadImage =>', this.props.dataUpload.uploadImage.loading)
    } catch(err) {
      console.log('error from camera picker ==>', err)
    }
  }

  render() {
    const { avatarSource } = this.state
    return (
      <View>
        <View style={{marginLeft: 5, marginBottom: 5, marginRight: 5, marginTop: 5}}>
        {
          avatarSource &&
          <Image
            source={avatarSource}
            style={{width: "100%", height: 300}}
          />
        }
          <Button onPress={this.showImg} block success style={{marginTop: 10}}>
            <Icon
              name="camera-retro"
              size={30}
              color="#fff"
            />
            <Text>Choose Image</Text>
          </Button>
          {
            this.state.avatarSource ?
            <Button onPress={this.uploadImage} style={{marginTop: 10}} block success>
              {
                this.props.dataUpload.uploadImage.loading ? 
                <ProgressBarAndroid/> :
                this.props.dataUpload.uploadImage.success ? 
                Alert.alert(
                  'Susi says',
                  'Image upload success',
                  [
                    {text: 'Cancel', onPress: () => {
                      this.props.navigation.navigate('Camera')
                      this.setState({
                        avatarSource: null,
                        pic: null,
                        filename: null,
                        type: null,
                        uri: null,
                        url: null
                      })
                    }},
                    {text: 'OK', onPress: () => this.props.navigation.navigate('Home')}
                  ]
                ) :
                <Icon 
                  name="upload"
                  size={30}
                  color="#FFF" 
                />
              }
              <Text>Upload Image</Text>
            </Button> : <Text></Text>
          }
        </View>
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CameraPicker)