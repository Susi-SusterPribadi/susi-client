import React, { Component } from 'react';
import { ScrollView ,Platform, StyleSheet, View, Text, TextInput, TouchableOpacity, Image, Button, Dimensions, AsyncStorage } from 'react-native';
import { Container, Card} from 'native-base';
import logo from "../../assets/img/logo.png"
import axios from 'axios'
import { baseURL } from '../config' 

const { width, height } = Dimensions.get('window');

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      eror: ''
    };
  }

  toHome = () => {
    this.props.navigation.navigate('App')
  }

  toSignup = () => {
    this.props.navigation.navigate('App')
  }

  signin = () => {
    console.log('ini email', this.state.email);
    console.log('ini email', this.state.password);

    axios.post(baseURL+ 'auth', {
      email: this.state.email,
      password: this.state.password
    })
    .then(result => {
      console.log(result);
      AsyncStorage.setItem('authorization', result.data.authorization)
      AsyncStorage.setItem('email', result.data.email)
      AsyncStorage.setItem('id', result.data.id)
      AsyncStorage.setItem('name', result.data.name)
      this.setState({
        email: '',
        password: ''
      })
      this.toHome()
    })
    .catch(err => {
      console.log(err.response.data.msg);
      this.setState({
        eror: err.response.data.msg
      })
    })
  }

  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
        <View style={styles.imagePlace}>
          <Image source={logo} style={styles.logo} />
        </View>
        <View style={styles.signinbox}>
          <Text style={styles.title}>Susi</Text>
          <Text style={styles.eror}>{this.state.eror}</Text>
          <TextInput placeholder="Email" keyboardType={'email-address'} placeholderTextColor="white" style={styles.inputbox} onChangeText={(email) => this.setState({ email })}/>
          <TextInput placeholder="Password" placeholderTextColor="white" style={styles.inputbox} onChangeText={(password) => this.setState({ password })} secureTextEntry={true}/>
          <TouchableOpacity style={styles.button} onPress={() => this.signin()}>
            <Text style={{color: '#7BC342', fontWeight: 'bold', textAlign: 'center'}}>SIGN IN</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}>
            <Text style={styles.move}>Don't have an account ? Sign Up Here</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15BE59',
    justifyContent: 'center',
    height: height
  },
  imagePlace: {
    flex: -1,
    height: height * 0.35
  },
  signinbox: {
    flex: 1,
    width: 350,
    backgroundColor: 'transparent',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderWidth: 0,
    borderColor: 'transparent',
  },
  inputbox: {
    width: '85%',
    borderColor: 'white',
    borderWidth: 1 ,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    fontSize: 17,
    color: 'white'
  },
  title: {
    textAlign: 'center',
    fontSize: 45,
    color: 'white',
    fontFamily: 'sacramento'
  },
  button: {
    backgroundColor: '#fff',
    color: '#15BE59',
    marginTop: 30,
    padding: 14,
    width: '85%',
    marginLeft: '9%',
    borderRadius: 30
  },
  move: {
    color: 'white',
    marginLeft: 'auto',
    marginRight:'auto',
    marginTop: 20,
    fontSize: 15
  },
  logo: {
    width: 120,
    height: height * 0.2,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: height * 0.15
  }, 
  eror: {
    color: '#F44336',
    textAlign:'center',
    fontSize: width * 0.04
  }
})

export default SignIn;