import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, ActivityIndicator} from 'react-native';
import { Keyboard } from 'react-native';

import {addPlace, startAddPlace} from '../../store/actions';

import MainText from '../../components/UI/MainText/MainText';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground';
import PickImage from '../../components/PickImage/PickImage';
import PickLocation from '../../components/PickLocation/PickLocation';
import validate from '../../utility/validation';

class SharePlaceScreen extends Component {
  static navigatorStyle = {
    navBarButtonColor: 'orange'
  }

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  } 

  componentWillMount() {
    this.reset();
  }

  componentDidUpdate() {
    if (this.props.placeAdded) {
      this.props.navigator.switchToTab({tabIndex: 0});
    }
  }

  reset = () => {
    this.setState({
      controls: {
        placeName: {
          value: '',
          touched: false,
          valid: false,
          validationRules: {
            minLength: 2
          }
        },
        location: {
          value: null,
          valid: false,
        },
        image: {
          value: null,
          valid: false,
        }
      },
    })
  }

  onNavigatorEvent = event => {
    if (event.type === 'ScreenChangedEvent') {
      if (event.id === 'willAppear') {
        this.props.onStartAddPlace();
      }
    }
    if(event.type === 'NavBarButtonPress') {
      if (event.id === 'sideMenuToggle') {
        this.props.navigator.toggleDrawer({
          side: 'left' 
        });
      }
    }
  }

  placeNameChangedHandler = value => {
    this.setState({placeName: value});
  }

  placeAddedHandler = () => {
    this.props.onAddPlace(
      this.state.controls.placeName.value,
      this.state.controls.location.value,
      this.state.controls.image.value,
    )
    this.reset();
    this.imagePicker.reset();
    this.locationPicker.reset();
    Keyboard.dismiss();
  }

  locationPickedHanlder = location => {
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          location: {
            value: location, 
            valid: true
          }
        }
      }
    })
  }

  
  updateInputState = (key, value) => {
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          [key]: {
            ...prevState.controls[key], 
            value: value,
            valid: validate(value, prevState.controls[key].validationRules),
            touched: true,
          },
        }
      }
    })
  }

  imagePickedHandler = image => {
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          image: {
            value: image,
            valid: true,
          }
        }
      }
    })
  }

  render() {
    const {controls} = this.state;

    let submitButton = (
      <ButtonWithBackground 
        color='#aa1939' 
        backgroundColor='#24ffa8' 
        onPress={this.placeAddedHandler}
        disabled={
          !controls.location.valid || 
          !controls.placeName.valid ||
          !controls.image.valid
        }
      >
        Share place
      </ButtonWithBackground>
    );
    
    if (this.props.isLoading) {
      submitButton = <ActivityIndicator  />
    }


    return(
      <ScrollView>
        <View style={styles.container} > 
          <MainText>
            <HeadingText>Share a Place with Us!</HeadingText>
          </MainText>

          <PickImage 
            onImagePick={this.imagePickedHandler}
            ref={ref => this.imagePicker = ref} 
          />

          <PickLocation 
            onLocationPick={this.locationPickedHanlder} 
            ref={ref => this.locationPicker = ref}
          />

          <DefaultInput 
            style={styles.input} 
            placeholder='Place Name' 
            value={controls.placeName.value}
            onChangeText={value => this.updateInputState('placeName', value)}
            valid={controls.placeName.valid}
            touched={controls.placeName.touched}
          />

          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView style={styles.button} behavior='padding'>
              {submitButton}
            </KeyboardAvoidingView>
          </TouchableWithoutFeedback>

        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  placeholder: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#eee',
    width: '80%',
    height: 150,
  },
  button: {
    margin: 5,
  }
})

const mapStateToProps = state => {
  return {
    isLoading: state.ui.isLoading,
    placeAdded: state.places.placeAdded
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (placeName, location, image) => dispatch(addPlace(placeName, location, image)),
    onStartAddPlace: () => dispatch(startAddPlace()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SharePlaceScreen);