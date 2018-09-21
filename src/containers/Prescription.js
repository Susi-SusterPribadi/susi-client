import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import Schedule from '../components/schedule'

class Prescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule: '',
      visible: false
    };
  }

  openModal = () => {
    this.setState({
      visible: true
    })
  }

  closeModal = () => {
    this.setState({
      visible: false
    })
  }

  render() {
    return (
      <React.Fragment>
        <TouchableOpacity onPress={this.props.navigation.toggleDrawer} style={styles.menu}>
          <Icon name="menu" size={25} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Prescription</Text>
        <Schedule data={this.state.schedule} close={this.closeModal} visible={this.state.visible}/>
        <View style={styles.medicinebox}>
          <View style={styles.medicine}>
            <Text style={styles.medname}>Dexamethason</Text>
            <Text style={styles.meddetail}>Stock: 10</Text>
            <Text style={styles.meddetail}>Exp Date: 2018-12-31</Text>
            <TouchableOpacity onPress={this.openModal}>
              <Text style={styles.schedule}>Schedule</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.medicine}>
            <Text style={styles.medname}>Dexamethason</Text>
            <Text style={styles.meddetail}>Stock: 10</Text>
            <Text style={styles.meddetail}>Exp Date: 2018-12-31</Text>
            <TouchableOpacity>
              <Text style={styles.schedule}>Schedule</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.medicine}>
            <Text style={styles.medname}>Dexamethason</Text>
            <Text style={styles.meddetail}>Stock: 10</Text>
            <Text style={styles.meddetail}>Exp Date: 2018-12-31</Text>
            <TouchableOpacity>
              <Text style={styles.schedule}>Schedule</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.medicine}>
            <Text style={styles.medname}>Dexamethason</Text>
            <Text style={styles.meddetail}>Stock: 10</Text>
            <Text style={styles.meddetail}>Exp Date: 2018-12-31</Text>
            <TouchableOpacity>
              <Text style={styles.schedule}>Schedule</Text>
            </TouchableOpacity>
          </View>
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  menu: {
    top: '2%',
    left: '3%'
  },
  title: {
    top: '5%',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 22
  },
  medicine: {
    width: '100%',
    height: 100,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
  },
  medicinebox: {
    top: '10%'
  },
  medname: {
    marginTop: 9,
    fontSize: 17,
    marginLeft: 10
  },
  meddetail: {
    marginLeft: 10
  },
  schedule: {
    textAlign: 'right',
    marginRight: 20,
    color: 'blue'
  }
})

export default Prescription;