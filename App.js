import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default class App extends Component {
  state = {
    placeName: ''
  }

  placeNameChangedHandler = (event) => {
    this.setState({placeName: event});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.placeInput}
            placeholder='Awesome place.'
            value={this.state.placeName} 
            onChangeText={this.placeNameChangedHandler} 
          />

          <Button title='Add' style={styles.placeButton} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5FCFF',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  inputContainer: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  placeInput: {
    width: '70%',
  },
  placeButton: {
    width: '30%',
  },
});
