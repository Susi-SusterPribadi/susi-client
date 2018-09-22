import React, { Component } from 'react';
import { ScrollView ,Platform, StyleSheet, View, Text, TextInput, TouchableOpacity, Image, Button, Dimensions, AsyncStorage } from 'react-native';
import brand from '../../assets/img/splash.png'

const { width, height } = Dimensions.get('window');

class Signout extends Component {
  constructor(props) {
    super(props);
    
  }

  componentDidMount(){
    this.logout()
  }

  logout = async () => {
    try {
      await AsyncStorage.removeItem('authorization')
      await AsyncStorage.removeItem('email')
      await AsyncStorage.removeItem('id')
      await AsyncStorage.removeItem('name')

      this.props.navigation.navigate('Auth')
      return true
    } catch(e) {
      return e
    }
  }

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

export default Signout;