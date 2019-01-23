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

class StartBtn extends React.Component {
  state ={
    touchColor: false,
  };

  onPressIn() {
    this.setState({
      touchColor: !this.state.touchColor
    })
  }

  onPressOut() {
    this.setState({
      touchColor: !this.state.touchColor
    })
  }

  onPress() {
    const {
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
    } = this.props;

    createHero();
    // createMonsters();
    // createMedical();
    // createWeapons();
    createInventory();
    createNotes();
    // createRooms();
    resetMove();
    resetMedical();
    // createSpeakers();
    changeScreen(screenNavigation.intro);
  }
  render() {
    const { theme } = this.props;
    return (
      <TouchableWithoutFeedback
        onPressIn={this.onPressIn.bind(this)}
        onPressOut={this.onPressOut.bind(this)}
        onPress={this.onPress.bind(this)}
      >
        <View style={[
          styles.button,
          ]}>
          <Text style={[
            styles.text,
            theme.color,
            this.state.touchColor && styles.opacity
            ]}>НОВАЯ ИГРА</Text>
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
    opacity: 0.5,
  }
});

export default connect(
  ({theme, room}) => ({theme, room}),
  {
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
  }
)(StartBtn);
