import React from 'react';
import Inventory from '../inventory/Inventory'

class InventoryScreen extends React.Component {
  static navigationOptions = {
    title: 'Room',
    headerStyle: { display: 'none' }
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Inventory navigate={navigate} />
    );
  }
}

export default InventoryScreen;
