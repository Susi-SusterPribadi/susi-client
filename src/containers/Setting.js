import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import { Container, ListItem, List, Content, Right, Left, DatePicker } from 'native-base'

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
                <Text style={{fontSize: 18}}>Pagi</Text>
              </Left>
              <Right>
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
                  textStyle={{ color: "black" }}
                  placeHolderTextStyle={{ color: "black" }}
                  onDateChange={this.setDate}
                />
              </Right>
            </ListItem>

            <ListItem>
              <Left>
                <Text style={{fontSize: 18}}>Siang</Text>
              </Left>
              <Right>
                <Text>Setting Times</Text>
              </Right>
            </ListItem>

            <ListItem>
              <Left>
                <Text style={{fontSize: 18}}>Malam</Text>
              </Left>
              <Right>
                <Text>Setting Times</Text>
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