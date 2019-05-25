import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View} from 'react-native';
import {addPlace} from '../../store/actions';

import InputContainer from '../../components/InputContainer/InputContainer';

class SharePlaceScreen extends Component {
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