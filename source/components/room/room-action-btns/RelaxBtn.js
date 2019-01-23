import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, TouchableWithoutFeedback, Alert } from 'react-native';
import {
  heroRelax,
  moveMonsters,
  isMove,
  heroVisible,
  visibleDeactivate,
} from '../../../actions';
import { Color, buttonRoomAction } from '../../../css';

class RelaxBtn extends React.Component {
  state ={
    touchColor: false,
    relax: false,
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
    const { room, moveMonsters, heroRelax, isMove, heroVisible, visibleDeactivate} = this.props;
    heroRelax();
    moveMonsters(room);
    isMove();
    heroVisible();
    visibleDeactivate();
  }

  render() {
    const { theme, } = this.props;

    return (
      <TouchableWithoutFeedback
        onPressIn={this.onPressIn.bind(this)}
        onPressOut={this.onPressOut.bind(this)}
        onPress={this.onPress.bind(this)}
      >
        <View style={[styles.button, this.state.touchColor && theme.backgroundColor]}>
          <Text style={[styles.text, theme.color, this.state.touchColor && styles.touchColorText]}>Отдохнуть</Text>
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
  ({theme, relax, hero, room}) => ({theme, relax, hero, room}),
  {heroRelax, moveMonsters, isMove, heroVisible, visibleDeactivate,}
)(RelaxBtn);
