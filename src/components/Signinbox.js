import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Container, Card, Button} from 'native-base';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      email: '',
      password: ''
    };
  }

  render() {
    return (
      <View style={styles.signinbox}>
          <Text style={styles.title}>Sign In</Text>
          <TextInput placeholder="Email" placeholderTextColor="white" style={styles.inputbox} onChangeText={(email) => this.setState({ email })}/>
          <TextInput placeholder="Password" placeholderTextColor="white" style={styles.inputbox} onChangeText={(password) => this.setState({ password })}/>
          <Button block style={styles.button} onPress={this.props.move}>
            <Text style={{color: '#7BC342'}}>SUBMIT</Text>
          </Button>
          <TouchableOpacity onPress={() => this.props.show()}>
          <Text style={styles.move}>Already have an account ? Sign Up Here</Text>
          </TouchableOpacity>
        </View>
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
  },
  move: {
    color: 'white',
    marginLeft: 'auto',
    marginRight:'auto',
    marginTop: 20,
    fontSize: 15
  }
})

export default SignIn;
