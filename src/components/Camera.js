import React, { Component } from 'react';
import { Image } from 'react-native'
import { Container, Text } from 'native-base'
import ImagePicker from 'react-native-image-picker'
import Icon from 'react-native-vector-icons/FontAwesome'

const options = {
  title: 'Susi Bot',
  takePhotoButtonTitle: 'Take photo with your camera',
  chooseFromLibraryButtonTitle: 'Choose photo from library',
}

export default class Camera extends Component {
  constructor(props) {
    super(props)
    this.state = {
      avatarSource: null,
      pic: null
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
          pic: response.data
        })
        this.props.getPicImage(source)
      }
    })
  }

  render() {
    const { avatarSource } = this.state
    return (
      <Container>
        <Icon
          name="camera-retro"
          size={30}
          onPress={this.showImg}
          color="#000"
        />
      </Container>
    )
  }
}