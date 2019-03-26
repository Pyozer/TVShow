import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './src/screens/home_screen';
import TVShowDetailsScreen from './src/screens/tvshow_detail_screen';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  TVShowDetails: {screen: TVShowDetailsScreen},
});

const App = createAppContainer(MainNavigator);

export default App;
