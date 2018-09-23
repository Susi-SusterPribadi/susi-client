import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Container, Card, Button, DatePicker } from 'native-base';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: ''
    };
  }

  setDate = (newDate) => {
    console.log('ini new date', newDate);
    console.log('typenya', typeof(newDate));
    
    
    this.setState({ date: newDate });
  }

  render() {
    return (
      <View style={styles.signinbox}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput placeholder="Email" placeholderTextColor="white" style={styles.inputbox} />
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
        <TextInput placeholder="Password" placeholderTextColor="white" style={styles.inputbox} />
        <Button block style={styles.button} onPress={this.props.show}>
          <Text style={{ color: '#7BC342', fontWeight: 'bold' }}>SUBMIT</Text>
        </Button>
        <TouchableOpacity onPress={() => this.props.show()}>
          <Text style={styles.move}>Already have an account ? Sign In Here</Text>
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
    borderWidth: 1,
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
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '85%',
    marginTop: 30,
    backgroundColor: 'white',
    borderRadius: 30
  },
  move: {
    color: 'white',
    marginLeft: 'auto',
    marginRight:'auto',
    marginTop: 20,
    fontSize: 15
  },
  birthdate: {
    borderWidth: 1,
    borderColor: 'white',
    marginTop: 20,
    width: '85%',
    marginLeft: 'auto',
    marginRight:'auto',
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0
  }
})

export default SignUp;