import React, { Component } from 'react';
import {
  Platform, 
  StyleSheet, 
  View, 
  KeyboardAvoidingView, 
  TouchableOpacity,
  AsyncStorage 
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
import { connect } from 'react-redux'
import configTime from '../actions/ConfigTime.action'
import getDataTime from '../actions/GetDataTime.action';

const mapStateToProps = (state) => {
  return {
    dataTime: state.getDataTime
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    configurationTime: (time) => {
      dispatch(configTime(time))
    },
    getData: (data) => {
      dispatch(getDataTime(data))
    }
  }
}

class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isDateTimePickerVisibleMorning: false,
      isDateTimePickerVisibleAfternoon: false,
      isDateTimePickerVisibleNight: false,
      timeMorning: null,
      timeAfternoon: null,
      timeNight: null
    };
    this.submit = this.submit.bind(this)
  }

  async componentDidMount() {
    const token  = await AsyncStorage.getItem('authorization')
    const id = await AsyncStorage.getItem('id')
    this.props.getData({ token: token, userId: id })
  }

  _showDateTimePickerMorning = () => {
    this.setState({
      isDateTimePickerVisibleMorning: true
    })
  }

  _showDateTimePickerAfternoon = () => {
    this.setState({
      isDateTimePickerVisibleAfternoon: true
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

  _handleTimeAfternoon = (time) => {
    const times = time.toLocaleTimeString('it-IT')
    this.setState({ timeAfternoon: times})
    this._hideDateTimePickerAfternoon()
  }

  _handleTimeNight = (time) => {
    const times = time.toLocaleTimeString('it-IT')
    this.setState({ timeNight: times})
    this._hideDateTimePickerNight()
  }

  _hideDateTimePickerMorning = () => {
    this.setState({ isDateTimePickerVisibleMorning: false })
  }

  _hideDateTimePickerAfternoon = () => {
    this.setState({ isDateTimePickerVisibleAfternoon: false })
  }

  _hideDateTimePickerNight = () => {
    this.setState({ isDateTimePickerVisibleNight: false })
  }

  submit = async () => {
    try {
      const token = await AsyncStorage.getItem('authorization')
      const id = await AsyncStorage.getItem('id')
      const { morning, afternoon, night } = this.props.dataTime.data
      const { timeMorning, timeAfternoon, timeNight } = this.state
      let dataTime = {
        timeMorning: timeMorning || morning, 
        timeAfternoon: timeAfternoon || afternoon, 
        timeNight: timeNight || night,
        userId: id,
        token: token
      }
      this.props.configurationTime(dataTime)
      this.props.getData({ token: token, userId: id })
    } catch(err) {
      return err
    }
  }

  render() {
    console.log('data from this.props.dataTime ==>', this.props.dataTime)
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
                    this.props.dataTime.data.morning ? <Text>{this.props.dataTime.data.morning}</Text> : 
                    <Text>Set Times</Text>
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
                <Text style={{fontSize: 18}}>Afternoon</Text>
              </Left>
              <Right>
                <TouchableOpacity onPress={this._showDateTimePickerAfternoon}>
                  {
                    this.props.dataTime.data.afternoon ? 
                    <Text>{this.props.dataTime.data.afternoon}</Text> : 
                    <Text>Set Times</Text>
                  }
                </TouchableOpacity>
                <DateTimePicker
                  mode="time"
                  isVisible={this.state.isDateTimePickerVisibleAfternoon}
                  is24Hour={true}
                  onConfirm={this._handleTimeAfternoon}
                  onCancel={this._hideDateTimePickerAfternoon}
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
                    this.props.dataTime.data.night ? <Text>{this.props.dataTime.data.night}</Text> : <Text>Set Times</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(Setting);