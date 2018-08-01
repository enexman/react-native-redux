import React from 'react';
import Start from '../start/Start'

class StartScreen extends React.Component {
  static navigationOptions = {
    title: 'Start',
    headerStyle: { display: 'none' }
  };
  componentWillUnmount() {}
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Start navigate={navigate} />
    );
  }
}

export default StartScreen;
