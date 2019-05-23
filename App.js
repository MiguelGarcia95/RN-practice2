import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import List from './src/components/List';
import InputContainer from './src/components/InputContainer';

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
        <InputContainer 
          placeName={this.state.placeName} 
          placeNameChangedHandler={this.placeNameChangedHandler}  
          placeSubmitHandler={this.placeSubmitHandler}
        />
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
});
