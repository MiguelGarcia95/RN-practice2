import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const DefaultInput = props => (
  <TextInput 
    underlineColorAndroid='transparent'
    {...props}
    style={[styles.input, props.style, props.valid ? null : styles.invalid]} 
  />
);

const styles = StyleSheet.create({
  input: {
    width: '100%',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 5,
    marginTop: 8, 
    marginBottom: 8,
  },
  invalid: {
    backgroundColor: '#f9c0c0',
    borderColor: 'red',
  }
});

export default DefaultInput;