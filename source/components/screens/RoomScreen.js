import React from 'react';
import Room from '../room/Room'

class RoomScreen extends React.Component {
  static navigationOptions = {
    title: 'Room',
    headerStyle: { display: 'none' }
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Room navigate={navigate} />
    );
  }
}

export default RoomScreen;
