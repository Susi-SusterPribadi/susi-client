import React, { Component } from 'react';
import { ScrollView, Platform, StyleSheet, View, Text, TextInput, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Container, Card, Button, DatePicker } from 'native-base';
import logo from "../../assets/img/logo.png"
import axios from 'axios'
import { baseURL } from '../config'

const { width, height } = Dimensions.get('window');

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      name: '',
      email: '',
      password: '',
      erroremail: '',
      errorname: '',
      erropass: ''
    };
  }

  setDate = (newDate) => {

    this.setState({ date: newDate });
  }

  toSignin = () => {
    this.props.navigation.navigate('Signin')
  }

  signup = () => {
    console.log('ini date', this.state.date)
    console.log('ini email', this.state.email)
    console.log('ini name', this.state.name)
    console.log('ini password', this.state.password)

    axios.post(baseURL + 'users', {
      name: this.state.name,
      email: this.state.email,
      birthdate: this.state.date,
      password: this.state.password
    })
      .then(result => {
        this.setState({
          name: '',
          email: '',
          date: '',
          password: ''
        })
        this.props.navigation.navigate('Signin')
      })
      .catch(err => {
        console.log('====================================');
        console.log(err.response);
        console.log('====================================');
      })
  }

  validate = (text, type) => {
    
    
    if (type === 'name') {
      console.log('masuk validate');
      if (text.length == 0) {
        this.setState({
          errorname: 'Name is required',
          name: text
        })
      } else {
        this.setState({
          errorname: '',
          name: text
        })
      }
    } else if (type === 'email') {
      if (text.length == 0) {
        this.setState({
          erroremail: 'Email is required',
          email: text
        })
      } else {
        let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        let val = reg.test(String(text).toLowerCase())
        if (val) {
          this.setState({
            erroremail: '',
            email: text
          })
        } else {
          this.setState({
            erroremail: 'Email must be valid',
            email: text
          })
        }
      }

    } else if(type === 'password'){
      let numtest =  /.*[0-9]/
      if(text.length == 0){
        this.setState({
          erropass: 'Password is required',
          password: text
        })
      } else if(text.length >= 6 && numtest.test(text)){
        this.setState({
          erropass: '',
          password: text
        })

      } else if(text.length >= 6 && !numtest.test(text)) {
        this.setState({
          erropass: 'Password must contain at least 1 number',
          password: text
        })

      } else if(  text.length < 6 && !numtest.test(text)) {
        this.setState({
          erropass: 'Password must be more than 6 characters & contain at least 1 number',
          password: text
        })
      } 
    }
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.imagePlace}>
            <Image source={logo} style={styles.logo} />
          </View>
          <View style={styles.signinbox}>
            <Text style={styles.title}>Sign Up</Text>
            <TextInput placeholder="Name" placeholderTextColor="white" style={styles.inputbox} onChangeText={(text) => this.validate(text, 'name')} />
            <Text style={styles.error}>{this.state.errorname}</Text>
            <TextInput placeholder="Email" placeholderTextColor="white" keyboardType={'email-address'} style={styles.inputbox} onChangeText={(text) => this.validate(text, 'email')} />
            <Text style={styles.error}>{this.state.erroremail}</Text>
            <View style={styles.birthdate}>
              <DatePicker
                defaultDate={new Date()}
                minimumDate={new Date(1600, 1, 1)}
                maximumDate={new Date(2018, 12, 31)}
                locale={"id"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="Birth Date"
                textStyle={{ color: "white" }}
                placeHolderTextStyle={{ color: "white" }}
                onDateChange={this.setDate}
              />
            </View>
            <TextInput placeholder="Password" placeholderTextColor="white" style={styles.inputbox} onChangeText={(text) => this.validate(text, 'password')} secureTextEntry={true} />
            <Text style={styles.error}>{this.state.errorpass}</Text>
            <TouchableOpacity style={styles.button} onPress={() => this.signup()}>
              <Text style={{ color: '#15BE59', fontWeight: 'bold', textAlign: 'center' }}>SIGN UP</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Signin')}>
              <Text style={styles.move}>Already have an account ? Sign In Here</Text>
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
    height: height * 0.25,
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
    borderWidth: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: height * 0.005,
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
    marginTop: 20,
    padding: 14,
    width: '85%',
    marginLeft: '9%',
    borderRadius: 30
  },
  move: {
    color: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
    fontSize: 15
  },
  birthdate: {
    borderWidth: 1,
    borderColor: 'white',
    marginTop: 20,
    width: '85%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0
  },
  logo: {
    width: 120,
    height: height * 0.2,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: height * 0.05
  },
  error: {
    color: '#F44336',
    marginLeft: height * 0.04
  }
})

export default SignIn;