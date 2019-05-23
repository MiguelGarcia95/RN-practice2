import React from 'react'
import { View, Text, Image, Modal, Button, StyleSheet } from 'react-native'

const PlaceModal = ({place}) => {
  let modalContent = null;
  if (place) {
    modalContent = (
      <View>
        <Image source={place.image} style={styles.placeImage} />
        <Text>{place.name}</Text>
      </View>
    )
  }
  return (
    <Modal visible={place !== null} animationType='slide' >
      <View style={styles.modalContainer}> 
        {modalContent}
        <View>
          <Button title='Delete' color='red' />
          <Button title='Close' /> 
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
  }
})

export default PlaceModal
