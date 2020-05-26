import React from 'react';
import {
  AsyncStorage,
  View,
  Image
} from 'react-native';

const splash = require('../assets/splashImg.png');

export default class AuthLoading extends React.Component {
  componentDidMount() {
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.

    this.props.navigation.navigate(userToken ? 'BottomTab' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <Image source={splash} style={{resizeMode: "contain"}}/>
      </View>
    );
  }
}