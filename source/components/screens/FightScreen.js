import React from 'react';
import Fight from '../fight/Fight'

class FightScreen extends React.Component {
  static navigationOptions = {
    title: 'Room',
    headerStyle: { display: 'none' }
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Fight navigate={navigate} />
    );
  }
}

export default FightScreen;
