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

class SharePlaceScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeName: ''
    }
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

  placeNameChangedHandler = (event) => {
    this.setState({placeName: event});
  }

  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName);
    Keyboard.dismiss();
  }

  render() {
    return(
      <ScrollView>
        <View style={styles.container}> 
          <MainText>
            <HeadingText>Share a Place with Us!</HeadingText>
          </MainText>

          <PickImage />
          <PickLocation />

          <InputContainer placeName={this.state.placeName}  />
 
          <View style={styles.button}>
            <Button title='Share the place.' />
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
    onAddPlace: placeName => dispatch(addPlace(placeName))
  }
}

export default connect(null, mapDispatchToProps)(SharePlaceScreen);