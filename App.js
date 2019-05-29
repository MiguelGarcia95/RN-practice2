import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';

import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import PlaceDetailScreen from './src/screens/PlaceDetail/PlaceDetail';
import SideDrawerScreen from './src/screens/SideDrawer/SideDrawer';
import configureStore from './src/store/configureStore';

const store = configureStore();

Navigation.registerComponent("places.AuthScreen", () => AuthScreen, store, Provider);
Navigation.registerComponent("places.SharePlaceScreen", () => SharePlaceScreen, store, Provider);
Navigation.registerComponent("places.FindPlaceScreen", () => FindPlaceScreen, store, Provider);
Navigation.registerComponent("places.PlaceDetailScreen", () => PlaceDetailScreen, store, Provider);
Navigation.registerComponent("places.SideDrawerScreen", () => SideDrawerScreen, store, Provider);


//Start App 
export default () => Navigation.startSingleScreenApp({
  screen: {
    screen: 'places.AuthScreen',
    title: 'Login'
  }
})