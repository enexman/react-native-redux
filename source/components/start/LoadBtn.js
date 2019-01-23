import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import {
  changeScreen,
  createHero,
  createInventory,
  createNotes,
  createRooms,
  createMonsters,
  createMedical,
  createWeapons,
  resetMove,
  createSpeakers,
  resetMedical,
} from '../../actions'
import { Color } from './../../css';
import { screenNavigation } from '../../data/screen-navigation';

class LoadBtn extends React.Component {
  state ={
    touchColor: true,
  };

  onPressToggle() {
    // this.setState({
    //   touchColor: !this.state.touchColor
    // })
  }

  onPress() {

  }
  render() {
    const { theme } = this.props;
    return (
      <TouchableWithoutFeedback
        onPressIn={this.onPressToggle.bind(this)}
        onPressOut={this.onPressToggle.bind(this)}
        onPress={this.onPress.bind(this)}
      >
        <View style={[
          styles.button,
          ]}>
          <Text style={[
            styles.text,
            theme.color,
            this.state.touchColor && styles.opacity
            ]}>ПРОДОЛЖИТЬ</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 180,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 13,
  },
  opacity: {
    opacity: 0.3,
  }
});

export default connect(
  ({theme}) => ({theme}),
  {}
)(LoadBtn);
