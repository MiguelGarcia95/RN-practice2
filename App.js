import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

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
        <TextInput 
          style={{width: 300}}
          placeholder='Awesome place.'
          value={this.state.placeName} 
          onChangeText={this.placeNameChangedHandler} 
        />
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
  }
});
