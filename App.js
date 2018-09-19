import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import HomeScreen from './src/containers/Home'
import SignInScreen from './src/containers/signIn'

const AppStack = createStackNavigator(
  {
    Home: HomeScreen 
  },
  {
    navigationOptions: {
      headerVisible: false,
    }
  }
);

const AuthStack = createStackNavigator(
  { 
    SignIn: SignInScreen 
  }, 
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
);

const SwitchNav =  createSwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Auth'
  }
)


export default class App extends Component {
  render() {
    return (
      <SwitchNav/>
    );
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
