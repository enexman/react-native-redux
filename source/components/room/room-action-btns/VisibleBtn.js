import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import {
  heroInvisible,
  visibleActivate,
  moveMonsters,
  isMove,
} from '../../../actions';
import { Color, buttonRoomAction } from '../../../css';

class VisibleBtn extends React.Component {
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
    });
  }

  onPress() {
    const { room, moveMonsters, heroInvisible, isMove, visibleActivate } = this.props;
    heroInvisible();
    moveMonsters(room);
    isMove();
    visibleActivate();
  }

  render() {
    const { theme, hero } = this.props;
    const message = hero.invisible ? 'Оставаться' : 'Прятаться';
    return (
      <TouchableWithoutFeedback
        onPressIn={this.onPressIn.bind(this)}
        onPressOut={this.onPressOut.bind(this)}
        onPress={this.onPress.bind(this)}
      >
        <View style={[styles.button, this.state.touchColor && theme.backgroundColor]}>
          <Text style={[styles.text, theme.color, this.state.touchColor && styles.touchColorText]}>{message}</Text>
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
    fontWeight: 'bold',
  },
  touchColorText: {
    color: Color.black,
  }
});

export default connect(
  ({theme, room, hero}) => ({theme, room, hero}),
  {heroInvisible, moveMonsters, isMove, visibleActivate}
)(VisibleBtn);
