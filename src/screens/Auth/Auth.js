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
        <TextInput placeholder='Email Address' />
        <TextInput placeholder='Password' />
        <TextInput placeholder='Confirm Password' />
        <Button title='Submit' onPress={this.loginHanlder} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderColor: 'red',
    borderWidth: 1,
  },
})

export default AuthScreen;