import React from 'react'
import { View, Text, Image, Modal, Button, StyleSheet } from 'react-native'

const PlaceModal = ({place}) => {
  let modalContent = null;
  if (place) {
    modalContent = (
      <View>
        <Image source={place.image} />
        <Text>{place.name}</Text>
      </View>
    )
  }
  return (
    <Modal visible={place !== null} >
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
  }
})

export default PlaceModal
