import React, {Component} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

import MainText from '../UI/MainText/MainText';

class PickLocation extends Component {
  render() {
    return(
      <View style={styles.container}>
        <MapView 
          initialRegion={}
          style={styles.map}
        />
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
  map: {
    width: '100%',
    height: 250
  },
  button: {
    margin: 5,
  }
});

export default PickLocation;