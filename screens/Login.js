import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, AsyncStorage, Dimensions, Keyboard, LayoutAnimation } from 'react-native';
import { Avatar, Button } from 'react-native-elements';
import { Input } from 'react-native-elements';
import { login } from '../api/Auth';
 

const avatar = require('../assets/avatar.png');

export default class Login extends Component {

  state = {
    visibleHeight: Dimensions.get('window').height,
    topLogo: {
      width: 120,
      height: 120
    },
    isSecure: true,
    emailErrorMessage: "",
    email: '',
    password: ''
  }
  
  toggleSecure = () => {
    const { isSecure } = this.state;

    this.setState({
      isSecure: !isSecure
    })
  }

  navigateLogin = () => {
    const {navigate} = this.props.navigation;
    navigate('Signup');
  }
  
  navigateDashboard = () => {
    const {navigate} = this.props.navigation;
    navigate('BottomTab');
  }
  
  navigateResetEmail = () => {
    const {navigate} = this.props.navigation;
    navigate('ResetEmail');
  }

  componentDidMount(){

    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this.keyboardDidShow,
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this.keyboardDidHide,
    );
    
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  keyboardDidShow = (e) =>  {
    let newSize = Dimensions.get('window').height - e.endCoordinates.height;
    this.setState({
      visibleHeight: newSize,
      topLogo: {width: 70, height: 70}
    });
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

  }
  
  keyboardDidHide = (e) => {
    this.setState({
      visibleHeight: Dimensions.get('window').height,
      topLogo: {width: 120, height: 120}
    });
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }  

  handleChange = (key, value) => {
    this.setState({
      [key] : value
    });
  };

  validateEmail = () => {
  }

  handleSubmit = async() => {
    const credentials = {
      email: this.state.email,
      password: this.state.password
    }
    console.log(credentials)
    // const response = await login(credentials);
    // if(response && response.status === 200) {
    //   await AsyncStorage.setItem('userToken', response.token);
    //   await AsyncStorage.setItem('userData', response.body);
    // }
    this.navigateDashboard();
  }

  render() {
    const {isSecure, email, password, emailErrorMessage} = this.state;
    return (
       <View style={[styles.scrollView, {height: this.state.visibleHeight}]}>
        <Avatar
          rounded 
          source={avatar}
          size={130}
          containerStyle={[styles.avatar, this.state.topLogo]}
        />
        <View style={styles.inputView}>
        <Input
          placeholder='Email'
          inputContainerStyle={styles.inputStyle}
          value={email}
          errorMessage={emailErrorMessage}
          onChangeText={(email) => this.handleChange('email', email)}
          // onEndEditing={(email) => this.handleChange('email', email)}
        />
        <Input
          placeholder='Password'
          inputContainerStyle={styles.inputStyle}
          rightIcon={{ type: 'ionicon', name: isSecure ? 'md-eye' : 'md-eye-off', onPress : this.toggleSecure  }}
          secureTextEntry={isSecure}
          value={password}
          onChangeText={(password) => this.handleChange('password', password)}
          // onEndEditing={(password) => this.handleChange('password', password)}
        />
        </View>
        <Button
          title="Login"
          type="solid"
          raised
          buttonStyle={styles.button}
          containerStyle={styles.buttonContainer}
          onPress={this.handleSubmit}
        />
        <View style={styles.linkContainer}>
          <TouchableOpacity onPress={this.navigateResetEmail}>
            <Text>Forgot password?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.navigateLogin}>
            <Text>Create account</Text>
          </TouchableOpacity>
        </View>
       </View>
    );
  }
}

const styles = StyleSheet.create({

  scrollView: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: '30%',
    flexDirection: 'column',
    paddingHorizontal: '10%',
    justifyContent: 'space-around',
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
    marginTop: 30,
    // marginBottom: 10
  },
  linkContainer: {
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})