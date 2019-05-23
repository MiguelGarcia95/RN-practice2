import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import ListItem from './ListItem';

displayList = places => {
  return places.map((place, key) => (
    <ListItem 
      key={key} placeName={place} onItemPressed={() =>alert(`itemPressed ${key}`)} />
    )
  ) 
}

const List = ({places}) => {
  return (
    <ScrollView style={styles.listContainer}>
      {displayList(places)}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    width: '100%'
  },
});


export default List