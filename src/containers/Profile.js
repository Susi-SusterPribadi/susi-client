import React, { Component } from 'react';
import {
  ScrollView,
  Platform,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  AsyncStorage
} from 'react-native';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title
} from 'native-base';
import ava from '../../assets/img/ava.png'

const { width, height } = Dimensions.get('window');

class Profile extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <React.Fragment>
        <Header style={{ backgroundColor: '#15BE59' }}>
          <Left>
            <Button transparent onPress={this.props.navigation.toggleDrawer}>
              <Icon name='menu' style={{ fontSize: 30 }} />
            </Button>
          </Left>
          <Body>
            <Text style={styles.textHeader}>Susi</Text>
          </Body>
        </Header>
        <View style={styles.divider}/>
        <View style={styles.box}>
          <Image source={ava} style={styles.avatarbox}/>
        </View>
      </React.Fragment>

    );
  }
}

const styles = StyleSheet.create({
  textHeader: {
    fontFamily: 'sacramento',
    color: 'white',
    textAlign: 'center',
    fontSize: 40,
    marginLeft: '20%',
    marginRight: 'auto'
  },
  avatarbox: {
    width:'77%',
    height:'80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop:'auto',
    marginBottom: 'auto',
    borderRadius: 100
  },
  box: {
    width: '40%',
    height: '25%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 100,
    borderStyle: 'dashed',
    borderWidth: 1.2
  },
  divider: {
    height: '8%'
  }
})

export default Profile;