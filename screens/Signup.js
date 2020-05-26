import React, { Component } from 'react';
import { KeyboardAvoidingView, StyleSheet, View, NativeModules, Platform, ScrollView } from 'react-native';
import { Avatar, Button, Icon, Input, Header } from 'react-native-elements';
import { register } from '../api/Auth';
 

const avatar = require('../assets/avatar.png');
const { StatusBarManager } = NativeModules;

export default class Signup extends Component {

  state={
    isSecure: true,
    first_name: '',
    last_name: '',
    password: '',
    phone_number: '',
    email: '',
    emailErrorMessage: '',
    phoneErrorMessage: '',
    passwordErrorMessage: ''
  }

  toggleSecure = () => {
    const { isSecure } = this.state;

    this.setState({
      isSecure: !isSecure
    })
  }
  
  navigateLogin = () => {

    const { navigate } = this.props.navigation;
    navigate('Login');
  }

  handleChange = (key, value) => {
    this.setState({
      [key] : value
    });
  };

  handleSubmit = async() => {
    const credentials = {
      email: this.state.email,
      password: this.state.password,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      phone_number: this.state.phone_number
    }
    console.log(credentials);
    const response = await register(credentials);
    console.log(response);
    if(response && response.status === 200) {
      await AsyncStorage.setItem('userToken', response.token);
      await AsyncStorage.setItem('userData', response.body);
      this.navigateDashboard();
    }
  }

  render() {
    const {isSecure, email, password, first_name, last_name, phone_number, emailErrorMessage, passwordErrorMessage, phoneErrorMessage} = this.state;
    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.iconView}>
          <Icon name="ios-arrow-back" size={28} type="ionicon" color="#3D5AFE" onPress={this.navigateLogin}/>
        </View>
        <Avatar
          rounded 
          source={avatar}
          size={90}
          containerStyle={styles.avatar}
        />
        <View style={styles.inputView}>
        <Input
          placeholder='First Name'
          inputContainerStyle={styles.inputStyle}
          value={first_name}
          onChangeText={(first_name) => this.handleChange('first_name', first_name)}
          // onEndEditing={(first_name) => this.handleChange('first_name', first_name)}
        />
        <Input
          placeholder='Last Name'
          inputContainerStyle={styles.inputStyle}
          value={last_name}
          onChangeText={(last_name) => this.handleChange('last_name', last_name)}
          // onEndEditing={(last_name) => this.handleChange('last_name', last_name)}
          />
        <Input
          placeholder='Email'
          inputContainerStyle={styles.inputStyle}
          errorMessage={emailErrorMessage}
          value={email}
          onChangeText={(email) => this.handleChange('email', email)}
          // onEndEditing={(email) => this.handleChange('email', email)}
          />
        <Input
          placeholder='Phone Number'
          inputContainerStyle={styles.inputStyle}
          errorMessage={phoneErrorMessage}
          value={phone_number}
          onChangeText={(phone_number) => this.handleChange('phone_number', phone_number)}
          // onEndEditing={(phone_number) => this.handleChange('phone_number', phone_number)}
          />
        <Input
          placeholder='Password'
          inputContainerStyle={styles.inputStyle}
          rightIcon={{ type: 'ionicon', name: isSecure ? 'md-eye' : 'md-eye-off', onPress : this.toggleSecure  }}
          secureTextEntry={isSecure}
          value={password}
          errorMessage={passwordErrorMessage}
          onChangeText={(password) => this.handleChange('password', password)}
          // onEndEditing={(password) => this.handleChange('password', password)}
        />
        </View>
        <Button
          title="Sign up"
          type="solid"
          raised
          buttonStyle={styles.button}
          containerStyle={styles.buttonContainer}
          onPress={this.handleSubmit}
        />
       </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop : Platform.OS === 'android' ? StatusBarManager.HEIGHT : 20,
    justifyContent: 'space-around',
    paddingHorizontal: '10%',
    backgroundColor: '#F5F5F5',
  },
  iconView: {
    flexDirection: 'row', 
    alignContent: 'flex-start', 
  },
  mainContainer: {
    // marginTop: '20%',
    backgroundColor: '#F5F5F5',
    flex: 1,
    flexDirection: 'column'
  },
  avatar: {
    borderColor: 'white',
    borderWidth: 5,
    alignSelf: "center",
    marginBottom: 40
  },
  inputStyle: {
    borderColor: 'transparent',
    backgroundColor: 'white',
    borderRadius: 20,
    height: 50,
    paddingHorizontal: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  inputView: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  button: {
    borderRadius: 25,
    height: 50,
    backgroundColor: "rgb(83,109,254)",
  },
  buttonContainer: {
    width: '50%',
    alignSelf: 'center',
    marginTop: 50,
  }
})