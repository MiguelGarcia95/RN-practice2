// import React, {Component} from 'react';
// import {StyleSheet, View} from 'react-native';

// import List from './src/components/List';
// import InputContainer from './src/components/InputContainer';
// import PlaceModal from './src/components/PlaceModal';
// import {addPlace, deletePlace, selectPlace, unselectPlace} from './src/store/actions';

// class App extends Component {

//   placeSelectedHandler = key => this.props.onPlaceSelect(key);

//   placeDeleteHandler = () => this.props.onPlaceDelete();

//   placeUnselectedHandler = () => this.props.onPlaceUnselect();



//   render() {
//     const {placeName} = this.state;
//     const {selectedPlace, places} = this.props;
//     return (
//       <View style={styles.container}>
//         <PlaceModal 
//           place={selectedPlace} 
//           onModalClose={this.placeUnselectedHandler} 
//           onItemDelete={this.placeDeleteHandler} 
//         />
//         <InputContainer 
//           placeName={placeName} 
//           placeNameChangedHandler={this.placeNameChangedHandler}  
//           placeAddedHandler={this.placeAddedHandler}
//         />
//         <List places={places} onItemSelected={this.placeSelectedHandler} />
//       </View>
//     );
//   }
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#F5FCFF',
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//   },
// });

// const mapStateToProps = state => {
//   return {
//     places: state.places.places,
//     selectedPlace: state.places.selectedPlace
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     onAddPlace: (placeName) => dispatch(addPlace(placeName)),
//     onPlaceDelete: () => dispatch(deletePlace()),
//     onPlaceSelect: (key) => dispatch(selectPlace(key)),
//     onPlaceUnselect: () => dispatch(unselectPlace()),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);

import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';

import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import configureStore from './src/store/configureStore';

const store = configureStore();

Navigation.registerComponent("places.AuthScreen", () => AuthScreen, store, Provider);
Navigation.registerComponent("places.SharePlaceScreen", () => SharePlaceScreen, store, Provider);
Navigation.registerComponent("places.FindPlaceScreen", () => FindPlaceScreen, store, Provider);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'places.AuthScreen',
    title: 'Login'
  }
})