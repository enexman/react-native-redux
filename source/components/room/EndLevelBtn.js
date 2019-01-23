import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import {
  changeScreen,
  moveToRoom,
  changeLevel,
} from '../../actions'
import { Color } from './../../css';
import { screenNavigation } from '../../data/screen-navigation';

class EndLevelBtn extends React.Component {
  state ={
    touchColor: false,
  };

  onPressToggle() {
    this.setState({
      touchColor: !this.state.touchColor
    })
  }

  onPress() {
    const {
      changeScreen,
      moveToRoom,
      changeLevel,
      level,
    } = this.props;

    moveToRoom('sr');
    changeScreen(screenNavigation.levels);
    changeLevel(level.active);
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
          theme.borderColor,
          this.state.touchColor && theme.backgroundColor
          ]}>
          <Text style={[
            styles.text,
            theme.color,
            this.state.touchColor && styles.touchColorText
            ]}>Завершить уровень</Text>
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
  },
  text: {
    fontWeight: 'bold',
  },
  touchColorText: {
    color: Color.black,
  }
});

export default connect(
  ({theme, room, level}) => ({theme, room, level}),
  {
    changeScreen,
    moveToRoom,
    changeLevel,
  }
)(EndLevelBtn);
