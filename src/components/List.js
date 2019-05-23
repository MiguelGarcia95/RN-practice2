import React from 'react'
import { View, Text } from 'react-native'

const List = ({places}) => {
  const places = this.state.places.map(place => <ListItem key={place} placeName={place} />)

  return (
    <View style={styles.listContainer}>
      {places}
    </View>
  )
}

export default List