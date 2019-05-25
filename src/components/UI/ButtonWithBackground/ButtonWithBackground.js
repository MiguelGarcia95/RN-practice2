import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const ButtonWithBackground = props => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={[styles.button, {backgroundColor: props.color}]}>
      <Text>{props.children}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
  }
})

export default ButtonWithBackground;