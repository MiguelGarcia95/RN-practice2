import React from 'react';
import {StyleSheet, ScrollView, FlatList} from 'react-native';
import ListItem from './ListItem';

displayList = (places, deletePlace) => {
  return places.map((place, key) => (
    <ListItem 
      key={key} placeName={place} onItemPressed={() => deletePlace(key)} />
    )
  ) 
}

const List = ({places, deletePlace}) => {
  return (
    <FlatList 
      style={styles.listContainer}
      data={places}
    // {displayList(places, deletePlace)}
    />
  )
}

const styles = StyleSheet.create({
  listContainer: {
    width: '100%'
  },
});


export default List