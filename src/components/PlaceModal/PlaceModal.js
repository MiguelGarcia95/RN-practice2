import React from 'react'
import { View, Text, Image, Modal, Button, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

const PlaceModal = ({place, onItemDelete, onModalClose}) => {
  let modalContent = null;
  if (place) {
    modalContent = (
      <View>
        <Image source={place.image} style={styles.placeImage} />
        <Text style={styles.placeName} >{place.name}</Text>
      </View>
    )
  }
  return (
    <Modal onRequestClose={onModalClose} visible={place !== null} animationType='slide' >
      <View style={styles.modalContainer}> 
        {modalContent}
        <View> 
          <TouchableOpacity onPress={onItemDelete} >
            <View style={styles.deleteButton}>
              <Icon 
                size={30} 
                name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'} 
                color='red' 
              />
            </View>
          </TouchableOpacity>
          <Button title='Close' onPress={onModalClose} /> 
        </View>
      </View> 
    </Modal> 
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

export default PlaceModal
