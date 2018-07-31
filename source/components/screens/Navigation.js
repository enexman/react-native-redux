import { createStackNavigator } from 'react-navigation';
import RoomScreen from './RoomScreen';
import StartScreen from './StartScreen';

const Navigation = createStackNavigator({
  Home: { screen: RoomScreen },
  // room: { screen: RoomScreen },
});

export default Navigation;
