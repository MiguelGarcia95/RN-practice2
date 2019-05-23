import React from 'react'
import { View, Text, Image, Modal, Button, StyleSheet } from 'react-native'

const PlaceModal = ({placeImage, placeName}) => {
  return (
    <Modal>
      <View>
        <Image source={placeImage} />
        <Text>{placeName}</Text>
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
