import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

import List from './src/components/List';

export default class App extends Component {
  state = {
    placeName: '',
    places: [],
  }

  placeNameChangedHandler = (event) => {
    this.setState({placeName: event});
  }

  placeSubmitHandler = () => {
    if (this.state.placeName) {
      this.setState(prevState => {
        return {
          places: prevState.places.concat(prevState.placeName),
          placeName: ''
        }
      });
    } else {
      return;
    }
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
          <Button title='Add' style={styles.placeButton} onPress={this.placeSubmitHandler} />
        </View>
        <List places={this.state.places} />
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
