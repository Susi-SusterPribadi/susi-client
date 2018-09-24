import React, { Component } from 'react';
import { 
  Platform, 
  StyleSheet, 
  Text, 
  View, 
  KeyboardAvoidingView, 
  TouchableOpacity, 
  ScrollView 
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

class Prescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
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
        <View style={styles.titlebox}>
          <Text style={styles.title}>Prescription</Text>
        </View>
        <ScrollView>
          <View style={styles.medicine}>
            <Text style={styles.medname}>Dexamethason</Text>
            <Text style={styles.meddetail}>Stock: 10</Text>
            <Text style={styles.meddetail}>Exp Date: 2018-12-31</Text>
            <Text style={styles.meddetail}>Route: Oral</Text>
          </View>
          <View style={styles.medicine}>
            <Text style={styles.medname}>Dexamethason</Text>
            <Text style={styles.meddetail}>Stock: 10</Text>
            <Text style={styles.meddetail}>Exp Date: 2018-12-31</Text>
            <Text style={styles.meddetail}>Route: Oral</Text>
          </View>
          <View style={styles.medicine}>
            <Text style={styles.medname}>Dexamethason</Text>
            <Text style={styles.meddetail}>Stock: 10</Text>
            <Text style={styles.meddetail}>Exp Date: 2018-12-31</Text>
            <Text style={styles.meddetail}>Route: Oral</Text>
          </View>
          <View style={styles.medicine}>
            <Text style={styles.medname}>Dexamethason</Text>
            <Text style={styles.meddetail}>Stock: 10</Text>
            <Text style={styles.meddetail}>Exp Date: 2018-12-31</Text>
            <Text style={styles.meddetail}>Route: Oral</Text>
          </View>
          <View style={styles.medicine}>
            <Text style={styles.medname}>Dexamethason</Text>
            <Text style={styles.meddetail}>Stock: 10</Text>
            <Text style={styles.meddetail}>Exp Date: 2018-12-31</Text>
            <Text style={styles.meddetail}>Route: Oral</Text>
          </View>
          <View style={styles.medicine}>
            <Text style={styles.medname}>Dexamethason</Text>
            <Text style={styles.meddetail}>Stock: 10</Text>
            <Text style={styles.meddetail}>Exp Date: 2018-12-31</Text>
            <Text style={styles.meddetail}>Route: Oral</Text>
          </View>
          <View style={styles.medicine}>
            <Text style={styles.medname}>Dexamethason</Text>
            <Text style={styles.meddetail}>Stock: 10</Text>
            <Text style={styles.meddetail}>Exp Date: 2018-12-31</Text>
            <Text style={styles.meddetail}>Route: Oral</Text>
          </View>
        </ScrollView>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  menu: {
    top: '2%',
    left: '3%'
  },
  titlebox: {
    height: '15%',
  },
  title: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
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
  },
  textHeader: {
    fontFamily: 'sacramento',
    color: 'white',
    textAlign: 'center',
    fontSize: 40,
    marginLeft: '20%',
    marginRight: 'auto'
  }
})

export default Prescription;