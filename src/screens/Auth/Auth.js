import React, {Component} from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';

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
          <TextInput style={styles.input} placeholder='Email Address' />
          <TextInput style={styles.input} placeholder='Password' />
          <TextInput style={styles.input} placeholder='Confirm Password' />
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
    textAlign: 'center'
  }
})

export default AuthScreen;