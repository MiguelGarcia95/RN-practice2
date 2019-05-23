import React from 'react';
import {StyleSheet, View } from 'react-native';
import ListItem from './ListItem';

const List = ({places}) => {
  const list = places.map(place => <ListItem key={place} placeName={place} />)

  return (
    <View style={styles.listContainer}>
      {list}
    </View>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    width: '100%'
  },
});


export default List