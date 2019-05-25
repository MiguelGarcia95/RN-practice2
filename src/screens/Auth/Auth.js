import React, {Component} from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput';

class AuthScreen extends Component {
  loginHanlder = () => {
    startMainTabs();
  }

  render() {
    return(
      <View style={styles.container}>
        <Text>Please Log In</Text>
        <Button title="Switch to SignUp" />
        <View style={styles.inputContainer}>
          <DefaultInput placeholder='Email Address' />
          <DefaultInput placeholder='Password' />
          <DefaultInput placeholder='Confirm Password' />
        </View>
        <Button title='Submit' onPress={this.loginHanlder} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    width: '100%',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 5,
    margin: 8,
    
  }
})

export default AuthScreen;