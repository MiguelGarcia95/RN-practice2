import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, TextInput, Button, StyleSheet, ScrollView, Image} from 'react-native';
import {addPlace} from '../../store/actions';

// import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import MainText from '../../components/UI/MainText/MainText';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import previewImage from '../../assets/images/background.jpg';
import InputContainer from '../../components/InputContainer/InputContainer';
import PickImage from '../../components/PickImage/PickImage';
import PickLocation from '../../components/PickLocation/PickLocation';

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
          <MainText>
            <HeadingText>Share a Place with Us!</HeadingText>
          </MainText>

          <PickImage />
          <PickLocation />
          
          <InputContainer />
 
          <View style={styles.button}>
            <Button title='Share the place.' />
          </View>
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
  },
  button: {
    margin: 5,
  }
})

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: placeName => dispatch(addPlace(placeName))
  }
}

export default connect(null, mapDispatchToProps)(SharePlaceScreen);