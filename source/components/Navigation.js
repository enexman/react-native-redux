import { createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen'
import ProfileScreen from './ProfileScreen'

const Navigation = createStackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen }
});

export default Navigation;
