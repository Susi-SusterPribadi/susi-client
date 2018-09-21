import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, TextInput, TouchableOpacity, Image, Button } from 'react-native';
import { Container, Card} from 'native-base';
import logo from "../../assets/img/logo.png"


class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  toHome = () => {
    this.props.navigation.navigate('App')
  }

  toSignup = () => {
    this.props.navigation.navigate('Signup')
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={logo} style={styles.logo}/>
        <View style={styles.signinbox}>
          <Text style={styles.title}>Susi</Text>
          <TextInput placeholder="Email" placeholderTextColor="white" style={styles.inputbox} onChangeText={(email) => this.setState({ email })}/>
          <TextInput placeholder="Password" placeholderTextColor="white" style={styles.inputbox} onChangeText={(password) => this.setState({ password })}/>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('App')}>
            <Text style={{color: '#7BC342', fontWeight: 'bold', textAlign: 'center'}}>SIGN IN</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}>
            <Text style={styles.move}>Don't have an account ? Sign Up Here</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15BE59',
    justifyContent: 'center'
  },
  signinbox: {
    marginTop: 'auto',
    width: 350,
    backgroundColor: 'transparent',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 'auto',
    height: 350,
    borderWidth: 0,
    borderColor: 'transparent'
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
  },
  title: {
    textAlign: 'center',
    fontSize: 45,
    marginTop: 30,
    marginBottom: 10,
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
    height: '20%',
    marginLeft: 'auto',
    marginRight: 'auto',
    top: '17%'
  }
})

export default SignIn;