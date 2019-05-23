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
          placeName={info.value} 
          onItemPressed={() => deletePlace(info.key)} 
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