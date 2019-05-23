import React from 'react'
import { View, Text, Image, Modal, Button, StyleSheet } from 'react-native'

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
          <Button title='Delete' color='red' onPress={() => onItemDelete(place.key)} />
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
  }
})

export default PlaceModal
