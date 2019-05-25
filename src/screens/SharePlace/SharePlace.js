import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, TextInput, Button, StyleSheet, ScrollView} from 'react-native';
import {addPlace} from '../../store/actions';

import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
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
      <ScrollView>
        <View style={styles.container}> 
          <Text>Share a Place with Us!</Text>
          <View style={styles.placeholder}>
            <Text>Image PReview</Text>
          </View> 
          <Button title='pick image' />
          <View style={styles.placeholder}>
            <Text>Map</Text>
          </View>
          <Button title='Locate me' />
          <DefaultInput placeholder='place name' />
          <Button title='Share the place.' />
          {/* <InputContainer onAddPlace={this.props.onAddPlace} /> */}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  placeholder: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#eee',
    width: '80%',
    height: 150,
  }
})

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: placeName => dispatch(addPlace(placeName))
  }
}

export default connect(null, mapDispatchToProps)(SharePlaceScreen);