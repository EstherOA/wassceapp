import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';

class PasswordReset extends Component {
  state = { 
    isSecure: true,
    isSecureConfirm: true
   }
  
  toggleSecure = (selection) => {
    const { isSecure, isSecureConfirm } = this.state;

    if(selection == "password") {
      this.setState({
        isSecure: !isSecure
      });
    } else {
      this.setState({
        isSecureConfirm: !isSecureConfirm
      });
    }
  }

  render() { 
    const { isSecure, isSecureConfirm } = this.state;
    return ( 
      <View style={styles.container}>
        <Text style={styles.text}>Please enter your new password:</Text>
        <Input
         inputContainerStyle={styles.inputStyle} 
         placeholder="Password"
         rightIcon={{ type: 'ionicon', name: isSecure ? 'md-eye' : 'md-eye-off', onPress : () => this.toggleSecure("password")  }}
         secureTextEntry={isSecure}
         />
        <Input 
        inputContainerStyle={styles.inputStyle} 
        placeholder="Confirm password"
        rightIcon={{ type: 'ionicon', name: isSecureConfirm ? 'md-eye' : 'md-eye-off', onPress : () => this.toggleSecure("passwordConfirm")  }}
        secureTextEntry={isSecure}/>
        <Button 
        title="Submit" 
        type="solid" 
        raised
        buttonStyle={styles.button}
        containerStyle={styles.buttonContainer}
        />
      </View>
     );
  }
}

export default PasswordReset;

const styles=StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#F5F5F5',
    paddingTop: '30%',
    paddingHorizontal: '10%'
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