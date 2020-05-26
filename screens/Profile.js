import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Header, Button } from 'react-native-elements';
import { Card, Title, Paragraph } from 'react-native-paper';

const chartImg = require('../assets/chart.jpg');
export default class Profile extends Component {

  state = {  }

  navigateSetting = () => {
    const { navigate } = this.props.navigation;
    navigate('Settings');
  }
  
  render() { 
    return ( 
    <View style={styles.container}>
        <Header
          backgroundColor="white"
          centerComponent={{ text: 'Profile', style: { fontSize: 18, fontWeight: 'bold', letterSpacing: 1 } }}
          rightComponent={{ icon: 'md-settings', type: 'ionicon', size: 30, onPress: this.navigateSetting}}
          placement="left" />

          <Card style={styles.card}>
            <Card.Content>
            <Title>Looks like you don't have an account</Title>
            <Paragraph>Login to view your progress statistics</Paragraph>
              <Image source={chartImg} style={styles.image} resizeMode="center"/>
              <Button raised title="Login"/>
            </Card.Content>
          </Card>
    </View> );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1 
  },
  card: {
    width: '90%',
    height: '75%',
    alignSelf: 'center',
    marginTop: '10%'
  },
  image: {
    marginBottom: 20,
    marginLeft: 30
  }
});
 
