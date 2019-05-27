import React, {Component} from 'react';
import {View, Button, StyleSheet, Dimensions} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

import MainText from '../UI/MainText/MainText';

class PickLocation extends Component {
  state = {
    focusedLocation: {
      latitude: 37.7900352,
      longitude: -122.4013726,
      latitudeDelta: 0.0122,
      longitudeDelta: 
        Dimensions.get('window').width / 
        Dimensions.get('window').height * 
        0.0122,
    }
  }

  pickLocationHandler = event => {
    const coords = event.nativeEvent.coordinate;
    this.setState(prevState => {
      return {
        focusedLocation: {
          ...prevState.focusedLocation,
          latitude: coords.latitude,
          longitude: coords.longitude,
        }
      }
    })
  }

  render() {
    return(
      <View style={styles.container}>
        <MapView 
          initialRegion={this.state.focusedLocation}
          region={this.state.focusedLocation}
          provider={PROVIDER_GOOGLE} 
          style={styles.map}
          onPress={this.pickLocationHandler}
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