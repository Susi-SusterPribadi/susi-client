import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import { Container, ListItem, List, Content, Right, Left, DatePicker } from 'native-base'
import DateTimePicker from 'react-native-modal-datetime-picker'

class Prescription extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isDateTimePickerVisibleMorning: false,
      isDateTimePickerVisibleEvening: false,
      isDateTimePickerVisibleNight: false,
      timeMorning: null,
      timeEvening: null,
      timeNight: null
    };
  }

  _showDateTimePickerMorning = () => {
    this.setState({
      isDateTimePickerVisibleMorning: true
    })
  }

  _showDateTimePickerEvening = () => {
    this.setState({
      isDateTimePickerVisibleEvening: true
    })
  }

  _showDateTimePickerNight = () => {
    this.setState({
      isDateTimePickerVisibleNight: true
    })
  }

  // _hideDateTimePicker = () => {
  //   this.setState({
  //     isDateTimePickerVisible: false
  //   })
  // }

  _handleTimeMorning = (time) => {
    const times = time.toLocaleTimeString('it-IT')
    this.setState({ timeMorning: times, isDateTimePickerVisibleMorning: false })
    // this._hideDateTimePicker()
  }

  _handleTimeEvening = (time) => {
    const times = time.toLocaleTimeString('it-IT')
    this.setState({ timeEvening: times, isDateTimePickerVisibleEvening: false })
    // this._hideDateTimePicker()
  }

  _handleTimeNight = (time) => {
    const times = time.toLocaleTimeString('it-IT')
    this.setState({ timeNight: times, isDateTimePickerVisibleNight: false })
    // this._hideDateTimePicker()
  }

  render() {
    return (
      <React.Fragment>
        <TouchableOpacity onPress={this.props.navigation.toggleDrawer} style={styles.menu}>
          <Icon name="menu" size={25} color="black"/>
        </TouchableOpacity>
        <Text style={{
          top: '5%', 
          marginLeft: 'auto',
          marginRight: 'auto',
          fontSize: 22
        }}>Menu Setting</Text>

        <View style={{top: '8%'}}>
          <List>
            <ListItem>
              <Left>
                <Text style={{fontSize: 18}}>Morning</Text>
              </Left>
              <Right>
              <TouchableOpacity onPress={this._showDateTimePickerMorning}>
                {
                  this.state.timeMorning ? <Text>{this.state.timeMorning}</Text> : <Text>Set Times</Text>
                }
              </TouchableOpacity>
              <DateTimePicker
                mode="time"
                isVisible={this.state.isDateTimePickerVisibleMorning}
                is24Hour={true}
                onConfirm={this._handleTimeMorning}
                onCancel={this._hideDateTimePicker}
              />
              </Right>
            </ListItem>

            <ListItem>
              <Left>
                <Text style={{fontSize: 18}}>Evening</Text>
              </Left>
              <Right>
                <TouchableOpacity onPress={this._showDateTimePickerEvening}>
                  {
                    this.state.timeEvening ? <Text>{this.state.timeEvening}</Text> : <Text>Set Times</Text>
                  }
                </TouchableOpacity>
                <DateTimePicker
                  mode="time"
                  isVisible={this.state.isDateTimePickerVisibleEvening}
                  is24Hour={true}
                  onConfirm={this._handleTimeEvening}
                  onCancel={this._hideDateTimePicker}
                />
              </Right>
            </ListItem>

            <ListItem>
              <Left>
                <Text style={{fontSize: 18}}>Night</Text>
              </Left>
              <Right>
                <TouchableOpacity onPress={this._showDateTimePickerNight}>
                  {
                    this.state.timeNight ? <Text>{this.state.timeNight}</Text> : <Text>Set Times</Text>
                  }
                </TouchableOpacity>
                <DateTimePicker
                  mode="time"
                  isVisible={this.state.isDateTimePickerVisibleNight}
                  is24Hour={true}
                  onConfirm={this._handleTimeNight}
                  onCancel={this._hideDateTimePicker}
                />
              </Right>
            </ListItem>
          </List>
        </View>

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