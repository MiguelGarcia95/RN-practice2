import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, TextInput, Button} from 'react-native';
import {addPlace} from '../../store/actions';

// import InputContainer from '../../components/InputContainer/InputContainer';

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
        <Text>Share a Place with Us!</Text>
        <View><Text>Image PReview</Text></View>
        <Button title='pick image' />
        <View><Text>Map</Text></View>
        <Button title='Locate me' />
        <TextInput placeholder='place name' />
        <Button title='Share the place.' />
        {/* <InputContainer onAddPlace={this.props.onAddPlace} /> */}
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