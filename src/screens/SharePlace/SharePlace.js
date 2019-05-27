import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View,Button, StyleSheet, ScrollView, Image} from 'react-native';
import { Keyboard } from 'react-native';

import {addPlace} from '../../store/actions';

import MainText from '../../components/UI/MainText/MainText';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import InputContainer from '../../components/InputContainer/InputContainer';
import PickImage from '../../components/PickImage/PickImage';
import PickLocation from '../../components/PickLocation/PickLocation';

////////////////////////////////
// 
//  Add input validation
//  and keyboard settings
// 
//////////////////////////////// 

class SharePlaceScreen extends Component {
  static navigatorStyle = {
    navBarButtonColor: 'orange'
  }

  state = {
    placeName: '',
    controls: {
      location: {
        value: null,
        valid: false,
      }
    },
  }

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  } 

  onNavigatorEvent = event => {
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
      this.state.placeName,
      this.state.controls.location.value
    )
    this.setState({placeName: ''});
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

  render() {
    return(
      <ScrollView>
        <View style={styles.container}> 
          <MainText>
            <HeadingText>Share a Place with Us!</HeadingText>
          </MainText>

          <PickImage />
          <PickLocation onLocationPick={this.locationPickedHanlder} />

          <InputContainer placeName={this.state.placeName} onChangeText={this.placeNameChangedHandler} />
 
          <View style={styles.button}>
            <Button 
              title='Share the place.' 
              onPress={this.placeAddedHandler} 
              disabled={
                !this.state.controls.location.valid
              }
            />
          </View>
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

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (placeName, location) => dispatch(addPlace(placeName, location))
  }
}

export default connect(null, mapDispatchToProps)(SharePlaceScreen);