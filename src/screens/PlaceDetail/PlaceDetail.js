import React, {Component} from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

import {deletePlace} from '../../store/actions';

class PlaceDetail extends Component {
  placeDeletedHandler = () => {
    this.props.onDeletePlace(this.props.selectedPlace.key);
    this.props.navigator.pop();
  }

  render() {
    const {selectedPlace} = this.props;
    return (
      <View style={styles.container}> 
        <Image source={selectedPlace.image} style={styles.placeImage} />
        <Text style={styles.placeName} >{selectedPlace.name}</Text>
        <MapView 
          initialRegion={this.state.focusedLocation}
          // region={this.state.focusedLocation}
          provider={PROVIDER_GOOGLE} 
          style={styles.map}
          onPress={this.pickLocationHandler}
          ref={ref => this.map = ref}
        >
          {/* {marker} */}
        </MapView>
        <View> 
          <TouchableOpacity onPress={this.placeDeletedHandler} >
            <View style={styles.deleteButton}>
              <Icon size={30} name='ios-trash' color='red' />
            </View>
          </TouchableOpacity>
        </View>
      </View> 
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 22
  },
  placeImage: {
    width: '100%',
    height: 200
  },
  placeName: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 28
  },
  deleteButton: {
    alignItems: 'center'
  }
})

const mapDispatchToProps = dispatch => {
  return {
    onDeletePlace: key => dispatch(deletePlace(key))
  }
}

export default connect(null, mapDispatchToProps)(PlaceDetail);
