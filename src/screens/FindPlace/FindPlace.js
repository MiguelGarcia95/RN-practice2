import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';

import List from '../../components/List';

class FindPlaceScreen extends Component {

  itemSelectedHandler = key => {
    const selectedPlace = this.props.places.find(place => {
      return place.key === key;
    });

    this.props.navigator.push({
      screen: 'places.PlaceDetailScreen',
      title: selectedPlace.name,
      passProps: {
        selectedPlace: selectedPlace
      },
    })
  }

  render() {
    const {places} = this.props;
    return(
      <View>
        <List places={places} onItemSelected={this.itemSelectedHandler} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    places: state.places.places
  }
}


export default connect(mapStateToProps)(FindPlaceScreen);