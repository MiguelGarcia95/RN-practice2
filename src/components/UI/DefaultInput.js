import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const DefaultInput = (props) => (
  <TextInput 
    style={styles.input} 
    underlineColorAndroid='transparent'
    {...props}
  />
);

const styles = StyleSheet.create({
  input: {
    width: '100%',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 5,
    margin: 8,
  }
});

export default DefaultInput;