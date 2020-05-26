import React, { Component } from 'react';
import { Header } from 'react-native-elements';
import { StyleSheet, Platform, NativeModules } from 'react-native';

const { StatusBarManager } = NativeModules;

class HeaderBar extends Component {

  render() { 
    const { title } = this.props;
    return ( 
      <Header
        backgroundColor="white"
        centerComponent={{ text: title, style: { fontSize: 18, fontWeight: 'bold', letterSpacing: 1 } }} 
        placement="left"/>
     );
  }
}
 
export default HeaderBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: Platform.OS === 'android' ? StatusBarManager.HEIGHT : 20,
  }
})