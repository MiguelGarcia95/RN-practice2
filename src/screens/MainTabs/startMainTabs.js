import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
  Promise.all([
    Icon.getImageSource('md-map', 30),
    Icon.getImageSource('md-share-alt', 30),
    Icon.getImageSource('ios-menu', 30),
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: "places.FindPlaceScreen",
          label: 'Find Place',
          title: 'Find Place',
          icon: sources[0],
          navigatorButton: {
            leftButtons: [
              {
                icon: sources[2],
                title: "Menu"
              },
            ]
          }
        },
        {
          screen: "places.SharePlaceScreen",
          label: 'Share Place',
          title: 'Share Place', 
          icon: sources[1],
          navigatorButton: {
            leftButtons: [
              {
                icon: sources[2],
                title: "Menu"
              },
            ]
          }
        },
      ],
      drawer: {
        left: {
          screen: "places.SideDrawerScreen"
        }
      },
    });
  });
}

export default startTabs;

