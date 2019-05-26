import React from 'react'
import { View, TextInput, StyleSheet, Button } from 'react-native'
import DefaultInput from '../UI/DefaultInput/DefaultInput';
// import { Keyboard } from 'react-native';
// Keyboard.dismiss();

const InputContainer = props => {
  return (
    <DefaultInput 
      placeholder='Place Name' 
      value={props.placeName} 
      onChangeText={props.onChangeText} 
    />
  )
}

export default InputContainer
