import React from 'react'
import { View, TextInput, StyleSheet, Button } from 'react-native'

const InputContainer = ({placeName, placeNameChangedHandler, placeSubmitHandler}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput 
        style={styles.placeInput}
        placeholder='Awesome place.'
        value={placeName} 
        onChangeText={placeNameChangedHandler} 
      />
      <Button title='Add' style={styles.placeButton} onPress={placeSubmitHandler} />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  placeInput: {
    width: '70%',
  },
  placeButton: {
    width: '30%',
  },

});

export default InputContainer
