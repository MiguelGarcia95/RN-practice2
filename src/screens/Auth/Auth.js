import React, {Component} from 'react';
import {View, Button,  ImageBackground, StyleSheet} from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import backgroundImage from '../../assets/images/background.jpg';

class AuthScreen extends Component {
  loginHanlder = () => {
    startMainTabs();
  }

  render() {
    return(
      <View style={styles.container}>
        <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
          <MainText>
            <HeadingText>Please Log In</HeadingText>
          </MainText>
          <Button title="Switch to SignUp" />
          <View style={styles.inputContainer}>
            <DefaultInput style={styles.input} placeholder='Email Address' />
            <DefaultInput style={styles.input} placeholder='Password' />
            <DefaultInput style={styles.input} placeholder='Confirm Password' />
          </View>
          <Button title='Submit' onPress={this.loginHanlder} />
        </ImageBackground>
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
  backgroundImage: {
    width: '100%'
  },
  inputContainer: {
    width: '80%',
  },
  textHeading: {
    fontSize: 28,
    fontWeight: 'bold'
  }
})

export default AuthScreen;