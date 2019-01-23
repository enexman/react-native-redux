import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import {
  moveMonsters,
  moveToRoom,
  findDeactivate,
  heroVisible,
  isMove,
  visibleDeactivate,
} from '../../actions';

class RoomNavBtn extends React.Component {
  state ={
    touchColor: false,
  };

  onPressIn() {
    this.setState({
      touchColor: !this.state.touchColor,
    });
  }

  onPressOut() {
    this.setState({
      touchColor: !this.state.touchColor,
    });
  }

  onPress() {
    const {
      name, room, moveMonsters,
      moveToRoom, findDeactivate,
      heroVisible, isMove, visibleDeactivate
    } = this.props;

    moveMonsters(room);
    heroVisible();
    moveToRoom(name);
    findDeactivate();
    isMove();
    visibleDeactivate();
  }

  render() {
    const { theme } = this.props;
    return (
      <TouchableWithoutFeedback
        onPressIn={this.onPressIn.bind(this)}
        onPressOut={this.onPressOut.bind(this)}
        onPress={this.onPress.bind(this)}
      >
        <View style={[styles.button, this.props.rotate]}>
          <View style={[styles.mask, theme.backgroundColor, this.state.touchColor && styles.touchColorBG]}></View>
          <Image
            style={[styles.image]}
            source={require('../../image/arrow-mask.png')}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 40,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  touchColorBG: {
    opacity: 0.5,
  },
  image: {
    width: 20,
    height: 20,
  },
  mask: {
    position: 'absolute',
    width: 20,
    height: 20,
    opacity: 1,
  }
});

export default connect(
  ({theme, room}) => ({theme, room}),
  {moveMonsters, moveToRoom, findDeactivate, heroVisible, isMove, visibleDeactivate}
)(RoomNavBtn);
