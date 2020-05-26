import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';

class VerifyPhone extends Component {
  state = {  }

  render() { 
    return ( 
      <View style={styles.container}>
        <Text style={styles.text}>A verification code has been sent to your phone via sms. Please enter it to verify your account:</Text>
        <Input inputContainerStyle={styles.inputStyle} placeholder="E.g. 1234"/>
        <Button 
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
export default VerifyPhone;