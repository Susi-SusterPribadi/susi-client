import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';
import socketio from 'socket.io-client';
import PushConfig from './PushConfig';
import PushNotification from 'react-native-push-notification';
import { socketURL } from '../config';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
    this.socket = socketio(socketURL);
  }

  componentDidMount() {
    PushNotification.cancelAllLocalNotifications();
    // PushNotification.localNotificationSchedule({
    //   message: 'Susi', // isi messagenya disini
    //   repeatType: 'minute', // set aja mau per apa, year,month, week, day, hour , minute
    //   date: new Date(), // ini waktunya
    //   vibrate: true, // ini biar notifnya ada vibrate
    //   vibration: 200, // ini besar vibrate nya
    //   soundName: 'default' // ini ya you know lah
    // });
    const self = this;
    const { messages } = self.state;
    this.socket.on('message', messages => {
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, messages)
      }));
    });
  }

  onSend(messages = []) {
    this.socket.emit('message', messages);
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
  }
  cam = () => {
    this.props.navigation.navigate('Camera');
  };

  render() {
    return (
      <React.Fragment>
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1
          }}
          renderBubble={props => {
            return (
              <Bubble
                {...props}
                wrapperStyle={{
                  right: {
                    backgroundColor: '#15BE59'
                  },
                  left: {
                    backgroundColor: 'white'
                  }
                }}
              />
            );
          }}
        />
        <PushConfig />
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  cam: {
    position: 'absolute',
    top: '87%',
    left: '90%',
    backgroundColor: 'white',
    height: 80,
    width: 50
  },
  camera: {
    padding: 7
  },
  cambox: {
    backgroundColor: 'blue',
    marginTop: '50%'
  }
});

export default Home;
