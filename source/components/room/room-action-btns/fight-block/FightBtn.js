import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import { changeScreen, createMonster } from '../../../../actions';
import { Color, buttonRoomAction } from '../../../../css';
import { screenNavigation } from '../../../../data/screen-navigation';

class FightBtn extends React.Component {
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
    const { changeScreen, monster, createMonster } = this.props;
    createMonster(monster);
    changeScreen(screenNavigation.fight);
  }
  render() {
    const { theme, monster } = this.props;
    return (
      <TouchableWithoutFeedback
        onPressIn={this.onPressInTouchable.bind(this)}
        onPress={this.onPressTouchable.bind(this)}
      >
        <View style={[styles.button, this.state.touchColor && theme.backgroundColor]}>
          <Text style={[styles.text, theme.color, this.state.touchColor && styles.touchColorText]}>Бой с {monster.name}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    ...buttonRoomAction,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  touchColorText: {
    color: Color.black,
  }
});

export default connect(({theme}) => ({theme}), {changeScreen, createMonster})(FightBtn);
