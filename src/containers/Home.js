import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import gift, { GiftedChat } from "react-native-gifted-chat"
import Icon from 'react-native-vector-icons/SimpleLineIcons'


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      messages: [
        {
          _id: Math.round(Math.random() * 1000000),
          text: '',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
          },
          image: 'http://www.pokerpost.fr/wp-content/uploads/2017/12/iStock-604371970-1.jpg',
          sent: true,
          received: true,
        },
        {
          _id: Math.round(Math.random() * 1000000),
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ]
    };
  }

  componentDidMount(){
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  try = () => {
    console.log('masuk long press');
    
  }

  cam = () => {
    this.props.navigation.navigate('Camera') 
  }

  render() {
    return (
      <React.Fragment>
        <TouchableOpacity onPress={this.props.navigation.toggleDrawer} style={styles.menu}>
          <Icon name="menu" size={25} color="black"/>
        </TouchableOpacity>
        <GiftedChat 
        messages={this.state.messages} 
        onSend={messages => this.onSend(messages)}
        onLongPress={this.try}
        user={{
          _id: 1,
        }}/>
        <TouchableOpacity onPress={this.cam} style={styles.cam}>
          <Icon name="camera" size={30} color="black"/>
        </TouchableOpacity>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  cam: {
    position: 'absolute',
    top: '94%',
    left: '90%'
  },
  menu: {
    top: '2%',
    left: '3%'
  }
})

export default Home;