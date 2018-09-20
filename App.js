import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import { createSwitchNavigator, createStackNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';
import HomeScreen from './src/containers/Home'
import SignInScreen from './src/containers/SignIn'
import SettingScreen from './src/containers/Setting'
import Prescription from './src/containers/Prescription'

const drawer = DrawerNavigator({
  Home: {
    screen: HomeScreen
  },
  Setting: SettingScreen,
  Prescription: Prescription
}, {
  contentComponent: (props) => (
    <View>
      <View style={styles.drawer}>
        <Image source={{uri: 'https://i.pinimg.com/564x/10/3c/09/103c097872200038dd538c8f7e56403e.jpg'}} style={styles.avatar}/>
      </View>
      <DrawerItems {...props} />
    </View>
  )
})

// const AppStack = createStackNavigator({
//   Home:{
//     screen: drawer
//   }
// })

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
    App: drawer,
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
  drawer: {
    width: '100%',
    height: 150,
    backgroundColor: '#7BC342'
  },
  avatar: {
    width: '25%',
    height: '50%',
    marginTop: '5%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 30
  }
});
