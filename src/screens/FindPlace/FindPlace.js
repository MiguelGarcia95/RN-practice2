import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
// import {addPlace} from '../../store/actions';

import List from '../../components/List';

class FindPlaceScreen extends Component {
  render() {
    const {places} = this.props;
    return(
      <View>
        <List places={places} />
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