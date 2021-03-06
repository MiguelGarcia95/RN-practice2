import React from 'react';
import {View, TouchableOpacity, TouchableNativeFeedback, Platform, Text, StyleSheet} from 'react-native';

const ButtonWithBackground = props => {
  const content = (
    <View style={[styles.button, {backgroundColor: props.backgroundColor}, props.disabled ? styles.disabled : null ]}>
      <Text style={[{color: props.color}, props.disabled ? styles.disabledText : null]}>{props.children}</Text>
    </View>
  );

  if (props.disabled) {
    return content;
  }

  if (Platform.OS === 'android') {
    return (
      <TouchableNativeFeedback onPress={props.onPress}>
        {content}        
      </TouchableNativeFeedback>
    )
  }
  return (
    <TouchableOpacity onPress={props.onPress}>
      {content}
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  disabled: {
    backgroundColor: '#eee',
    color: '#aaa',
    borderColor: '#aaa',
  },
  disabledText: {
    color: '#ccc',
  }
})

export default ButtonWithBackground;