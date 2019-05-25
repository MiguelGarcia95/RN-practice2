import React, {Component} from 'react'
import { View, TextInput, StyleSheet, Button } from 'react-native'
import DefaultInput from '../UI/DefaultInput/DefaultInput';
// import { Keyboard } from 'react-native';
// Keyboard.dismiss();

class InputContainer extends Component {
  state = {
    placeName: ''
  }

  placeNameChangedHandler = (event) => {
    this.setState({placeName: event});
  }

  render() { 
    return (
      <DefaultInput 
        placeholder='Place Name' 
        value={this.state.placeName} 
        onChangeText={this.placeNameChangedHandler} 
      />
    )
  }
}

export default InputContainer
