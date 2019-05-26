import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import List from '../../components/List/List';

class FindPlaceScreen extends Component {
  static navigatorStyle = {
    navBarButtonColor: 'orange'
  }

  constructor(props) {
    super(props);
    this.state = {
      placesLoaded: false
    }
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  } 
  
  onNavigatorEvent = event => {
    if(event.type === 'NavBarButtonPress') {
      if (event.id === 'sideMenuToggle') {
        this.props.navigator.toggleDrawer({
          side: 'left'
        });
      }
    }
  }

  placesSearchHandler = () => {

  }

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
    let content = (
      <TouchableOpacity onPress={this.placesSearchHandler}>
        <View style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Find Places</Text>
        </View>
      </TouchableOpacity>
    );
    if (this.state.placesLoaded) {
      content = (
        <List places={this.props.places} onItemSelected={this.itemSelectedHandler} />
      );
    }
    return(
      <View>{content}</View>
    );
  }
}

const styles = StyleSheet.create({
  searchButton: {
    borderColor: 'orange',
    borderWidth: 3,
    borderRadius: 50,
    padding: 20,
  }, 
  searchButtonText: {
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 26,
  }
})

const mapStateToProps = state => {
  return {
    places: state.places.places
  }
}


export default connect(mapStateToProps)(FindPlaceScreen);