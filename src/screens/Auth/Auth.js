import React, {Component} from 'react';
import {View, Dimensions,  ImageBackground, StyleSheet} from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground';
import backgroundImage from '../../assets/images/background.jpg';

class AuthScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      respStyles: {
        pwContainerDirection: 'column',
        pwContainerJustifyContent: 'flex-start',
        pwWrapperWidth: '100%',
      }
    }
    Dimensions.addEventListener('change', dims => {
      this.setState({
        respStyles: {
          pwContainerDirection: Dimensions.get('window').height > 500 ? 'column' : 'row',
          pwContainerJustifyContent: Dimensions.get('window').height > 500 ? 'flex-start' : 'space-between',
          pwWrapperWidth: Dimensions.get('window').height > 500 ? '100%' : '45%',
        }
      })
    })
  }
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
            <View style={{
              flexDirection: this.state.respStyles.pwContainerDirection,
              justifyContent: this.state.respStyles.pwContainerJustifyContent
            }}>
              <View style={{
                width: this.state.respStyles.pwWrapperWidth
              }}>
                <DefaultInput style={styles.input} placeholder='Password' />
              </View>
              <View style={{
                width: this.state.respStyles.pwWrapperWidth
              }}>
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
  landScapePasswordContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  portraitPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  landscapePasswordWrapper: {
    width: '100%',
  },
  portraitPasswordWrapper: {
    width: '45%',
  }
})

export default AuthScreen;