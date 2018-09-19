import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import Camera from './src/components/Camera';

export default class App extends Component {
  state = {
    imageUri: null
  }

  setImage = (image) => {
    console.log('dari setImage ==>', image.uri)
    this.setState({ imageUri: image.uri })
  }

  render() {
    const { imageUri } = this.state
    return (
      <View>
        <Camera getPicImage={this.setImage}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
