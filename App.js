import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import CameraPicker from './src/components/CameraPicker';
import { createStackNavigator } from 'react-navigation'

const RootStack = createStackNavigator({
  Camera: {
    screen: CameraPicker
  }
})

export default class App extends Component {
  state = {
    imageUri: null
  }

  render() {
    return (
      <View>
        <CameraPicker/>
      </View>
    )
  }
}
