import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const InputContainer = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput 
        style={styles.placeInput}
        placeholder='Awesome place.'
        value={this.state.placeName} 
        onChangeText={this.placeNameChangedHandler} 
      />
      <Button title='Add' style={styles.placeButton} onPress={this.placeSubmitHandler} />
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
