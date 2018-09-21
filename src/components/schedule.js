import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet, View, Modal } from 'react-native';

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <Modal  
      animationType="slide"
      transparent={false} 
      visible={this.props.visible} 
      onRequestClose={() => {
        alert('Modal has been closed.');
      }}>
      <View style={styles.modal}>
        <Text>modal</Text>
          <TouchableOpacity onPress={this.props.close}><Text>Close</Text></TouchableOpacity>
      </View>
          
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    height: 200,
    width: 200,
    backgroundColor: 'blue'
  }
})

export default Schedule;