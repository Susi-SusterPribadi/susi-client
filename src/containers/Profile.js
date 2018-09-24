import React, { Component } from 'react';
import {
  ScrollView,
  Platform,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  AsyncStorage
} from 'react-native';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title
} from 'native-base';
import ava from '../../assets/img/ava.png'
import LinearGradient from 'react-native-linear-gradient'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

const { width, height } = Dimensions.get('window');

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: '',
      email: '',
      id: '',
      name: '',
      birthdate: ''
    }
  }

  componentDidMount() {
    this._bootstrapAsync()
  }

  _bootstrapAsync = async () => {
    console.log('masuk');
    let token = await AsyncStorage.getItem('authorization')
    let email = await AsyncStorage.getItem('email')
    let id = await AsyncStorage.getItem('id')
    let name = await AsyncStorage.getItem('name')
    let birthdate = await AsyncStorage.getItem('birthdate')

    this.setState({
      token: token,
      email: email,
      id: id,
      name: name,
      birthdate: birthdate.split("T")[0]
    })
  };

  render() {
    return (
      <React.Fragment>
          <LinearGradient colors={['#6BF098', '#00D448']} style={{ height: '60%' }}>
          <TouchableOpacity onPress={this.props.navigation.toggleDrawer}>
            <Icon name='menu' style={styles.menu} />
          </TouchableOpacity>
            
            <View style={styles.divider}>
              <TouchableOpacity style={styles.editbutton}>
                <Text style={styles.buttontext}>
                  EDIT PROFILE
              </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.box}>
              <Image source={ava} style={styles.avatarbox} />
            </View>
          </LinearGradient>
          <View style={styles.identity} >
            <View style={styles.identitytext}>
              <Text style={styles.name}>
                <Icons name="account" size={30} color="green"></Icons>  {this.state.name}
              </Text>
              <Text style={styles.name}>
                <Icons name="calendar" size={30} color="green"></Icons>  {this.state.birthdate}
              </Text>
              <Text style={styles.name}>
                <Icons name="gmail" size={30} color="green"></Icons>  {this.state.email}
              </Text>
            </View>
          </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  textHeader: {
    fontFamily: 'sacramento',
    color: 'white',
    textAlign: 'center',
    fontSize: 40,
    marginLeft: '20%',
    marginRight: 'auto'
  },
  avatarbox: {
    width: '77%',
    height: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    borderRadius: 100
  },
  box: {
    width: '40%',
    height: '40%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 100,
    borderStyle: 'dashed',
    borderWidth: 1.2,
    borderColor: '#008A2F'
  },
  divider: {
    height: '15%'
  },
  editbutton: {
    width: '25%',
    borderRadius: 4,
    borderWidth: 1.25,
    marginTop: 'auto',
    marginBottom: 'auto',
    borderColor: '#008A2F',
    marginLeft: '68%'
  },
  buttontext: {
    fontSize: 13,
    textAlign: 'center',
    padding: 5,
  },
  identity: {
    width: '85%',
    height: '50%',
    backgroundColor: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 20,
    marginTop: '-25%',
    elevation:4,
    shadowOffset: { width: 7, height: 5 },
    shadowColor: "grey",
    shadowOpacity: 0.5,
    shadowRadius: 15,
  },
  menu: {
    fontSize: 35,
    color: '#008A2F',
    marginLeft: '5%',
    marginTop: '5%'
  },
  identitytext: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '20%',
  },
  name: {
    fontSize: 20,
    marginTop: 5
  },
  iden: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'blue'
  }
})

export default Profile;