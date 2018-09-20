import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
<<<<<<< HEAD
<<<<<<< HEAD
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
        <Text style={styles.username}>Mickey</Text>
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
=======
import Camera from './src/components/Camera';
=======
import CameraPicker from './src/components/CameraPicker';
import { createStackNavigator } from 'react-navigation'

const RootStack = createStackNavigator({
  Camera: {
    screen: CameraPicker
  }
})
>>>>>>> Bug fixing camera

export default class App extends Component {
  state = {
    imageUri: null
  }

<<<<<<< HEAD
  setImage = (image) => {
    console.log('dari setImage ==>', image.uri)
    this.setState({ imageUri: image.uri })
  }

>>>>>>> add component camera
=======
>>>>>>> Bug fixing camera
  render() {
    return (
<<<<<<< HEAD
      <SwitchNav/>
    );
=======
      <View>
        <CameraPicker/>
      </View>
    )
>>>>>>> add component camera
  }
}
<<<<<<< HEAD

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
    borderRadius: 50
  },
  username: {
    color: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 15,
    fontSize: 17
  }
});
=======
>>>>>>> Bug fixing camera
