import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import ListItem from './ListItem';

const List = ({places, deletePlace}) => {
  return (
    <FlatList 
      style={styles.listContainer}
      data={places}
      renderItem={(info) => (
        <ListItem 
          placeName={info.item.value} 
          onItemPressed={() => deletePlace(info.item.key)} 
        />
      )}
    />
  )
}

const styles = StyleSheet.create({
  listContainer: {
    width: '100%'
  },
});


export default List