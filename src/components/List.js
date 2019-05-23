import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
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
    <ScrollView style={styles.listContainer}>
      {displayList(places, deletePlace)}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    width: '100%'
  },
});


export default List