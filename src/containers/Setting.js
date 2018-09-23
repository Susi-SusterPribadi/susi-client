import React, { Component } from 'react';
import {
  Platform, 
  StyleSheet, 
  View, 
  KeyboardAvoidingView, 
  TouchableOpacity 
} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import { 
  Container, 
  ListItem, 
  List, 
  Content, 
  Right, 
  Left, 
  Button, 
  Text, 
  Header, 
  Body, 
  Title 
} from 'native-base'
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
    this.submit = this.submit.bind(this)
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

  _handleTimeMorning = (time) => {
    const times = time.toLocaleTimeString('it-IT')
    this.setState({ timeMorning: times})
    this._hideDateTimePickerMorning()
  }

  _handleTimeEvening = (time) => {
    const times = time.toLocaleTimeString('it-IT')
    this.setState({ timeEvening: times})
    this._hideDateTimePickerEvening()
  }

  _handleTimeNight = (time) => {
    const times = time.toLocaleTimeString('it-IT')
    this.setState({ timeNight: times})
    this._hideDateTimePickerNight()
  }

  _hideDateTimePickerMorning = () => {
    this.setState({ isDateTimePickerVisibleMorning: false })
  }

  _hideDateTimePickerEvening = () => {
    this.setState({ isDateTimePickerVisibleEvening: false })
  }

  _hideDateTimePickerNight = () => {
    this.setState({ isDateTimePickerVisibleNight: false })
  }

  submit() {
    const { timeMorning, timeEvening, timeNight } = this.state
    let dataTime = {timeMorning: timeMorning, timeEvening: timeEvening, timeNight: timeNight}
    console.log('submit ===> ',dataTime)
  }

  render() {
    return (
      <React.Fragment>
        <Header style={{backgroundColor: '#15BE59'}}>
          <Left>
            <TouchableOpacity onPress={this.props.navigation.toggleDrawer} style={styles.menu}>
              <Icon name="menu" size={25} color="white"/>
            </TouchableOpacity>
          </Left>
          <Body>
            <Text style={{
              fontFamily: 'sacramento',
              color: 'white',
              textAlign: 'center',
              fontSize: 40,
              marginLeft: '55%',
              marginRight: 'auto'
            }}>Susi</Text>
          </Body>
          <Right>
            <TouchableOpacity onPress={this.submit}>
              <Text style={{
                color: '#FFF'
              }}>Save</Text>
            </TouchableOpacity>
          </Right>
        </Header>
        <View style={{top: '1%'}}>
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
                  onCancel={this._hideDateTimePickerMorning}
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
                  onCancel={this._hideDateTimePickerEvening}
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
                  onCancel={this._hideDateTimePickerNight}
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
  },
  button: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '85%',
    marginTop: 30,
    backgroundColor: 'green',
    borderRadius: 30
  },
})

export default Prescription;