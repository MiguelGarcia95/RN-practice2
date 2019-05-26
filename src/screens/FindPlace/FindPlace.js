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
    let content = (
      <TouchableOpacity>
        <View>
          <Text>Find Places</Text>
        </View>
      </TouchableOpacity>
    );
    return(
      <View>
        <List places={places} onItemSelected={this.itemSelectedHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchButton: {
    borderColor: 'orange',
    borderWidth: 3,
    borderRadius: 50,
    padding: 20
  }
})

const mapStateToProps = state => {
  return {
    places: state.places.places
  }
}


export default connect(mapStateToProps)(FindPlaceScreen);