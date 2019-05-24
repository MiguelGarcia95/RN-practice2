import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class AuthScreen extends Component {
  loginHanlder = () => {

  }

  render() {
    return(
      <View>
        <Text>Auth Screen</Text>
        <Button title='Login' onPress={this.loginHanlder} />
      </View>
    );
  }
}

export default AuthScreen;