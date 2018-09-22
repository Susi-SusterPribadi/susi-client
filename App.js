import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { createSwitchNavigator, createStackNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation';
import { Provider } from 'react-redux'
import HomeScreen from './src/containers/Home'
import SignInScreen from './src/containers/SignIn'
import SettingScreen from './src/containers/Setting'
import Prescription from './src/containers/Prescription'
<<<<<<< c54e8c4e15204226336cc031c759104b1b698395
import CameraPicker from './src/components/CameraPicker'
import SignUpScreen from './src/containers/Signup'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
=======
import CameraPicker from './src/components/CameraPicker';
import SignUpScreen from './src/containers/Signup'
import SplashScreen from './src/containers/Splash'
>>>>>>> splash done
import store from './src/store/index'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

const Opendrawer = (props) => {
  return (
    <View >
      <TouchableOpacity style={styles.menu} onPress={() => { props.navigate.toggleDrawer() }}>
        <Icon name="menu" size={25} color="white" />
      </TouchableOpacity>
    </View>
  )
}
 const CameraButton = (props) => {
  return (
    <TouchableOpacity style={styles.cam} onPress={() => { props.navigate.navigate('Camera')}}>
        <Icon name="camera" size={30} color="white" />
    </TouchableOpacity>
  )
}


const Opendrawer = (props) => {
  return (
    <View >
      <TouchableOpacity style={styles.menu} onPress={() => { props.navigate.toggleDrawer() }}>
        <Icon name="menu" size={25} color="white" />
      </TouchableOpacity>
    </View>
  )
}

const CameraButton = (props) => {
  return (
    <TouchableOpacity style={styles.cam} onPress={() => { props.navigate.navigate('Camera')}}>
        <Icon name="camera" size={30} color="white" />
    </TouchableOpacity>
  )
}

const AuthStack = createStackNavigator(
  {
    Signin: SignInScreen,
    Signup: SignUpScreen
  },
  {
    headerMode: 'none'
  },
);

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: <Text style={styles.textHeader}>Susi</Text>,
      headerLeft: <Opendrawer navigate={navigation} />,
      headerRight: <CameraButton navigate={navigation}/>,
      headerStyle: {
        backgroundColor: '#15BE59'
      }
    })

  },
  Camera: {
    screen: CameraPicker,
    navigationOptions: ({ nnavigation }) => ({
      headerTintColor: 'white',
      headerTitle: <Text style={styles.textHeader}>Susi</Text>,
      headerStyle: {
        backgroundColor: '#15BE59'
      }
    })
  }
})

const AppDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack
  },
  Setting: SettingScreen,
  Prescription: Prescription
}, {
    contentComponent: (props) => (
      <View>
        <View style={styles.drawer}>
          <Image source={{ uri: 'https://i.pinimg.com/564x/10/3c/09/103c097872200038dd538c8f7e56403e.jpg' }} style={styles.avatar} />
          <Text style={styles.username}>Mickey</Text>
        </View>
        <DrawerItems {...props} />
      </View>
    )
  })

const SwitchNav = createSwitchNavigator(
  {
    Splash: SplashScreen,
    App: AppDrawerNavigator,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Splash'
  }
)


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SwitchNav/>
      </Provider>
    )
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
    borderRadius: 50
  },
  username: {
    color: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 15,
    fontSize: 17
  },
  textHeader: {
    fontFamily: 'sacramento',
    color: 'white',
    textAlign: 'center',
    fontSize: 40,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  menu: {
    marginLeft: 20
  },
  cam: {
    marginRight: 15
  }
});
