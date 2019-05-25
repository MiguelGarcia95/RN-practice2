import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';

import {deletePlace} from '../../store/actions';

const PlaceDetail = ({selectedPlace, onDeletePlace}) => {
  return (
    <View style={styles.container}> 
      <Image source={selectedPlace.image} style={styles.placeImage} />
      <Text style={styles.placeName} >{selectedPlace.name}</Text>
      <View> 
        <TouchableOpacity onPress={onDeletePlace} >
          <View style={styles.deleteButton}>
            <Icon size={30} name='ios-trash' color='red' />
          </View>
        </TouchableOpacity>
      </View>
    </View> 
  )
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