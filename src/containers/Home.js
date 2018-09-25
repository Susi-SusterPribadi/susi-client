import React, { Component } from 'react';
import { 
  Platform, 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  Dimensions 
} from 'react-native';
import gift, { GiftedChat, Bubble } from "react-native-gifted-chat"
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import PushConfig from './PushConfig'
import PushNotification from 'react-native-push-notification'

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

  componentDidMount() {
    //ini nih notifnya
    PushNotification.cancelAllLocalNotifications()
    // PushNotification.localNotificationSchedule({
      
    //   message: "Susi", // isi messagenya disini
    //   repeatType: "minute", // set aja mau per apa, year,month, week, day, hour , minute
    //   date: new Date(), // ini waktunya
    //   vibrate: true, // ini biar notifnya ada vibrate
    //   vibration: 200, // ini besar vibrate nya
    //   soundName: 'default', // ini ya you know lah
    // });
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
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          onLongPress={this.try}
          user={{
            _id: 1,
          }}
          renderBubble={props => {
            return (
              <Bubble
                {...props}
                wrapperStyle={{
                  right: {
                    backgroundColor: '#15BE59',
                  },
                  left: {
                    backgroundColor: 'white',
                  },
                }}
              />
            );
          }} />
          <PushConfig/>
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
    marginTop: '50%'  }
})

export default Home;