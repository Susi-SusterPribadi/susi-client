import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, TextInput } from 'react-native';
import { Container, Card, Button} from 'native-base';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container style={styles.container}>
        <Card style={styles.signinbox}>
          <Text style={styles.title}>Sign In</Text>
          <TextInput placeholder="Username" style={styles.inputbox}/>
          <TextInput placeholder="Password" style={styles.inputbox}/>
          <Button block style={styles.button}>
            <Text style={{color: 'white'}}>SUBMIT</Text>
          </Button>
        </Card>
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
    backgroundColor: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 'auto',
    height: 350,
    borderRadius: 3
  },
  inputbox: {
    width: '85%',
    borderColor: 'black',
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
    marginBottom: 10
  },
  button: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '85%',
    marginTop: 50,
    backgroundColor: '#7BC342'
  }
})

export default SignIn;