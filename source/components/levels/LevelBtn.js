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
  startLevel,
} from '../../actions'
import { Color } from './../../css';
import { screenNavigation } from '../../data/screen-navigation';

class LevelBtn extends React.Component {

  state ={
    touchColor: false,
  };

  onPressToggle() {
    const { level, levelName } = this.props;
    if (levelName > level.opened) return;
    this.setState({
      touchColor: !this.state.touchColor
    })
  }

  onPress() {
    const {
      level,
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
      levelName,
      startLevel,
    } = this.props;

    if (levelName > level.opened) return;
    createMonsters(levelName);
    createMedical(levelName);
    createWeapons(levelName);
    createRooms(levelName);
    startLevel(levelName);
    createSpeakers(levelName);
    changeScreen(screenNavigation.room);
  }
  render() {
    const { theme, levelName, level } = this.props;
    const zero = (levelName < 10) ? '0' : '';
    return (
      <TouchableWithoutFeedback
        onPressIn={this.onPressToggle.bind(this)}
        onPressOut={this.onPressToggle.bind(this)}
        onPress={this.onPress.bind(this)}
      >
        <View style={[
          theme.borderColor,
          styles.button,
          theme.borderColor,
          this.state.touchColor && theme.backgroundColor,
          (levelName > level.opened) && styles.opacity
          ]}>
          <Text style={[
            styles.text,
            theme.color,
            this.state.touchColor && styles.touchColorText
            ]}>{zero + levelName}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    width: 40,
    borderWidth: 2,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  touchColorText: {
    color: Color.black,
  },
  opacity: {
    opacity: 0.3,
  }
});

export default connect(
  ({theme, room, level}) => ({theme, room, level}),
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
    startLevel,
  }
)(LevelBtn);
