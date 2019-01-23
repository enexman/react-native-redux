import React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import {
  changeScreen,
  closeDialogRun,
  setInitialAttack,
  clearWoundHero,
  runFromBattle,
  isMove,
} from '../../../actions';
import { Color } from '../../../css';
import { screenNavigation } from '../../../data/screen-navigation';
import { getRandomNumber } from '../../../util';

class DialogRunBtnYes extends React.Component {
  state = {
    touchColor: false,
  };

  onPressToggle() {
    this.setState({
      touchColor: !this.state.touchColor,
    })
  }

  onPress() {
    const {
      changeScreen,
      closeDialogRun,
      setInitialAttack,
      clearWoundHero,
      room,
      runFromBattle,
      hero,
      isMove,
    } = this.props;

    const activeRoom = room.filter((it) => it.name === hero.room)[0];

    changeScreen(screenNavigation.run);
    closeDialogRun();
    setInitialAttack();
    clearWoundHero();
    isMove();
    runFromBattle(activeRoom.direction[getRandomNumber(activeRoom.direction.length)].name);
  }

  render() {
    const { theme } = this.props;

    return (
      <TouchableWithoutFeedback
        onPressIn={this.onPressToggle.bind(this)}
        onPressOut={this.onPressToggle.bind(this)}
        onPress={this.onPress.bind(this)}
      >
        <View style={[styles.button, theme.borderColor, this.state.touchColor && theme.backgroundColor]}>
          <Text style={[styles.text, theme.color, this.state.touchColor && styles.touchColorText]}>Да</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 110,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  text: {
    fontSize: 13,
  },
  touchColorText: {
    color: Color.black,
    fontWeight: 'bold',
  },
  invisible: {
    display: 'none',
  }
});

export default connect(
  ({room, theme, hero}) => ({room, theme, hero}),
  {
    changeScreen,
    closeDialogRun,
    setInitialAttack,
    clearWoundHero,
    runFromBattle,
    isMove,
  }
)(DialogRunBtnYes);
