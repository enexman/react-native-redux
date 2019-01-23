import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import {
  changeScreen,
  addBonus,
  setCompleteAction,
  clearWoundHero,
  setInitialAttack,
  deadMonster,
} from '../../../actions'
import { Color, simpleText } from '../../../css';
import { screenNavigation } from '../../../data/screen-navigation';

class BonusBtn extends React.Component {
  state ={
    touchColor: false,
  };
  onPressInTouchable() {
    this.setState({
      touchColor: !this.state.touchColor
    })
  }
  onPressTouchable() {
    this.setState({
      touchColor: !this.state.touchColor
    });

    const {
      changeScreen,
      addBonus,
      setCompleteAction,
      accuracy,
      strength,
      agility,
      rating,
      room,
      hero,
      clearWoundHero,
      setInitialAttack,
      monster,
      deadMonster,
    } = this.props;

    if(hero.dead) {
      changeScreen(screenNavigation.end);
      return;
    }
    // const activeRoom = room.filter((it) => it.active)[0];
    changeScreen(screenNavigation.room);
    // setCompleteAction(activeRoom.name);
    addBonus(accuracy, strength, agility, rating);
    clearWoundHero();
    setInitialAttack();
    deadMonster(monster.key);
  }
  render() {
    const { theme } = this.props;

    return (
      <TouchableWithoutFeedback
        onPressIn={this.onPressInTouchable.bind(this)}
        onPress={this.onPressTouchable.bind(this)}
      >
        <View style={[
          styles.button,
          theme.borderColor,
          this.state.touchColor && theme.backgroundColor]}
        >
          <Text style={[
            styles.text,
            theme.color,
            this.state.touchColor && styles.touchColorText]}
          >
            Ok
          </Text>
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
    ...simpleText,
    fontWeight: 'bold',
  },
  touchColorText: {
    color: Color.black,
    fontWeight: 'bold',
  }
});

export default connect(
  ({room, hero, theme, monster}) => ({room, hero, theme, monster}),
  {changeScreen, addBonus, setCompleteAction, clearWoundHero, setInitialAttack, deadMonster}
)(BonusBtn);
