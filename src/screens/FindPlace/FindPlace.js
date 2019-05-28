import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Animated} from 'react-native';
import {connect} from 'react-redux';
import {getPlaces} from '../../store/actions';

import List from '../../components/List/List';

class FindPlaceScreen extends Component {
  static navigatorStyle = {
    navBarButtonColor: 'orange'
  }

  constructor(props) {
    super(props);
    this.state = {
      placesLoaded: false,
      removeButtonAnimation: new Animated.Value(1),
      placesAnimation: new Animated.Value(0)
    }
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  } 

  componentDidMount() {
    this.props.onGetPlaces();
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

  placesLoadedHandlder = () => {
    Animated.timing(this.state.placesAnimation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }).start()
  }

  placesSearchHandler = () => {
    Animated.timing(this.state.removeButtonAnimation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true
    }).start(() => {
      this.setState({
        placesLoaded: true
      });
      this.placesLoadedHandlder();
    });
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
      <Animated.View style={{
        opacity: this.state.removeButtonAnimation,
        transform: [{
          scale: this.state.removeButtonAnimation.interpolate({
            inputRange: [0,1],
            outputRange: [12,1]
          })
        },]
      }} >
        <TouchableOpacity onPress={this.placesSearchHandler}>
          <View style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Find Places</Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
    );

    if (this.state.placesLoaded) {
      content = (
        <Animated.View style={{
          opacity: this.state.placesAnimation,
        }}>
          <List places={this.props.places} onItemSelected={this.itemSelectedHandler} />
        </Animated.View>
      );
    }
    return(
      <View style={!this.state.placesLoaded && styles.buttonContainer } >{content}</View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchButton: {
    borderColor: 'orange',
    borderWidth: 3,
    borderRadius: 50,
    padding: 20,
    alignItems: 'center'
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

const mapDispatchTopProps = dispatch => {
  return {
    onGetPlaces: () => dispatch(getPlaces())
  }
}


export default connect(mapStateToProps, mapDispatchTopProps)(FindPlaceScreen);