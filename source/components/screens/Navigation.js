import { createStackNavigator } from 'react-navigation';
import RoomScreen from './RoomScreen';
import StartScreen from './StartScreen';
import FightScreen from './FightScreen';
import InventoryScreen from './InventoryScreen';

const Navigation = createStackNavigator({
  Home: { screen: StartScreen },
  Room: { screen: RoomScreen },
  Inventory: { screen: InventoryScreen },
  Fight: { screen: FightScreen },
});

export default Navigation;
