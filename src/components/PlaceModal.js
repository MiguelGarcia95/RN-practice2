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
    <Modal>
      <View>
        {modalContent}
        <View>
          <Button title='Close' />
          <Button title='Delete' />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({

})

export default PlaceModal
