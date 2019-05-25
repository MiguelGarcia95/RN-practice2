import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
// import {addPlace} from '../../store/actions';

import List from '../../components/List';

class FindPlaceScreen extends Component {
  itemSelectedHandler = key => {
    this.props.navigator.push({})
  }

  render() {
    const {places} = this.props;
    return(
      <View>
        <List places={places} onItemSelected />
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