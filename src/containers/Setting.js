import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons'

class Prescription extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <React.Fragment>
        <TouchableOpacity onPress={this.props.navigation.toggleDrawer} style={styles.menu}>
          <Icon name="menu" size={25} color="black"/>
        </TouchableOpacity>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  menu: {
    top: '2%',
    left: '3%'
  }
})

export default Prescription;