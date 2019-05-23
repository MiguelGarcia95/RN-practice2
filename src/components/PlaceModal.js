import React from 'react'
import { View, Text, Image, Modal, Button, StyleSheet } from 'react-native'

const PlaceModal = ({place}) => {
  return (
    <Modal>
      <View>
        <Image source={place.image} />
        <Text>{place.name}</Text>
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
