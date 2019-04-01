import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/home_screen';
import TVShowDetailsScreen from './src/screens/tvshow_detail_screen';
import { Platform } from 'react-native';

const MainNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: `TV Show`,
    },
  },
  TVShowDetails: {
    screen: TVShowDetailsScreen,
    navigationOptions: {
      title: `Details`,
    },
  },
}, {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0
      },
      headerTitleStyle: {
        ...Platform.select({
          ios: { fontFamily: 'San Francisco' },
          android: { fontFamily: 'Roboto' },
        }),
      },
    },
  });

const App = createAppContainer(MainNavigator)

export default App;
