import React, { Component } from 'react';
import { ScrollView ,Platform, StyleSheet, View, Text, TextInput, TouchableOpacity, Image, Button, Dimensions, AsyncStorage } from 'react-native';
import brand from '../../assets/img/splash.png'

const { width, height } = Dimensions.get('window');

class Splash extends Component {
  constructor(props) {
    super(props);
    
  }

  componentDidMount(){
    setTimeout(this.checking, 500);
  }

  checking = () => {
    this._bootstrapAsync()
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('authorization');

    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };
  render() {
    return (
      <View style={styles.container}>
        <Image source={brand} style={styles.brand}/>
      </View>
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
  brand: {
    width: width * 0.65,
    height: height * 0.5,
    marginLeft: 'auto',
    marginRight: 'auto'
  }
})

export default Splash;