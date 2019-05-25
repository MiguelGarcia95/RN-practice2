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
  
  placeAddedHandler = () => {
    if (this.state.placeName) {
      this.props.onAddPlace(this.state.placeName);
      this.setState({placeName: ''});
      Keyboard.dismiss();
    } else {
      return;
    }
  }

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.placeInput}
          placeholder='Awesome place.'
          value={this.state.placeName} 
          onChangeText={this.placeNameChangedHandler} 
        />
        <Button title='Add' style={styles.placeButton} onPress={this.placeAddedHandler} />
      </View>
    )
  }
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
