import React, {Component} from 'react';
import {View, Dimensions,  ImageBackground, StyleSheet} from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground';
import backgroundImage from '../../assets/images/background.jpg';

class AuthScreen extends Component {
  loginHanlder = () => {
    startMainTabs();
  }

  render() {
    let headingText = null;
    if (Dimensions.get('window').height > 500) {
      headingText = 'Please Log In'
    }
    return(
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.container}>
          <MainText>
            <HeadingText>{headingText}</HeadingText>
          </MainText>
          <ButtonWithBackground onPress={() => alert('go to signUp')} color='#29aaf4'>Switch to SignUp</ButtonWithBackground>
          <View style={styles.inputContainer}>
            <DefaultInput style={styles.input} placeholder='Email Address' />
            <View style={styles.passwordContainer}>
              <View style={styles.passwordWrapper}>
                <DefaultInput style={styles.input} placeholder='Password' />
              </View>
              <View style={styles.passwordWrapper}>
                <DefaultInput style={styles.input} placeholder='Confirm Password' />
              </View>
            </View>
          </View>
          <ButtonWithBackground onPress={this.loginHanlder} color='#29aaf4'>Submit</ButtonWithBackground>

        </View>
      </ImageBackground>
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
    width: '100%',
    flex: 1,
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: '#ddd'
  },
  textHeading: {
    fontSize: 28,
    fontWeight: 'bold'
  }, 
  passwordContainer: {
    flexDirection: Dimensions.get('window').height > 500 ? 'column' : 'row',
    justifyContent: 'space-between'
  },
  passwordWrapper: {
    width: '45%',
  }
})

export default AuthScreen;