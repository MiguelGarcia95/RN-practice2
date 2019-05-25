import React from 'react'
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

const PlaceDetail = ({place, onItemDelete, onModalClose}) => {
  return (
    <View style={styles.modalContainer}> 
      <Image source={place.image} style={styles.placeImage} />
      <Text style={styles.placeName} >{place.name}</Text>
      <View> 
        <TouchableOpacity onPress={onItemDelete} >
          <View style={styles.deleteButton}>
            <Icon size={30} name='ios-trash' color='red' />
          </View>
        </TouchableOpacity>
        <Button title='Close' onPress={onModalClose} /> 
      </View>
    </View> 
  )
}

const styles = StyleSheet.create({
  modalContainer: {
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

export default PlaceDetail
