import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, TextInput } from 'react-native';
import { Container, Card, Button} from 'native-base';
import SignInBox from '../components/Signinbox'
import SignUpBox from '../components/Signupbox'

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
  }

  box = () => {
    return this.state.visible ? <SignInBox move={this.moveToHome} show={this.showSignUp}/> : <SignUpBox  move={this.moveToHome} show={this.showSignIn}/>
  }

  showSignUp = () => {
    this.setState({
      visible: false
    })
  }

  showSignIn = () => {
    this.setState({
      visible: true
    })
  }

  moveToHome = () => {
    this.props.navigation.navigate('App')
  }

  render() {
    return (
      <Container style={styles.container}>
        {this.box()}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7BC342'
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
    fontSize: 20,
    marginTop: 30,
    marginBottom: 10,
    color: 'white'
  },
  button: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '85%',
    marginTop: 50,
    backgroundColor: 'white'
  }
})

export default SignIn;