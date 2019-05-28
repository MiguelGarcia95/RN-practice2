import React, {Component} from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {deletePlace} from '../../store/actions/index';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

class PlaceDetail extends Component {
  placeDeletedHandler = () => {
    this.props.onDeletePlace(this.props.selectedPlace.key);
    this.props.navigator.pop();
  }

  render() {
    const {selectedPlace} = this.props;
    const mapRegion = {
      ...selectedPlace.location,
      latitudeDelta: 0.0122,
      longitudeDelta: 
        Dimensions.get('window').width / 
        Dimensions.get('window').height * 
        0.0122,
    }
    return (
      <View style={styles.container}> 
        <Image source={selectedPlace.image} style={styles.placeImage} />
        <Text style={styles.placeName} >{selectedPlace.name}</Text>
        <MapView 
          initialRegion={mapRegion}
          provider={PROVIDER_GOOGLE} 
          style={styles.map}
        >
          <MapView.Marker coordinate={mapRegion} />
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
  map: {
    width: '100%',
    height: 250
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
