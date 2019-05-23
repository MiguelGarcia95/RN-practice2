import React from 'react';
import {StyleSheet, View } from 'react-native';
import ListItem from './ListItem';

displayList = places => {
  return places.map(place => (
    <ListItem 
      key={place} placeName={place} onItemPressed={() =>alert('itemPressed')} />
    )
  ) 
}

const List = ({places}) => {
  return (
    <View style={styles.listContainer}>
      {displayList(places)}
    </View>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    width: '100%'
  },
});


export default List