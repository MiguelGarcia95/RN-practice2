import React, {Component} from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';

class AuthScreen extends Component {
  loginHanlder = () => {
    startMainTabs();
  }

  render() {
    return(
      <View style={styles.container}>
        <HeadingText>Please Log In</HeadingText>
        <Button title="Switch to SignUp" />
        <View style={styles.inputContainer}>
          <DefaultInput style={styles.input} placeholder='Email Address' />
          <DefaultInput style={styles.input} placeholder='Password' />
          <DefaultInput style={styles.input} placeholder='Confirm Password' />
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
  textHeading: {
    fontSize: 28,
    fontWeight: 'bold'
  },
  input: {
  }
})

export default AuthScreen;