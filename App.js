import React, { Component } from 'react';
import { 
  Platform, 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableOpacity,
  AsyncStorage 
} from 'react-native';
import { 
  createSwitchNavigator, 
  createStackNavigator, 
  createDrawerNavigator, 
  DrawerItems,
  NavigationActions 
} from 'react-navigation';
import { Provider } from 'react-redux'
import HomeScreen from './src/containers/Home'
import SignInScreen from './src/containers/SignIn'
import SettingScreen from './src/containers/Setting'
import Prescription from './src/containers/Prescription'
import CameraPicker from './src/components/CameraPicker';
import SignUpScreen from './src/containers/Signup'
import SplashScreen from './src/containers/Splash'
import SignoutScreen from './src/containers/Signout'
import ProfileScreen from './src/containers/Profile'
import store from './src/store/index'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

const Opendrawer = (props) => {
  return (
    <View >
      <TouchableOpacity style={styles.menu} onPress={() => { props.navigate.toggleDrawer() }}>
        <Icon name="menu" size={30} color="white" />
      </TouchableOpacity>
    </View>
  )
}
 const CameraButton = (props) => {
  return (
    <TouchableOpacity style={styles.cam} onPress={() => { props.navigate.navigate('Camera')}}>
        <Icon name="add-a-photo" size={30} color="white" />
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

let name = ''

const AppDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: ({ navigation }) => ({
      drawerIcon: <Icon name="home" size={25} color="white"></Icon>,
    })
  },
  Profile:{
    screen: ProfileScreen,
    navigationOptions: ({navigation}) => ({
      drawerIcon: <Icons name="account" size={25} color="white"></Icons>,
    })
  },
  Prescription: {
    screen: Prescription,
    navigationOptions: ({ navigation }) => ({
      drawerIcon: <Icon name="schedule" size={25} color="white"></Icon>,
    })
  },
  Setting: {
    screen: SettingScreen,
    navigationOptions: ({ navigation }) => ({
      drawerIcon: <Icon name="settings" size={25} color="white"></Icon>
    })
  },
  Logout: {
    screen: SignoutScreen,
    navigationOptions: ({navigation}) => ({
      drawerIcon: <Icons name="logout" size={25} color="white"></Icons>
    })
  }
}, {
    contentComponent: (props) => (
      <View style={styles.drawercontainer}>
        <View style={styles.drawer}>
          <Image source={{ uri: 'https://i.pinimg.com/564x/10/3c/09/103c097872200038dd538c8f7e56403e.jpg' }} style={styles.avatar} />
          <Text style={styles.username}>{name}</Text>
        </View>
        <DrawerItems activeBackgroundColor="#5FD68F" activeTintColor='#007E33' inactiveTintColor="white" {...props} />
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

_bootstrapAsync = async () => {
  console.log('masuk');
  
  const nameUser = await AsyncStorage.getItem('name')

  name = nameUser
};

export default class App extends Component {

  constructor(props){
    super(props)
    _bootstrapAsync()
  }

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
    backgroundColor: '#15BE59'
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
  },
  logoutbox: {
    marginLeft: '6%'
  },
  logout: {
    color: 'black',
    fontWeight: 'bold'
  },
  drawercontainer: {
    backgroundColor: '#15BE59',
    height: '100%'
  },
  items: {
    color: 'white'
  }
});
