import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Input, Button, Icon } from 'react-native-elements';
import { requestResetLink } from '../api/Auth';

class ResetEmail extends Component {
  state = { 
    email: ''
   }

   handleChange = (email) => {
     this.setState({email});
   }

   handleSubmit = async() => {
     console.log(this.state.email);
     const response = await requestResetLink(this.state.email);
     if (response && response.status === 200) {
       console.log('Password reset link sent!');
       this.navigateLogin();
     }
   }

  navigateLogin = () => {
    const { navigate } = this.props.navigation;
    navigate('Login');
  }

  render() { 
    const {email} = this.state;
    return ( 
      <View style={styles.container}>
         <View style={styles.iconView}>
          <Icon name="ios-arrow-back" size={28} type="ionicon" color="#3D5AFE" onPress={this.navigateLogin}/>
        </View>
        <Text style={styles.text}>A reset link will be sent to the email below:</Text>
        <Input inputContainerStyle={styles.inputStyle} placeholder="Email" value={email} onChangeText={(email) => this.handleChange(email)}/>
        <Button 
        onPress={this.handleSubmit}
        title="Next" 
        type="solid" 
        raised
        buttonStyle={styles.button}
        containerStyle={styles.buttonContainer}
        />
      </View>
     );
  }
}
 
export default ResetEmail;

const styles=StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#F5F5F5',
    paddingTop: '10%',
    paddingHorizontal: '10%'
  },
  iconView: {
    flexDirection: 'row', 
    alignContent: 'flex-start', 
    marginBottom: 40
  },
  text: {
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
  }
})