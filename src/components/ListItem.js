import React from 'react'
import { View, Text, StyleSheet, Touchable} from 'react-native'

const ListItem = ({placeName, onItemPressed}) => {
  return (
    <Touchable onPress={onItemPressed}>
      <View style={styles.listItem} >
        <Text>{placeName}</Text>
      </View>
    </Touchable>
  )
}

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 10,
    backgroundColor: '#eee',
    marginBottom: 5
  },
})



export default ListItem
