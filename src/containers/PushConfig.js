import React, { Component } from 'react';
import PushNotification from 'react-native-push-notification'

class PushConfig extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  componentDidMount(){
    PushNotification.configure({
      onNotification: function(notification) {
        console.log( 'NOTIFICATION:', notification );
      }
    })
  }

  render() {
    return null
  }
}

export default PushConfig;