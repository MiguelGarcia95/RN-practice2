import React, {Component} from 'react';
import {View, Dimensions,  ImageBackground, StyleSheet} from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground';
import backgroundImage from '../../assets/images/background.jpg';
import validate from '../../utility/validation';

class AuthScreen extends Component {
  state = {
    portraitMode: Dimensions.get('window').height > Dimensions.get('window').width ? true : false,
    controls: {
      email: {
        value: '',
        touched: false,
        valid: false,
        validationRules: {
          isEmail: true
        }
      },
      password: {
        value: '',
        touched: false,
        valid: false,
        validationRules: {
          minLength: 6
        }
      },
      confirmPassword: {
        value: '',
        touched: false,
        valid: false,
        validationRules: {
          equalTo: 'password'
        }
      },
    }
  }

  constructor(props) {
    super(props);
    Dimensions.addEventListener('change', this.updateStyles); 
  }

  componentWillUnmount() {
    Dimensions.removeEventListener('change', this.updateStyles);
  }

  updateStyles = dims => {
    this.setState({
      portraitMode: dims.window.height > dims.window.width ? true : false
    })
  }

  loginHanlder = () => {
    startMainTabs();
  }

  updateInputState = (key, value) => {
    let connectedValue = {};
    if (this.state.controls[key].validationRules.equalTo) {
      const equalControl = this.state.controls[key].validationRules.equalTo;
      const equalValue = this.state.controls[equalControl].value
      connectedValue = {
        ...connectedValue,
        equalTo: equalValue
      };
    }
    if (key === 'password') {
      connectedValue = {
        ...connectedValue, 
        equalTo: value
      };
    }
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          confirmPassword: {
            ...prevState.controls.confirmPassword, 
            valid: key === 'password' ? validate(
              prevState.controls.confirmPassword.value,
              prevState.controls.confirmPassword.validationRules,
              connectedValue
            ) : prevState.controls.confirmPassword.valid,
          },
          [key]: {
            ...prevState.controls[key], 
            value: value,
            valid: validate(value, prevState.controls[key].validationRules, connectedValue),
            touched: true,
          },
        }
      }
    })
  }

  render() {
    const {portraitMode, controls} = this.state;
    let headingText = null;
    if (portraitMode) {
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
            <DefaultInput 
              style={styles.input} 
              placeholder='Email Address' 
              value={controls.email.value}
              onChangeText={value => this.updateInputState('email', value)}
              valid={controls.email.valid}
              touched={controls.email.touched}
            />
            <View style={portraitMode ? styles.portraitPasswordContainer : styles.landScapePasswordContainer}>
              <View style={portraitMode ? styles.portraitPasswordWrapper : styles.landscapePasswordWrapper}>
                <DefaultInput 
                  style={styles.input} 
                  placeholder='Password' 
                  value={controls.password.value}
                  onChangeText={value => this.updateInputState('password', value)}
                  valid={controls.password.valid}
                  touched={controls.password.touched}
                />
              </View>
              <View style={portraitMode ? styles.portraitPasswordWrapper : styles.landscapePasswordWrapper}>
                <DefaultInput 
                  style={styles.input} 
                  placeholder='Confirm Password' 
                  value={controls.confirmPassword.value}
                  onChangeText={value => this.updateInputState('confirmPassword', value)}
                  valid={controls.confirmPassword.valid}
                  touched={controls.confirmPassword.touched}
                />
              </View>
            </View>
          </View>
          <ButtonWithBackground 
            onPress={this.loginHanlder} 
            color='#29aaf4'
            disabled={!controls.confirmPassword.valid || !controls.password.valid || !controls.email.valid}
          >
            Submit
          </ButtonWithBackground>

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
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  portraitPasswordContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  landscapePasswordWrapper: {
    width: '45%',
  },
  portraitPasswordWrapper: {
    width: '100%',
  }
})

export default AuthScreen;