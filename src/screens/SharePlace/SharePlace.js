import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import {addPlace} from '../../store/actions';


import InputContainer from '../../components/InputContainer';

class SharePlaceScreen extends Component {
  render() {
    return(
      <View>
        <InputContainer onAddPlace={this.props.onAddPlace} />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: placeName => dispatch(addPlace(placeName))
  }
}

export default connect(null, mapDispatchToProps)(SharePlaceScreen);