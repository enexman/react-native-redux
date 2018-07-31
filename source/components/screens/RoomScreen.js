import React from 'react';
import Room from '../Room'

class StartScreen extends React.Component {
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

export default StartScreen;
