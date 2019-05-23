import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import List from './src/components/List';
import InputContainer from './src/components/InputContainer';
import PlaceModal from './src/components/PlaceModal';

export default class App extends Component {
  state = {
    placeName: '',
    places: [],
    selectedPlace: null
  }

  placeNameChangedHandler = (event) => {
    this.setState({placeName: event});
  }

  placeAddedHandler = () => {
    if (this.state.placeName) {
      this.setState(prevState => {
        return {
          places: prevState.places.concat({
            key: `${Math.random()}`, 
            name: prevState.placeName,
            image: {
              uri: 'https://cdn.mos.cms.futurecdn.net/uxyTQorrAz7z8KcVZzPjDe.jpg'
            }
          }),
          placeName: ''
        } 
      });
    } else {
      return;
    }
  }

  placeSelectedHandler = key => {
    this.setState(prevState =>{
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key
        })
      }
    })
  }

  deletePlace = key => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== key;
        }),
        selectedPlace: null
      }
    }); 
  }

  modalClose = () => {
    this.setState({selectedPlace: null})
  }



  render() {
    const {selectedPlace, placeName, places} = this.state;
    return (
      <View style={styles.container}>
        <PlaceModal place={selectedPlace} onModalClose={this.modalClose} onItemDelete={this.deletePlace} />
        <InputContainer 
          placeName={placeName} 
          placeNameChangedHandler={this.placeNameChangedHandler}  
          placeAddedHandler={this.placeAddedHandler}
        />
        <List places={places} onItemSelected={this.placeSelectedHandler} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5FCFF',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
