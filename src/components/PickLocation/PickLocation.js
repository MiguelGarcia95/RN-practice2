import React, {Component} from 'react';
import {View, Button, StyleSheet} from 'react-native';

import MainText from '../UI/MainText/MainText';

class PickLocation extends Component {
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.placeholder}>
          <MainText>Map</MainText>
        </View>
        <View style={styles.button}>
          <Button title='Locate me' onPress={() => alert('pick location')} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center'
  },
  placeholder: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#eee',
    width: '80%',
    height: 150,
  },
  button: {
    margin: 5,
  }
});

export default PickLocation;