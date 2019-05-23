import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';

import List from './src/components/List';
import InputContainer from './src/components/InputContainer';
import PlaceModal from './src/components/PlaceModal';
import {addPlace, deletePlace, selectPlace, unselectPlace} from './src/store/actions';

class App extends Component {
  state = {
    placeName: ''
  }

  placeNameChangedHandler = (event) => {
    this.setState({placeName: event});
  }

  placeAddedHandler = () => {
    if (this.state.placeName) {
      this.props.onAddPlace(this.state.placeName);
      this.setState({placeName: ''});
    } else {
      return;
    }
  }

  placeSelectedHandler = key => this.props.onPlaceSelect(key);

  placeDeleteHandler = () => this.props.onPlaceDelete();

  placeUnselectedHandler = () => this.props.onPlaceUnselect();



  render() {
    const {placeName} = this.state;
    const {selectedPlace, places} = this.props;
    return (
      <View style={styles.container}>
        <PlaceModal 
          place={selectedPlace} 
          onModalClose={this.placeUnselectedHandler} 
          onItemDelete={this.placeDeleteHandler} 
        />
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

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (placeName) => dispatch(addPlace(placeName)),
    onPlaceDelete: () => dispatch(deletePlace()),
    onPlaceSelect: (key) => dispatch(selectPlace(key)),
    onPlaceUnselect: () => dispatch(unselectPlace()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);