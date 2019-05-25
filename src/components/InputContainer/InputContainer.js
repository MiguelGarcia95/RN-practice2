import React, {Component} from 'react'
import { View, TextInput, StyleSheet, Button } from 'react-native'
import { Keyboard } from 'react-native';

class InputContainer extends Component {
  state = {
    placeName: ''
  }

  placeNameChangedHandler = (event) => {
    this.setState({placeName: event});
  }

  render() {
    return (
      <DefaultInput placeholder='Place Name' />
    )
  }
}

export default InputContainer
